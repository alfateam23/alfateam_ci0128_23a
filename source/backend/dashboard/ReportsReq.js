const db = require('../DbConfig');
const express = require('express');
const router = express.Router();
const ExcelJS = require('exceljs')

// Get report of a given type (visits or profits), in a specified format (JSON, CSV, or XLSX),
// between a start date and an end date
router.get('/:type/:format/:startdate/:enddate', async (req, res) => {
  let reportData
  try {
    switch (req.params['type']) {
      case 'visits':
        reportData = await selectVisitsInDateRange(req.params['startdate'], req.params['enddate']);
        break;
      case 'profits':
        reportData = await selectProfitsInDateRange(req.params['startdate'], req.params['enddate']);
      default:
        console.log('Error en tipo de reporte')
        break;
    }

    switch (req.params['format']) {
      case 'json':
        res.json(reportData);
        break;
      case 'csv':
      case 'xlsx':
        reportFile = await exportReport(reportData, format);
        res.send(reportFile);
        break;
      default:
        console.log('Error en formato de reporte')
        break;
    }

    res.json(visits);
  } catch (error) {
    console.log('Error al obtener reportes', error);
  }
})

async function exportReport(reportData, format) {
  let reportFile;
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Asojunquillal'
  workbook.created = new Date();
  const worksheet = workbook.addWorksheet('Reporte')
  worksheet.columns = reportData[0]
  worksheet.addRows(reportData)
  switch (format) {
    case 'csv':
      reportFile = await workbook.csv.writeBuffer();
      break;
    case 'xlsx':
      reportFile = await workbook.xlsx.writeBuffer();
      break;
    default:
      break;
  }
  res.send(reportFile)
}

async function selectVisitsInDateRange(startdate, enddate) {
  try {
    const query = `
          SELECT
          TV.TipoProcedencia,
          TV.TipoVisita,
          TV.Estatus,
          TV.CategoriaPago,
          ISNULL(SUM(V.CantidadVisitantes), 0) AS TotalVisitantes
        FROM
          TipoVisitante TV
          LEFT JOIN (
            SELECT V.TipoProcedencia, V.TipoVisita, V.Estatus, V.CategoriaPago, V.CantidadVisitantes
            FROM Visitante V
            INNER JOIN Reservacion R ON R.Codigo = V.CodigoReservacion
            WHERE R.FechaInicio BETWEEN ${startdate} AND ${enddate}
          ) AS V ON V.TipoProcedencia = TV.TipoProcedencia
            AND V.TipoVisita = TV.TipoVisita
            AND V.Estatus = TV.Estatus
            AND V.CategoriaPago = TV.CategoriaPago
        GROUP BY
          TV.TipoProcedencia,
          TV.TipoVisita,
          TV.Estatus,
          TV.CategoriaPago;`
    const result = await db.executeQuery(query)
    return result.recordset;
  }
  catch (error) {
    throw error;
  }
}

async function selectProfitsInDateRange(startdate, enddate) {
  try {
    const query = `
        SELECT
          TV.TipoProcedencia,
          TV.TipoVisita,
          TV.Estatus,
          TV.CategoriaPago,
          ISNULL(SUM(V.Subtotal), 0) AS TotalVisitantes
        FROM
          TipoVisitante TV
          LEFT JOIN (
            SELECT V.TipoProcedencia, V.TipoVisita, V.Estatus, V.CategoriaPago, V.Subtotal
            FROM Visitante V
            INNER JOIN Reservacion R ON R.Codigo = V.CodigoReservacion
            WHERE R.FechaInicio BETWEEN @date1 AND @date2
          ) AS V ON V.TipoProcedencia = TV.TipoProcedencia
            AND V.TipoVisita = TV.TipoVisita
            AND V.Estatus = TV.Estatus
            AND V.CategoriaPago = TV.CategoriaPago
        GROUP BY
          TV.TipoProcedencia,
          TV.TipoVisita,
          TV.Estatus,
          TV.CategoriaPago;`
    const result = await db.executeQuery(query)
    return result.recordset;
  }
  catch (error) {
    throw error;
  }
}

module.exports = { router, selectVisitsInDateRange, selectProfitsInDateRange };
