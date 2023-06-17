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

let prevOldUser = null;
router.post("/oldUser", async (req,res)=>{
  try {
    if (prevOldUser !== null) {
      if (prevOldUser.nameUser !== req.body.userData.nameUser) {
        prevOldUser = req.body.userData;
        await insertManager.insertReservationOldUser(req.body.userData);
        res.json("Inserted");
      }
    } else if (prevOldUser === null) {
      prevOldUser = req.body.userData;
      await insertManager.insertReservationOldUser(req.body.userData);
      res.json("Inserted");
    }
  } catch (error) {
    console.log("Error while creating a reservation", error); 
  }
})

let prevUpdate = null;
router.post("/updateUser", async (req,res)=>{
  try {
    if (prevUpdate !== null) {
      if (prevUpdate.nameUser !== req.body.userData.nameUser) {
        prevUpdate = req.body.userData;
        await insertManager.insertReservationOldUser(req.body.userData);
        res.json("Inserted");
      }
    } else if (prevUpdate === null) {
      prevUpdate = req.body.userData;
      await insertManager.insertReservationOldUser(req.body.userData);
      res.json("Inserted");
    }
  } catch (error) {
    console.log("Error while creating a reservation", error); 
  }
})

router.post("/checkEmail", async (req,res)=>{
  try {
    const result = await insertManager.checkEmail(req.body.id);
    res.json({result});
  } catch (error) {
    console.log("Error while checking email: ", error); 
  }
})


module.exports = {
  router
};