const express = require('express');
const axios = require('axios');
const app = express();
const dotenv = require('dotenv');

app.use(express.json());

dotenv.config();

// API TO REDIRECT POST CALLS
const CSC_API = 'http://10.26.110.247:9035/api/LeadDigital'
const CREDITEA_API = 'http://10.26.110.247:9136/api/Creditea'

// PARA REENVIAR PETICIONES A CALL CENTER
app.post('/', function (req, res) {
    axios({
        method: 'POST',
        url: CSC_API,
        data: req.body,
        timeout: 5000
    }).then(clientResponse => {
        res.status(clientResponse.status).send(clientResponse.data)
    })
    .catch(err => {
        if (err.response)
            res.status(err.response.status).send(err.response.data)
        else
            res.status(500).send(err)
    })
});

// PARA REENVIAR PETICIONES A CALL CENTER
app.post('/creditea', function (req, res) {
    axios({
        method: 'POST',
        url: CREDITEA_API,
        data: req.body,
        timeout: 5000
    }).then(clientResponse => {
        res.status(clientResponse.status).send(clientResponse.data)
    })
    .catch(err => {
        if (err.response)
            res.status(err.response.status).send(err.response.data)
        else
            res.status(500).send(err)
    })
});


// PRUEBA SIMPLE GET
app.get('/test', function (req, res) {
    res.status(200).send("GET")
});

// PRUEBA POST, IMPRIME BODY EN CONSOLA
app.post('/test', function (req, res) {
    console.log(req.body);
    res.status(201).send("POST")
});

// PRUEBA CON API DUMMY PARA CACHAR CODIGOS DE ERROR
app.post('/testapi', function (req, res) {
    console.log(req.body)
    axios({
        method: 'GET',
        url: "https://httpstat.us/400",
    }).then(clientResponse => {
        res.status(clientResponse.status).send(clientResponse.data)
    })
    .catch(err => {
        if (err.response)
            res.status(err.response.status).send(err.response.data)
        else
            res.status(500).send(err)
    })
});

// start the server in the port 3000
const PORT = process.env.NODE_PORT || 3000;

app.listen(PORT, () => {
    console.log('Proxy API listening on port:' + PORT);
});