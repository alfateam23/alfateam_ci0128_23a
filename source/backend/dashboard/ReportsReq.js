const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

router.get('/visits/:startdate/:enddate', async (req, res) => {
    try {
        let visits = await selectVisitsInDateRange(req.params['startdate'],
        req.params['enddate']);
        res.json(visits);
    } catch (error) {
        console.log('Error al obtener reporte de visitas', error);
    }
})

router.get('/profits/:startdate/:enddate', async (req, res) => {
    try {
        let visits = await selectProfitsInDateRange(req.params['startdate'],
        req.params['enddate']);
        res.json(visits);
    } catch (error) {
        console.log('Error al obtener reporte de ingresos', error);
    }
})

// Endpoints for report datasets

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

module.exports = { router , selectVisitsInDateRange, selectProfitsInDateRange };
