const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// API TO REDIRECT POST CALLS
const CSC_API = 'http://10.26.110.247:9035/api/LeadDigital'

// on the request to root (localhost:3000/)
app.post('/', function (req, res) {
    axios({
        method: 'POST',
        url: CSC_API,
        data: req.body
    }).then(clientResponse => {
        res.status(clientResponse.status).send(clientResponse.data)
    })
    .catch(err => {
        res.status(err.status || 500).send(err.response.data || err)
    })
});

// start the server in the port 3000
const PORT = process.env.NODE_PORT || 3000;

app.listen(PORT, () => {
    console.log('Proxy API listening on port:' + PORT);
});