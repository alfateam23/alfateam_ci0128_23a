const db = require('../DbConfig');
const express = require('express');
const router = express.Router();
const reportFunctions = require('./ReportUtil')

// Get report of a given type (visits or profits), in a specified format (JSON, CSV, or XLSX),
// between a start date and an end date
router.get('/:type/:startdate/:enddate', async (req, res) => {
  let reportData
  try {
    switch (req.params['type']) {
      case 'visits':
        reportData = await reportFunctions.selectVisitsInDateRange(req.params['startdate'], req.params['enddate']);
        break;
      case 'profits':
        reportData = await reportFunctions.selectProfitsInDateRange(req.params['startdate'], req.params['enddate']);
      default:
        console.log('Error en tipo de reporte')
        break;
    }
    res.json(reportData);
  } catch (error) {
    console.log('Error al obtener reporte', error);
  }
})

module.exports = { router };
