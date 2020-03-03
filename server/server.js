require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/search/:name', (req, res) => {
    name = req.params.name;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7b23ebde6eaf5f47b7da8c36d3c663c2&units=imperial`)
            .then(response => res.send(response.data))
            .catch(err => console.log(err));
});

module.exports = app;
