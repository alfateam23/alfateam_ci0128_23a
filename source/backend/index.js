// Node server for serving API endpoints, using Express.

const express = require('express');
const app = express();
const dotenv = require("dotenv");
const db = require('./DbConfig')
const reservationManager = require('./reservation/reservationInsert');
const availabilityInfo = require('./reservation/AvailabilityReq');
const reservationCost = require('./reservation/CostConsult')
const origin = require('./reservation/OriginReq');
const reservationDetails = require('./dashboard/ReservationDetailsReq');
const tarifas = require('./dashboard/Tarifas');
const emailManager = require("./reservation/Email/emailRoutes");
const bodyParser = require('body-parser');
const reports = require('./dashboard/ReportsReq')

dotenv.config();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors()); // Use this after the variable declaration
app.use(express.json()); // tell the server to accept the json data from frontend
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/backend/capacity", availabilityInfo.router);
app.use("/backend/geographicInfo", origin.router);
app.use("/backend/reservationDetails", reservationDetails.router);
app.use("/backend/reservationCost", reservationCost.router);
app.use("/backend/insertReservation", reservationManager.router);
app.use('/tarifas', tarifas.router);
//Signup and login
app.use("/backend/email", emailManager);
app.use("/backend/reports", reports.router);

const visitorsRawData = {
    "visitors": [
        { 'id': '20', 'region': 'España', 'status': 'Adulto Regular' },
        { 'id': '30', 'region': 'Alajuela', 'status': 'Niño Exonerado' },
        { 'id': '40', 'region': 'Holanda', 'status': 'Adulto Mayor' },
        { 'id': '50', 'region': 'Alajuela', 'status': 'Adulto Regular' },
    ]
};

app.get('/backend/visitordata/',async (req, res) => {
    let visitor = await db.executeQuery('SELECT * FROM TipoVisitante')
    res.send(visitor.recordsets[0]);
});

let reservation = {
    start_date: new Date(2023, 6, 3),
    end_date: new Date(2023, 6, 5),
    totalPeople: 4,
    nameUser: 'Pablo',
    secondName: '',
    firstSurname: 'Alvarez',
    secondSurname: 'Mata',
    id: '1771012485',
    mail: 'pablo-alvarez@gmail.com',
    phone: '83654987', // Phone is an array
    plates: ['BPT987',
    'PTY098',
    '',
    '',
    '',
    ''
    ], // Multiple plates
    originCountry : 'Costa Rica',
    originProvince : 'San José',
    visitors: [
        { countAdultKids06Nac: 1 },
        { countAdultKids612Nac: 1 },
        { countAdultNac: 2 },
        { countElderNac: 0 },

        { countAdultKids06Ext: 0 },
        { countAdultKids612Ext: 0 },
        { countAdultExt: 0 },
        { countElderExt: 0 },
    ],
    area: 'Camping'
};

//reservationManager.insertDataReservation(reservation);

/* let date1 = new Date("2023-07-15T06:00:00.000Z");
let date2 = new Date("2023-07-19T06:00:00.000Z");
date1.setDate(date1.getDate()+1)
if (date1 > new Date('2023-07-15T06:00:00.000Z')) console.log(true) */

app.listen(3030, ()=> console.log('Listening on port 3030...'));
