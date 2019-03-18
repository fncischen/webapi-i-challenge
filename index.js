// implement your API here
const express = require('express');
const server = express(); // creates server for API calls :)

server.get('/api/users', (req, res) => {
    if(!req.body) {
        res.status(500).send("error: The users information could not be retrieved.")
    }
    else{
        res.json(req.body);
    }
});

server.post('/api/users', (req, res) => {
    if(req.body.name == null | req.body.bio == null) {
        res.status(400).send("errorMessage: Please provide name and bio for the user.")
    }
    else{
       res.status(201).json()
    }
});

server.get('/api/users/:id', (req, res) => {
});

server.delete('/api/users/:id', (req, res) => {
});

server.put('/api/users/:id', (req, res) => {
}

