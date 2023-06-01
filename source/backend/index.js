// Node server for serving API endpoints, using Express.

const express = require('express');
const app = express();
const reports = require('./reports/reportsSelect');

// Get visitors in date range
app.get('/backend/reports/visits/:startdate/:enddate', (req, res) => {
    reports.selectVisitsInDateRange(req.params.startdate, req.params.enddate)
        .then((data) => res.send(data))
        .catch((err) => console.warn(err));
});

// Get profits in date range
app.get('/backend/reports/profits/:startdate/:enddate', (req, res) => {
    reports.selectProfitsInDateRange(req.params.startdate, req.params.enddate)
        .then((data) => res.send(data))
        .catch((err) => console.warn(err));
});

app.listen(3030, () => console.log('Listening on port 3030...'));
