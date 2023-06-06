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
        const query = `SELECT
        TV.TipoProcedencia,
        TV.TipoVisita,
        TV.Estatus,
        ISNULL(SUM(V.CantidadVisitantes),0) AS TotalVisitors
      FROM
        TipoVisitante TV
        LEFT JOIN Visitante V ON V.TipoProcedencia = TV.TipoProcedencia
          AND V.TipoVisita = TV.TipoVisita
          AND V.Estatus = TV.Estatus
          AND V.CategoriaPago = TV.CategoriaPago
        LEFT JOIN Reservacion R ON R.Codigo = V.CodigoReservacion
          AND R.FechaInicio BETWEEN '${startdate}' AND '${enddate}'
      GROUP BY
        TV.TipoProcedencia,
        TV.TipoVisita,
        TV.Estatus;`
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
          ISNULL(SUM(V.Subtotal),0) AS TotalSubtotal
        FROM
          TipoVisitante TV
          LEFT JOIN Visitante V ON V.TipoProcedencia = TV.TipoProcedencia
            AND V.TipoVisita = TV.TipoVisita
            AND V.Estatus = TV.Estatus
            AND V.CategoriaPago = TV.CategoriaPago
          LEFT JOIN Reservacion R ON R.Codigo = V.CodigoReservacion
            AND R.FechaInicio BETWEEN '${startdate}' AND '${enddate}'
        GROUP BY
          TV.TipoProcedencia,
          TV.TipoVisita,
          TV.Estatus;`
        const result = await db.executeQuery(query)
        return result.recordset;
    }
    catch (error) {
        throw error;
    }
}

module.exports = { router };
