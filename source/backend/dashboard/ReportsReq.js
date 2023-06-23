const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

// Get report of a given type (visits or profits), in a specified format (JSON, CSV, or XLSX),
// between a start date and an end date
router.get('/:type/:startdate/:enddate', async (req, res) => {
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
    res.json(reportData);
  } catch (error) {
    console.log('Error al obtener reporte', error);
  }
})

async function selectVisitsInDateRange(startdate, enddate) {
  try {
    const formattedStartDate = new Date(startdate).toISOString().split('T')[0];
    const formattedEndDate = new Date(enddate).toISOString().split('T')[0];
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
            WHERE R.FechaInicio BETWEEN '${formattedStartDate}' AND '${formattedEndDate}'
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
    const formattedStartDate = new Date(startdate).toISOString().split('T')[0];
    const formattedEndDate = new Date(enddate).toISOString().split('T')[0];
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
            WHERE R.FechaInicio BETWEEN '${formattedStartDate}' AND '${formattedEndDate}'
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
