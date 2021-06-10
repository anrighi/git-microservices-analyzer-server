const express = require("express");
const cors = require('cors')

const path = require("path");
const fs = require('fs');

const {v4: uuidv4} = require('uuid');

const app = express();

app.use(cors())

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/chord', (request, response) => {

    const id = uuidv4()

    fs.writeFile(
        `public/json/${id}-chordData.json`,
        JSON.stringify({
            keys: request.body.keys,
            data: request.body.data
        }),
        (err) => {
            if (err) throw err;
            const fullUrl = `${request.protocol}://${request.get('host')}/index.html?id=${id}&chart=chord`;
            response.send({url: fullUrl});
        })
})

app.post('/bar', (request, response) => {

    const id = uuidv4()

    fs.writeFile(
        `public/json/${id}-barData.json`,
        JSON.stringify({
            keys: request.body.keys,
            data: request.body.data
        }),
        (err) => {
            if (err) throw err;
            const fullUrl = `${request.protocol}://${request.get('host')}/index.html?id=${id}&chart=bar`;
            response.send({url: fullUrl});
        })
})

module.exports = app

