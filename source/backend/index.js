// Node server for serving API endpoints, using Express.

const express = require('express');
const app = express();
const reservationManager = require('./reservation');
const db = require('./DbConfig');

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

let reservation = {
    start_date: new Date(),
    end_date: new Date(),
    num_guests: 3,
    nameUser: 'Esteban',
    secondName: '',
    firstSurname: 'Dido',
    secondSurname: 'Chavez',
    id: '117718065',
    mail: 'este-bandido@gmail.com',
    phone: ['50682116523',
    '50687765432'], // Phone is an array
    totalPlates: 1,
    plates: ['098767',
    '123456',
    '789012'
    ], // Multiple plates
    countAdultNac: 2,
    countAdultKidsNac: 1,
    countAdultFor: 0,
    countAdultKidsFor: 0,
    area: 'C'
  };

// TODO funciono pero hay que acomodar mejor como salen los
// datos, el nombre salio undefined
//reservationManager.insertReservation(reservation);

/*reservationManager.insertUser(reservation.mail, reservation.id,
    reservation.nameUser, null, reservation.firstSurname,
    reservation.secondSurname, 1);*/

reservation.end_date.setDate((new Date()).getDate()+1)
console.log(reservation.end_date.toISOString().replace('T', ' ').substring(0, 19));

app.listen(3030, ()=> console.log('Listening on port 3030...'));
