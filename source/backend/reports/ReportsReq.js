const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

router.get('/visits/:startdate/:enddate', async (req, res) => {
    try {
        let visits = await selectVisitsInDateRange(req.params['startdate'], req.params['enddate']);
        res.json(visits);
    } catch (error) {
        console.log('Error al obtener reporte de visitas', error);
    }
})

router.get('/profits/:startdate/:enddate', async (req, res) => {
    try {
        let visits = await selectProfitsInDateRange(req.params['startdate'], req.params['enddate']);
        res.json(visits);
    } catch (error) {
        console.log('Error al obtener reporte de ingresos', error);
    }
})

// Endpoints for report datasets

async function selectVisitsInDateRange(startdate, enddate) {
    try {
        const query = `SELECT
        Reservacion.FechaInicio,
        Visitante.TipoProcedencia,
        Visitante.TipoVisita,
        Visitante.Estatus,
        Visitante.CategoriaPago,
        Visitante.CantidadVisitantes
        FROM Visitante
        JOIN Reservacion
        ON Codigo=Visitante.CodigoReservacion
        WHERE Reservacion.FechaInicio
        BETWEEN '${startdate}' AND '${enddate}'`
        const result = await db.executeQuery(query)
        return result.recordset;
    }
    catch (error) {
        throw error;
    }
}

async function selectProfitsInDateRange(startdate, enddate) {
    try {
        const query = `SELECT
        Reservacion.FechaInicio,
        TipoVisitante.TipoProcedencia,
        TipoVisitante.TipoVisita,
        TipoVisitante.Estatus,
        TipoVisitante.CategoriaPago,
        Visitante.Subtotal,
        TipoVisitante.Moneda
        FROM Visitante
        JOIN Reservacion
        ON Codigo=Visitante.CodigoReservacion
        JOIN TipoVisitante
        ON TipoVisitante.TipoProcedencia=Visitante.TipoProcedencia
        AND TipoVisitante.TipoVisita=Visitante.TipoVisita
        AND TipoVisitante.Estatus=Visitante.Estatus
        AND TipoVisitante.CategoriaPago=Visitante.CategoriaPago
        WHERE Reservacion.FechaInicio
        BETWEEN '${startdate}' AND '${enddate}'`
        const result = await db.executeQuery(query)
        return result.recordset;
    }
    catch (error) {
        throw error;
    }
}

module.exports = { router };
