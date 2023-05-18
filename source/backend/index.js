// Node server for serving API endpoints, using Express.

const express = require('express');
const app = express();
const db = require('./DbConfig');

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

reservation = {
    start_date : new Date(),
    end_date : new Date(),
    num_guests : 0,

    
    nameUser : 'Esteban',
    firstSurname : 'Dido',
    secondSurname : 'Chavez',
    id : '117718065',
    mail : 'este-bandido@gmail.com',
    phone: '50682116523',
    totalPlates : 1,
    plates : [
        { number : '098767' }
    ],

    countAdultNac : 2,
    countAdultKidsNac : 1,
    countAdultFor : 0,
    countAdultKidsFor : 0,
};

function insertReservation() {

};

async function insertUser(name, secondName = null, lastname1, lastname2 = null,
email, phone, id) {
    try {
        const query = `insert into Usuario (Email, Cedula, PrimerNombre, SegundoNombre,
            PrimerApellido, SegundoApellido)
            values (${email},${id},${name},`;
        if (secondName) query += `${secondName},`;
        query += `${lastname1},`;
        if(lastname2) query += `${lastname2},`;
        console.log(query)
        //const result = await db.executeQuery();
    } catch (error) {
        return error
    }
};

async function insertPhone(phone, email) {
    try {
        
    } catch (error) {
        
    }
};

reservation.end_date.setDate((new Date()).getDate()+1)
console.log(reservation.end_date.toISOString().replace('T', ' ').substring(0, 19));

app.listen(3030, ()=> console.log('Listening on port 3030...'));
