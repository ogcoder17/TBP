const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/user_reminder', function(req, res) {
    res.sendFile(path.join(__dirname, '/user_reminder.html'));
});

app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '/signup.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '/login.html'));
});


app.listen(port);
console.log('Server started at http://localhost:' + port);