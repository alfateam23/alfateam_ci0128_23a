// Node server for serving API endpoints, without using Express.
// Based on https://progressivecoder.com/how-to-implement-nodejs-routing-without-express/


const http = require('http');

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

const server = http.createServer((req, res) => {
    if (req.url == '/backend/visitordata' && req.method == 'GET') {
        res.writeHead(200, {'Content-Type' : 'application/json'})
            .end(JSON.stringify(visitorsRawData));
    } else {
        res.writeHead(404)
            .end();
    }
});

server.listen(3030);
