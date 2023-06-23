const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

router.get("/:id", async (req,res)=>{
  try {
    const result = await getCode(req.params.id);
    res.json(result);
  } catch (error) {
    console.log(`Error while getting reservation code
    with the email:`, error);
  }
})

async function getCode (id) {
  try {
    const result = await db.executeQuery(
      `EXEC GetReservationCode @Cedula = '${id}'`
    );
    return result.recordsets[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { router };
