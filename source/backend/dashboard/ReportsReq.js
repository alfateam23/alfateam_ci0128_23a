const express = require('express');
const router = express.Router();
const reportFunctions = require('./ReportUtil/ReportUtil')
const reportFinancialFunctions = require('./ReportUtil/FinancialReportsArea')

// Get report of a given type (visits or profits), in a specified format (JSON, CSV, or XLSX),
// between a start date and an end date
router.get('/:type/:startdate/:enddate', async (req, res) => {
  let reportData;
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

router.get('/excelData/visits/:startDate/:endDate', async (req, res) => {
  try {
    const result = await reportFunctions.selectVisitorReport(
      req.params.startDate, req.params.endDate
    );
    res.json(result);
  } catch (error) {
    console.log('Error al traer datos de reportes: ', error);
  }
})

router.get('/excelData/financial/:startDate/:endDate/:area', async (req, res) => {
  try {
    const result = req.params.area === 'C' ?
    await reportFinancialFunctions.selectFinancialReportCamping(
      req.params.startDate, req.params.endDate
    ) :
    await reportFinancialFunctions.selectFinancialReportPicnic(
      req.params.startDate, req.params.endDate
    );
    res.json(result);
  } catch (error) {
    console.log('Error al traer datos de reportes: ', error);
  }
})

module.exports = { router };
