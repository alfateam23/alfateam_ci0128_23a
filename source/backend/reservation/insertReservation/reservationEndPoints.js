const express = require('express');
const router = express.Router();
const insertManager = require('./reservationUtil')

router.use(express.json())

let prevData = null;
router.post("/", async (req,res)=>{
  try {
    if (prevData !== null) {
      if (prevData.nameUser !== req.body.userData.nameUser) {
        prevData = req.body.userData;
        await insertManager.insertDataReservation(req.body.userData);
        res.json("Inserted");
      }
    } else if (prevData === null) {
      prevData = req.body.userData;
      await insertManager.insertDataReservation(req.body.userData);
      res.json("Inserted");
    }
  } catch (error) {
    console.log("Error while creating a reservation", error); 
  }
  //console.log(req.body.UserData)
})

router.post("/oldUser", async (req,res)=>{
  try {
    await insertManager.insertReservationOldUser(req.body.userData);
    res.json("Inserted");
  } catch (error) {
    console.log("Error while creating a reservation", error); 
  }
})

router.put("/updateUser", async (req,res)=>{
  try {
    const result = await insertManager.updateUser(
      req.body.storedUserData.result, req.body.userData);
    res.json({result});
  } catch (error) {
    console.log("Error while checking email: ", error); 
  }
})

router.post("/checkEmail", async (req,res)=>{
  try {
    const result = await insertManager.checkEmail(req.body.userData);
    res.json({result});
  } catch (error) {
    console.log("Error while checking email: ", error); 
  }
})


module.exports = {
  router
};