/* Utility functions to insert a reservation */

const db = require('../../DbConfig');
const dataInserts = require('./reservationDataInsert')

/**
 * This function creates a reservation.
 * The parameter is an object that contains all the information about
 * a reservation. If there is no second name or second lastname
 * these variables have to be null.
 * 
 */

async function insertDataReservation(reservation) {
  try {
    await dataInserts.insertUser(reservation.mail,reservation.id,
      reservation.nameUser, reservation.secondName,
      reservation.firstSurname, reservation.secondSurname);
    if (Array.isArray(reservation.phone)) {
      for (const phone of reservation.phone) {
        await dataInserts.insertPhone(phone, reservation.id);
      }
    } else {
      await dataInserts.insertPhone(reservation.phone, reservation.id);
    }

    await dataInserts.insertClient(reservation.id);
    if (reservation.originCountry === '') reservation.originCountry = 'Costa Rica';
    if (reservation.end_date === '') reservation.end_date = reservation.start_date;
    const reservationCode = await dataInserts.insertReservation(
      reservation.id,reservation.start_date,
      reservation.end_date, reservation.originCountry,
      reservation.originProvince, reservation.area);
    for (const plate of reservation.plates) {
      if (plate!=='') await dataInserts.insertVehicle(reservationCode, plate);
    }
    await dataInserts.insertVisitors(reservationCode, reservation.visitors,
      reservation.area)
    await dataInserts.insertReceipt(reservationCode)
  } catch (error) {
    throw error;
  }
};

/**
 * This function creates a reservation with the information from a user
 * that is already in the database.
 * The parameter is an object that contains all the information about
 * a reservation. If there is no second name or second lastname
 * these variables have to be null.
 * 
 */

async function insertReservationOldUser(reservation) {
  try {
    if (reservation.originCountry === '') reservation.originCountry = 'Costa Rica';
    if (reservation.end_date === '') reservation.end_date = reservation.start_date;
    const reservationCode = await dataInserts.insertReservation(
      reservation.mail,reservation.start_date,
      reservation.end_date, reservation.originCountry,
      reservation.originProvince, reservation.area);
    for (const plate of reservation.plates) {
      if (plate!=='') await dataInserts.insertVehicle(reservationCode, plate);
    }
    await dataInserts.insertVisitors(reservationCode, reservation.visitors,
      reservation.area);
    await dataInserts.insertReceipt(reservationCode);
  } catch (error) {
    throw error;
  }
};

/**
 * Function that verifies if an email has already been inserted
 * If it has, then it sends a response to let front end know that
 * the email is already in the database
 * 
 * if the email is not in the database then it adds the user and
 * saves the reservation.
 */

async function checkEmail (id) {
  try {
    let result = {};
    const emailExists = await db.executeQuery(
      `EXEC CheckIDExists @Cedula = '${id}';`
    )
    result.userInfo = emailExists.recordset[0];
    if (emailExists.EmailExists === undefined) {
      let phone = await db.executeQuery(
        `EXEC GetPhone @Cedula = '${id}';`
      )
      result.userPhone = phone.recordset;
    }
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  insertDataReservation,
  insertReservationOldUser,
  checkEmail
}
