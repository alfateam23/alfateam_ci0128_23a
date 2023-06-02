const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

router.get("/:quantity", async (req,res)=>{
  const result = await getCost(req.params.quantity);
  res.json(result);
})

/* As a string of the quantity for each
of the types of visitors */
async function getCost(quantity) {
  quantity = quantity.split(",");
  quantity = quantity.map(element => parseInt(element,10));
  if (quantity.length < 8) {
    let toAdd = 8-quantity.length;
    while(toAdd > 0) {
      quantity.push(0);
      --toAdd;
    }
  }
  try {
    const result = await db.executeQuery(
      `EXEC CalculateSubtotal
      @NacionalCampingNiño0a6 = ${quantity[0]},
      @NacionalCampingNiño6a12 = ${quantity[1]},
      @NacionalCampingAdulto = ${quantity[2]},
      @NacionalCampingAdulto65 = ${quantity[3]},
      @ExtranjeroCampingNiño0a6 = ${quantity[4]},
      @ExtranjeroCampingNiño6a12 = ${quantity[5]},
      @ExtranjeroCampingAdulto = ${quantity[6]},
      @ExtranjeroCampingAdulto65 = ${quantity[7]};`
    );
    return result.recordsets[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  router
}