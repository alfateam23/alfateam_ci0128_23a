const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

router.get("/:start/:end/:area", async (req,res)=>{
  const result = await getAvailability(req.params.start,
    req.params.end, req.params.area);
  res.json(result);
})

async function getAvailability (startDate, endDate, area) {
  let capacity = null;
  let areaCapacity = null;
  try {
    areaCapacity = await getCapacity(area[0]);
    capacity =  await db.executeQuery(`SELECT Fecha, CupoOnlineDia
    FROM LimiteVisitantes
    WHERE Fecha >= '${startDate}' AND Fecha < '${endDate}' AND
    TipoArea = '${area[0]}'`);
    let dates  = capacity.recordset;
    dates = addDates(dates, startDate, endDate, areaCapacity);
    return dates;
  } catch (error) {
    console.log(error);
  }
};

function addDates (dates, startDate, endDate, areaCapacity) {
  let start = new Date(new Date(startDate).setHours(0, 0, 0, 0));
  let end = new Date(new Date(endDate).setHours(0, 0, 0, 0));
  if (dates.length > 0) {
    while (start < end) {
      if (dates.find((position) => 
      new Date(new Date(position.Fecha).setHours(0, 0, 0, 0)).toDateString()
      === start.toDateString()) === undefined) {
        dates.push({"Fecha":new Date(start),"CupoOnlineDia":areaCapacity})
      }
      start.setDate(start.getDate()+1);
    }
  } else {
    while (start < end) {
      dates.push({"Fecha":new Date(start),"CupoOnlineDia":areaCapacity})
      start.setDate(start.getDate()+1);
    }
  }
  return dates;
};

async function getCapacity (area) {
  try {
    const capacity = await db.executeQuery(`SELECT CupoOnline
    FROM Area
    WHERE Tipo = '${area}'`)
    return capacity.recordset[0].CupoOnline;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  router,
  getAvailability
};
