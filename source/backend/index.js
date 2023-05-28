// Node server for serving API endpoints, using Express.

const express = require('express');
const app = express();
const reservationManager = require('./reservation/reservationInsert');
const reports = require('./reports/reportsSelect')

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

// Get visitors in date range
app.get('/backend/reports/visits/:startdate/:enddate', (req, res) => {
    const visitsData = (startdate, enddate) => reports.selectVisitsInDateRange(startdate, enddate)
    if (!visitsData) res.status(404).send("Invalid date range for visitors report");
    res.send(visitsData);
});

// Get profits in date range
app.get('/backend/reports/profits/:startdate/:enddate', (req, res) => {
    const profitsData = (startdate, enddate) => reports.selectProfitsInDateRange(startdate, enddate)
    if (!profitsData) res.status(404).send("Invalid date range for profits report");
    res.send(profitsData);
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
        '789012',
        '',
        '',
        ''
    ], // Multiple plates
    visitors: [
        { countAdultNac: 2 },
        { countAdultKidsNac: 1 },
        { countAdultFor: 0 },
        { countAdultKidsFor: 0 }
    ],
    area: 'C'
};

app.listen(3030, () => console.log('Listening on port 3030...'));
