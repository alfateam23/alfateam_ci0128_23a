/* Utility functions to insert a reservation */

const db = require('../../DbConfig');
const dataInserts = require('./reservationDataInsert')

/**
 * Maps values from the UserData to the database
 */
const map = {
  Email : 'mail',
  Cedula : 'id',
  PrimerNombre: 'nameUser',
  SegundoNombre: 'secondName',
  PrimerApellido: 'firstSurname',
  SegundoApellido: 'secondSurname',
  Numero : 'phone'
};

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
    console.log("New User Inserted");
    if (Array.isArray(reservation.phone)) {
      for (const phone of reservation.phone) {
        await dataInserts.insertPhone(phone, reservation.id);
      }
    } else {
      await dataInserts.insertPhone(reservation.phone, reservation.id);
    }
    console.log("Phone inserted");

    await dataInserts.insertClient(reservation.id);
    console.log("Client Inserted");
    if (reservation.originCountry === '') reservation.originCountry = 'Costa Rica';
    if (reservation.end_date === '') reservation.end_date = reservation.start_date;
    const reservationCode = await dataInserts.insertReservation(
      reservation.id,reservation.start_date,
      reservation.end_date, reservation.originCountry,
      reservation.originProvince, reservation.area);
    console.log("Reservation Inserted");
    for (const plate of reservation.plates) {
      if (plate!=='') await dataInserts.insertVehicle(reservationCode, plate);
    }
    console.log("Plates Inserted");
    await dataInserts.insertVisitors(reservationCode, reservation.visitors,
      reservation.area)
    console.log("Visitors Inserted");
    await dataInserts.insertReceipt(reservationCode)
    console.log("Receipt Inserted");
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
      reservation.id,reservation.start_date,
      reservation.end_date, reservation.originCountry,
      reservation.originProvince, reservation.area);
    console.log("Reservation Inserted");
    for (const plate of reservation.plates) {
      if (plate!=='') await dataInserts.insertVehicle(reservationCode, plate);
    }
    console.log("Plates Inserted");
    await dataInserts.insertVisitors(reservationCode, reservation.visitors,
      reservation.area);
    console.log("Visitors Inserted");
    await dataInserts.insertReceipt(reservationCode);
    console.log("Receipt Inserted");
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

async function checkEmail (userData) {
  try {
    let result = {};
    const userInfo = await db.executeQuery(
      `EXEC CheckIDExists @Cedula = '${userData.id}';`
    )
    result.userInfo = userInfo.recordset[0];
    if (userInfo.EmailExists === undefined) {
      let phone = await db.executeQuery(
        `EXEC GetPhone @Cedula = '${userData.id}';`
      )
      result.userPhone = phone.recordset;
      result = compare_userData(result,userData);
    }
    return result;
  } catch (error) {
    throw error;
  }
}

async function updateUser (storedUserData, userData) {
  try {
    let phone = storedUserData.userPhone;
    storedUserData = storedUserData.userInfo;
    let query = `EXEC UpdateUser @Cedula='${userData.id}', `;
    Object.keys(storedUserData).forEach((key)=>{
      query += `@${key} = '${userData[map[key]]}', `
    });
    query = query.slice(0,-2) + ';';
    db.executeQuery(query);
    if (phone.length > 0) {
      db.executeQuery(`EXEC InsertPhone
        @Cedula = '${userData.id}',
        @Numero = '${userData.phone}';`)
    }
    return "updated";
  } catch (error) {
    throw error;
  }
}

/**
 * Function that compares the data given from the database
 * with the data sent by the front end
 * Returns data from the database that is different from
 * the userData
 */

function compare_userData(result, userData) {
  let newResult = {
    userInfo : {},
    userPhone : []
  };
  if (userData.secondName === '') userData.secondName = null;
  if (userData.secondSurname === '') userData.secondSurname = null;
  Object.keys(result.userInfo).forEach((key) => {
    if (result.userInfo[key] !== userData[map[key]])
    newResult.userInfo[key] = result.userInfo[key];
  });
  let found = 0;
  for (let i = 0; i < result.userPhone.length; ++i) {
    if (result.userPhone[i].Numero === userData.phone) found = 1;
  }
  if (!found) {
    result.userPhone.forEach((item)=>{
      newResult.userPhone.push({Numero: item.Numero})
    })
  }
  if (Object.keys(newResult.userInfo).length === 0
  && newResult.userPhone.length === 0)
  newResult.userInfo = {EmailExists:true};
  console.log(newResult);
  return newResult;
}

module.exports = {
  insertDataReservation,
  insertReservationOldUser,
  updateUser,
  checkEmail
}
