// Node server for serving API endpoints, using Express.

const express = require('express');
const app = express();
const reservationManager = require('./reservation/reservationInsert');
const availabilityInfo = require('./reservation/AvailabilityReq');
const reservationCost = require('./reservation/CostConsult')
const origin = require('./reservation/OriginReq');
const reservationDetails = require('./dashboard/ReservationDetailsReq')

app.use("/backend/capacity", availabilityInfo.router);
app.use("/backend/geographicInfo", origin.router);
app.use("/backend/reservationDetails", reservationDetails.router);
app.use("/backend/reservationCost", reservationCost.router);

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
    start_date: new Date(2023, 6, 15),
    end_date: new Date(2023, 6, 18),
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
    origin : 'Costa Rica',
    province : 'San José',
    visitors: [
        { countAdultNac: 4 },
        { countAdultKids06Nac: 2 },
        { countAdultKids612Nac: 0 },
        { countElderNac: 0 },
        { countAdultExt: 0 },
        { countAdultKids06Ext: 0 },
        { countAdultKids612Ext: 0 },
        { countElderExt: 0 }
    ],
    area: 'Camping'
};

//reservationManager.insertDataReservation(reservation);

/* let date1 = new Date("2023-07-15T06:00:00.000Z");
let date2 = new Date("2023-07-19T06:00:00.000Z"); 
date1.setDate(date1.getDate()+1)
if (date1 > new Date('2023-07-15T06:00:00.000Z')) console.log(true) */

app.listen(3030, ()=> console.log('Listening on port 3030...'));
