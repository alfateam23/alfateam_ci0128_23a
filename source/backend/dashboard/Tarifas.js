const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

/* API for getting */
router.get('/tarifas', async (req, res) => {
    let visitor = await dialogBody.executeQuery('SELECT * FROM TipoVisitante')
    res.json(visitor.recordsets[0]);
});

module.exports = { router }