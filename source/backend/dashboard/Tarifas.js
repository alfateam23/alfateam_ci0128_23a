const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

// Body parser middlewar
const bodyParser = require('body-parser');


/* getting ALL tarifas */
router.get('/', async (req, res) => {
    try {
        let visitor = await db.executeQuery('SELECT * FROM TipoVisitante')
        res.send(visitor.recordsets[0]);
    } catch (error) {
        res.status(500).send('Error retrieving visitors');
    }
});


/* Retrieve a specific tarifa */
router.get('/editar/:TipoProcedencia/:TipoVisita/:Estatus/:CategoriaPago', async (req, res) => {
    try {
        // console.log(req.params.TipoProcedencia);
        // console.log(req.params.TipoVisita);
        // console.log(req.params.Estatus);
        const result = await getTarifa(req.params.TipoProcedencia, req.params.TipoVisita, req.params.Estatus, req.params.CategoriaPago);
        res.send(result);
    } catch (error) {
        res.status(500).send('Error retrieving from tarifa');
    }
});

/* Post for editing a specific tarifa */
router.post('/editar/guardar', bodyParser.json(), async (req, res) => {
    try {
        let { TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda } = req.body
       await setTarifa(TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda);
       res.status(200).send;
    } catch (error) {
        res.status(500).send('Error saving data from tarifa' + error);
    }
});


/* Query for updating a specific tarifa */
async function setTarifa(TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda) {
    try {
        const result = await db.executeQuery(`
            UPDATE TipoVisitante
            SET Monto = '${Monto}', Moneda = '${Moneda}'
            WHERE TipoProcedencia = '${TipoProcedencia}'
                AND TipoVisita = '${TipoVisita}'
                AND Estatus = '${Estatus}'
                AND CategoriaPago = '${CategoriaPago}'
        `);
        return result.recordsets[0];
    } catch (error) {
        throw error;
    }
}

/* Query for getting a specific tarifa */
async function getTarifa(TipoProcedencia, TipoVisita, Estatus, CategoriaPago) {
    try {
        const result = await db.executeQuery(`
        SELECT *
        FROM TipoVisitante
        WHERE TipoProcedencia = '${TipoProcedencia}'
          AND TipoVisita = '${TipoVisita}'
          AND Estatus = '${Estatus}'
          AND CategoriaPago = '${CategoriaPago}'
      `);
        return result.recordsets[0];
    } catch (error) {
        throw error;
    }
}

module.exports = { router }
