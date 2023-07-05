const db = require('../DbConfig');
const express = require('express');
const router = express.Router();
const moment = require('moment');


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
    const formattedOpen = open && open.trim() ? moment(open.trim(), 'HH:mm').format('YYYY-MM-DDTHH:mm:ss') : '';
    const formattedClose = close && close.trim() ? moment(close.trim(), 'HH:mm').format('YYYY-MM-DDTHH:mm:ss') : '';

    const result = await db.executeQuery(
      `UPDATE Area
      SET HoraApertura = '${formattedOpen}',
          HoraCierre = '${formattedClose}'
      WHERE Tipo='${area}'`
    );
    if (result.recordset && result.recordset.length > 0) {
      return result.recordset[0];
    }
  } catch (error) {
    throw error;
  }
}





module.exports = { router };