// implement your API here
const express = require('express');
const data = require("/data/db.js").find('db');
const server = express(); // creates server for API calls :)

server.get('/api/users', (req, res) => {
    if(!req.body) {
        res.status(500).send("error: The users information could not be retrieved.")
    }
    else{
        const users = data.find();
        res.json(users);
    }
});

server.post('/api/users', (req, res) => {
    if(req.body.name == null | req.body.bio == null) {
        res.status(400).send("errorMessage: Please provide name and bio for the user.")
    }
    else{
       data.insert(req.body).status(201);
       const newUser = data.find()
       res.json(req.body);
    }
});

server.get('/api/users/:id', (req, res) => {
    if(!data.findById(req.body.id)) {
        res.status(404).json({ message: "The user with the specified ID does not exist."})
    }
    else {
        const retrievedUser = data.findById(req.body.id);
        res.json(retrievedUser);
    }
});

server.delete('/api/users/:id', (req, res) => {
    if(!data.findById(req.body.id)) {
        res.status(404).json({ message: "The user with the specified ID does not exist."})
    }
    else {
        data.remove(req.body.id);
        res.json({message: "The user has been deleted"});
    }
});

server.put('/api/users/:id', (req, res) => {
});

