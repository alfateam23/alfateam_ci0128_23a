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

    const reservationCode = await insertReservation(
      reservation.mail,reservation.start_date,
      reservation.end_date, reservation.origin,
      reservation.province, reservation.area);
    for (const plate of reservation.plates) {
      if (plate!=='') await insertVehicle(reservationCode, plate);
    }
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
      `EXEC InsertUser 
        @Email = '${email}',
        @Cedula = '${id}',
        @PrimerNombre = '${name}',
        @SegundoNombre = ${mySecondName},
        @PrimerApellido = '${lastname1}',
        @SegundoApellido = ${myLastName2}`
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

async function insertReservation(email, start_date, end_date,
  origin, province, area) {
  try {
    const query = `DECLARE @Output INT;
    EXEC InsertReservation 
      @Email = '${email}',
      @TipoArea = '${area[0]}',
      @FechaInicio = '${
        start_date.toISOString().replace(/T|Z/g, ' ').slice(0, -5)}',
      @FechaFin = '${
        end_date.toISOString().replace(/T|Z/g, ' ').slice(0, -5)}',
      @NombrePais = '${origin}',
      @NombreProvincia = '${province}',
      @OutputParameter = @Output OUTPUT;
    SELECT @Output AS OutpuCode;`
    const result = await db.executeQuery(query);
    return result.recordset[0].OutputCode;
  } catch (error) {
    throw error;
  }
};

async function insertVehicle(reservationCode, plate) {
  try {
    const query = `EXEC InsertVehiculo
    @CodigoReservacion=${reservationCode},
    @Placa='${plate}'`
    const result = await db.executeQuery(query);
    return result;
  } catch (error) {
    throw error;
  }
};

// TODO INSERT VISITANTES

async function insertVisitors(reservationCode, visitors,
  area) {
  // Visitor Adult national
  if (visitors[0].countAdultNac) {
    await visitorManager.insertVisitorAdultNational(reservationCode, area,
      visitors[0].countAdultNac);
  }
  // Visitor kid 0-6 y/o national
  if (visitors[1].countAdultKids06Nac) {
    await visitorManager.insertVisitorKid06National(reservationCode, area,
      visitors[1].countAdultKids06Nac);
  }
  // Visitor kid 6-12 y/o national
  if (visitors[2].countAdultKids612Nac) {
    await visitorManager.insertVisitorKids612National(reservationCode, area,
      visitors[2].countAdultKids612Nac);
  }
  // Visitor elder 65+ y/o national
  if (visitors[3].countElderNac) {
    await visitorManager.insertVisitorElderNational(reservationCode, area,
      visitors[3].countElderNac);
  }
  // Visitor Adult foreigner
  if (visitors[4].countAdultExt) {
    await visitorManager.insertVisitorAdultForeign(reservationCode, area,
      visitors[4].countAdultExt);
  }
  // Visitor kid 0-6 y/o foreigner
  if (visitors[5].countAdultKids06Ext) {
    await visitorManager.insertVisitorKid06Foreign(reservationCode, area,
      visitors[5].countAdultKids06Ext);
  }
  // Visitor kid 6-12 y/o foreigner
  if (visitors[6].countAdultKids612Ext) {
    await visitorManager.insertVisitorKids612Foreign(reservationCode, area,
      visitors[6].countAdultKids612Ext);
  }
  // Visitor elder 65+ y/o foreigner
  if (visitors[7].countElderExt) {
    await visitorManager.insertVisitorElderForeign(reservationCode, area,
      visitors[7].countElderExt);
  }
}

// TODO INSERT FACTURA

async function insertReceipt(reservationCode) {
  try {
    const query = `EXEC InsertFactura
    @CodigoReservacion = ${reservationCode},
    @EstadoPago = 0;`
    const result = await db.executeQuery(query);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  insertDataReservation,
};