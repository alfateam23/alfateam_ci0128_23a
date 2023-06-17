// Node server for serving API endpoints, using Express.

const express = require('express');
const app = express();
const dotenv = require("dotenv");
const reservationManager = require('./reservation/insertReservation/reservationEndPoints');
const reservationDetails = require('./dashboard/ReservationDetailsReq');
const reservationCost = require('./reservation/CostConsult')
const reservationCode = require("./reservation/CodeConsult");
const availabilityInfo = require('./reservation/AvailabilityReq');
const origin = require('./reservation/OriginReq');
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
app.use("/backend/reservationCode", reservationCode.router);
app.use('/tarifas', tarifas.router);
//Signup and login
app.use("/backend/email", emailManager);
app.use("/backend/reports", reports.router);

app.listen(3030, ()=> console.log('Listening on port 3030...'));
