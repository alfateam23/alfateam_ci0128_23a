// Connection to SQL Server database, located at ECCI
// Based on https://www.microsoft.com/en-us/sql-server/developer-get-started/node/windows/step/2.html

const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

// Create connection to SQL Server at ECCI (requires ECCI VPN or running inside ECCI network)

var config = {
    server: '172.16.202.209',
    authentication: {
        type: 'default',
        options: {
            userName: 'AlphaTeam_Admin',
            password: 'AlphaTeam_Admin' // Never store password as plaintext
        }
    },
    options: {
        database: 'AlphaTeam',
        trustServerCertificate : true
    }
}

var connection = new Connection(config);

// Try to connect to DB

connection.on('connect', function (err) {
    if (err) {
        console.log(err);
        throw err;
    }

});

connection.connect();
