const express = require('express');
const app = require('./app');

app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
    const { username, age } = req.body;

    res.send(`Username: ${username}, Age: ${age}`);
});

module.exports = app;