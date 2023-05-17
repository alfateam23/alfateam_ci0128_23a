// Node server for serving API endpoints, using Express.

const express = require('express');
const app = express();

//const { Connection, Request, TYPES } = require ('tedious');
//import { DbConfig } from './DbConfig';

// Connection to SQL Server database, located at ECCI
// Based on https://www.microsoft.com/en-us/sql-server/developer-get-started/node/windows/step/2.html

// var connection = new Connection(DbConfig);

// Try to connect to DB

// connection.on('connect', function (err) {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// });
// connection.connect();

const visitorsRawData = {
    "visitors": [
        { 'id': '20', 'region': 'España', 'status': 'Adulto Regular' },
        { 'id': '30', 'region': 'Alajuela', 'status': 'Niño Exonerado' },
        { 'id': '40', 'region': 'Holanda', 'status': 'Adulto Mayor' },
        { 'id': '50', 'region': 'Alajuela', 'status': 'Adulto Regular' },
    ]
};

app.get('/backend/visitordata/:id', (req, res) => {
    let visitor = visitorsRawData.visitors.find((v) => v.id === req.params.id);
    if (!visitor) res.status(404).send("Visitor not found");
    res.send(visitor);
});

app.listen(3030, ()=> console.log('Listening on port 3030...'));
