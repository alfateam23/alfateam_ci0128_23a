const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

// Router to get information for the quota of the different areas
router.get('/:area', async (req, res) => {
  try {
    const result = await getQuota(req.params.area);
    res.json(result);
  } catch (error) {
    console.log('Error al obtener quota', error);
  }
})

// Router update the quota value
router.put('/update', async (req, res) => {
  try {
    const result = await updateQuota(req.body.area,
      req.body.total,req.body.online);
    res.json(result);
  } catch (error) {
    console.log('Error al obtener quota', error);
  }
})

async function getQuota(area) {
  try {
    const result = await db.executeQuery(
      `SELECT CupoTotal, CupoOnline FROM Area WHERE Tipo='${area}'`
    );

    if (result.recordset.length === 0) {
      throw new Error('No se encontraron registros para el área especificada');
    }
    return result.recordset[0];
  } catch (error) {
    throw error;
  }
}

async function updateQuota(area, total, online) {
  try {
    total = parseInt(total);
    online = parseInt(online);

    const result = await db.executeQuery(
      `UPDATE Area
      SET CupoTotal = '${total}',
          CupoOnline = '${online}'
      OUTPUT inserted.CupoTotal, inserted.CupoOnline
      WHERE Tipo='${area}'`
    );

    if (result.recordsets.length === 0 || result.recordsets[0].length === 0) {
      throw new Error('No se encontraron registros para el área especificada');
    }

    return result.recordsets[0][0];
  } catch (error) {
    throw error;
  }
}

module.exports = { router, getQuota, updateQuota };
