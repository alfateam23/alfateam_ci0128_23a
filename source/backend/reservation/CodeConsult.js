const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

router.get("/:email", async (req,res)=>{
  try {
    const result = await getCode(req.params.email);
    res.json(result);
  } catch (error) {
    console.log(`Error while getting reservation code
    with the email:`, error);
  }
})

async function getCode (email) {
  try {
    const result = await db.executeQuery(
      `EXEC GetReservationCode @Email = '${email}'`
    );
    return result.recordsets[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { router };
