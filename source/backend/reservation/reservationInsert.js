const db = require('../DbConfig');
const visitorManager = require('./visitorInsert')

/**
 * This function creates a reservation.
 * The parameter is an object that contains all the information about
 * a reservation. If there is no second name or second lastname
 * these variables have to be null.
 * 
 */

async function insertDataReservation(reservation) {
  try {
    await insertUser(reservation.mail,reservation.id,
      reservation.nameUser, reservation.secondName,
      reservation.firstSurname, reservation.secondSurname);
    
    for (const phone of reservation.phone) {
      await insertPhone(phone, reservation.mail);
    }

    await insertClient(reservation.mail);

    for (const plate of reservation.plates) {
      if (plate!=='') await insertVehicle(reservation.mail, plate);
    }
    const reservationCode = await insertReservation(reservation.mail,
      reservation.area);
    await insertVisitors(reservationCode, reservation.visitors,
      reservation.area)
    await insertReceipt(reservationCode)
  } catch (error) {
    console.log(error);
  }
};

async function insertUser(email, id, name, secondName,
    lastname1, lastname2) {
  try {
    let mySecondName = null;
    let myLastName2 = null;
    if (secondName !== '') mySecondName = secondName;
    if (lastname2 !== '') myLastName2 = lastname2;
    const result = await db.executeQuery(
      `EXEC InsertUser @Email = '${email}', @Cedula = '${id}',
      @PrimerNombre = '${name}', @SegundoNombre = ${mySecondName},
      @PrimerApellido = '${lastname1}', @SegundoApellido = ${myLastName2},
      @EstadoActividad = 1`
    );
    return result;
  } catch (error) {
    throw error;
  }
};

async function insertPhone(phone, email) {
  try {
    const query = `EXEC InsertPhone
    @Email='${email}',
    @Numero='${phone}'`
    const result = await db.executeQuery(query);
    return result;
  } catch (error) {
    throw error;
  }
};

async function insertClient(email) {
  try {
    const query = `EXEC InsertClient @Email='${email}'`
    const result = await db.executeQuery(query);
    return result;
  } catch (error) {
    throw error;
  }
};

async function insertVehicle(email, plate) {
  try {
    const query = `EXEC InsertVehicle
    @EmailCliente='${email}',
    @Placa='${plate}'`
    const result = await db.executeQuery(query);
    return result;
  } catch (error) {
    throw error;
  }
};

async function insertReservation(email, area) {
  try {
    let date = new Date();
    const query = `DECLARE @OutputParameter INT;
    EXEC InsertReservation
    @Email = '${email}',
    @TipoArea = '${area}',
    @FechaSolicitud = '${date.toISOString().replace('T', ' ').substring(0, 19)}',
    @OutputParameter = @OutputParameter OUTPUT;
    SELECT @OutputParameter AS OutputParameter;`
    const result = await db.executeQuery(query);
    return result.recordset[0].OutputParameter;
  } catch (error) {
    throw error;
  }
};

// TODO INSERT VISITANTES

async function insertVisitors(reservationCode, visitors,
  area) {
  // Visitor NA
  if (visitors[0].countAdultNac) {
    await visitorManager.insertVisitorNA(reservationCode, area,
      visitors[0].countAdultNac);
  }
  // Visitor NB
  if (visitors[1].countAdultKidsNac) {
    await visitorManager.insertVisitorNB(reservationCode, area,
      visitors[1].countAdultKidsNac);
  }
  // Visitor EA
  if (visitors[2].countAdultFor) {
    await visitorManager.insertVisitorEA(reservationCode, area,
      visitors[2].countAdultFor);
  }
  // Visitor EB
  if (visitors[3].countAdultKidsFor) {
    await visitorManager.insertVisitorEB(reservationCode, area,
      visitors[3].countAdultKidsFor);
  }
}

// TODO INSERT FACTURA

async function insertReceipt(reservationCode) {
  try {
    const query = `EXEC InsertFactura
    @CodigoReservacion = ${reservationCode},
    @EstadoPago = 0;`
    const result = await db.executeQuery(query);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  insertDataReservation,
};