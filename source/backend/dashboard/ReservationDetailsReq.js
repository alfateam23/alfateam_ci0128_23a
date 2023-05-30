const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

router.get('/getReservations', async (req,res) => {
  try {
    const result = await getReservations();
    res.json(result);
  } catch (error) {
    console.log('Error al obtener reservaciones: ', error);
  }
})

router.get('/confirmReservation/:id', async (req,res) => {
  try {
    const result = await confirmReservation(req.params.id);
    res.json(result);
  } catch (error) {
    console.log(`Error al confirmar reservación id:
    ${req.params.id}, Error: ${error}`);
  }
})

router.get('/cancelReservation/:id', async (req,res) => {
  try {
    const result = await cancelReservation(req.params.id);
    res.json(result);
  } catch (error) {
    console.log(`Error al cancelar reservación id:
    ${req.params.id}, Error: ${error}`);
  }
})

async function getReservations() {
  try {
    const result = await db.executeQuery(
      "EXEC GetReservaciones"
    );
    return result.recordsets[0];
  } catch (error) {
    throw error;
  }
}

async function confirmReservation(id) {
  try {
    const result = await db.executeQuery(
      `EXEC ConfirmReservation @Codigo=${id}`
    );
    return result.recordsets[0];
  } catch (error) {
    throw error;
  }
}

async function cancelReservation(id) {
  try {
    const result = await db.executeQuery(
      `EXEC CancelReservation @Codigo=${id}`
    );
    return result.recordsets[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { router }
