const db = require('../../DbConfig');
const visitorManager = require('../visitorInsert');

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

async function insertPhone(phone, id) {
try {
  const query = `EXEC InsertPhone
  @Cedula='${id}',
  @Numero='${phone}'`
  const result = await db.executeQuery(query);
  return result;
} catch (error) {
  throw error;
}
};

async function insertClient(id) {
try {
  const query = `EXEC InsertClient @Cedula='${id}'`
  const result = await db.executeQuery(query);
  return result;
} catch (error) {
  throw error;
}
};

async function insertReservation(id, start_date, end_date,
origin, province, area) {
try {
  const query = `DECLARE @Output INT;
  EXEC InsertReservation 
    @Cedula = '${id}',
    @TipoArea = '${area[0]}',
    @FechaInicio = '${start_date}',
    @FechaFin = '${end_date}',
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
if (visitors[0]) {
  await visitorManager.insertVisitorAdultNational(reservationCode, area,
    visitors[0]);
}
// Visitor kid 0-6 y/o national
if (visitors[1]) {
  await visitorManager.insertVisitorKid06National(reservationCode, area,
    visitors[1]);
}
// Visitor kid 6-12 y/o national
if (visitors[2]) {
  await visitorManager.insertVisitorKids612National(reservationCode, area,
    visitors[2]);
}
// Visitor elder 65+ y/o national
if (visitors[3]) {
  await visitorManager.insertVisitorElderNational(reservationCode, area,
    visitors[3]);
}
// Visitor Adult foreigner
if (visitors[4]) {
  await visitorManager.insertVisitorAdultForeign(reservationCode, area,
    visitors[4]);
}
// Visitor kid 0-6 y/o foreigner
if (visitors[5]) {
  await visitorManager.insertVisitorKid06Foreign(reservationCode, area,
    visitors[5]);
}
// Visitor kid 6-12 y/o foreigner
if (visitors[6]) {
  await visitorManager.insertVisitorKids612Foreign(reservationCode, area,
    visitors[6]);
}
// Visitor elder 65+ y/o foreigner
if (visitors[7]) {
  await visitorManager.insertVisitorElderForeign(reservationCode, area,
    visitors[7]);
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
  insertUser,
  insertPhone,
  insertClient,
  insertReservation,
  insertVehicle,
  insertVisitors,
  insertReceipt
}
