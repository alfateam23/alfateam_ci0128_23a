const db = require('../DbConfig');
const express = require('express');
const router = express.Router();


// Endpoint to get the services

/*Para insertarlo

EXEC InsertServicio
  @Cedula = '123456789',
  @NombreServicio = 'Kayaks',
  @TiempoServicio = '00:30:00',
  @Fecha = '2023-06-28 10:00:00';

*/
router.get('/checkVisitor/:id', async (req, res) => {
  try {
    const result = await checkIDExists(req.params.id);
    res.json(result);
  } catch (error) {
    console.log('Error al revisar visitante existente: ', error);
  }
})

router.get('/getServices', async (req, res) => {
  try {
    const result = await db.executeQuery(
      `Select * from TipoServicio`
    )
    res.json(result.recordset);
  } catch (error) {
    console.log('Error al revisar visitante existente: ', error);
  }
})

router.post('/saveService', async (req, res) => {
  try {
    const result = await insertSevice(req.body);
    res.json(result);
  } catch (error) {
    console.log('Error al guardar servicio', error);
  }
})

async function checkIDExists(id) {
  try {
    const result = await db.executeQuery(
      `EXEC CheckIDExists @Cedula = '${id}'`
    )
    return result.recordset;
  } catch (error) {
    throw error;
  }
}

async function insertSevice(service) {
  try {
    const result = await db.executeQuery(
      `EXEC InsertServicio
      @Cedula = '${service.id}',
      @NombreServicio = '${service.name}',
      @TiempoServicio = '${service.time}',
      @Fecha = '${service.date + ' ' + service.hour}';`
    )
    return result;
  } catch (error) {
    throw error
  }
}

module.exports = { router }
