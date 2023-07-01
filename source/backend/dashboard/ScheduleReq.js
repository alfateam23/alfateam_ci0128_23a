const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

// Router to get information for the quota of the different areas
router.get('/:area', async (req, res) => {
  try {
    const result = await getSchedule(req.params.area);
    res.json(result);
  } catch (error) {
    console.log('Error al obtener quota', error);
  }
})

// Router update the quota value
router.put('/update', async (req, res) => {
  try {
    const result = await updateSchedule(req.body.area,
      req.body.total,req.body.online);
    res.json(result);
  } catch (error) {
    console.log('Error al obtener quota', error);
  }
})

async function getSchedule(area) {
  try {
    const result = await db.executeQuery(
      `SELECT HoraApertura, HoraCierre FROM Area WHERE Tipo='${area}'`
    )
    return result.recordset[0];
  } catch (error) {
    throw error;
  }
}

async function updateSchedule(area, open, close) {
  try {
    const result = await db.executeQuery(
      `UPDATE Area
      SET HoraApertura = ${open},
          HoraCierre = ${close}
      WHERE Tipo='${area}'`
    )
    return result.recordset[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { router };