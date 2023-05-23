const db = require('../DbConfig');

/*
Function to insert visitors with the code
NA which means
N: nacionales
A: regular
*/

async function insertVisitorNA(reservationCode, area, visitorQuantity,
  paymentType='A', procedencia = 'UN') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'N',
    @TipoVisita = '${area}',
    @Estatus = 'A',
    @Procedencia = '${procedencia}',
    @CategoriaPago = '${paymentType}',
    @CantidadVisitantes = ${visitorQuantity};`
    await db.executeQuery(query);
  } catch (error) {
    throw error;
  }
};

/*
Function to insert visitors with the code
NB which means
N: nacionales
B: niño regular
*/

async function insertVisitorNB(reservationCode, area, visitorQuantity,
  paymentType='A', procedencia = 'UN') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'N',
    @TipoVisita = '${area}',
    @Estatus = 'B',
    @Procedencia = '${procedencia}',
    @CategoriaPago = '${paymentType}',
    @CantidadVisitantes = ${visitorQuantity};`
    await db.executeQuery(query);
  } catch (error) {
    throw error;
  }
};

/*
Function to insert visitors with the code
EA which means
E: Extranjero
A: regular
*/

async function insertVisitorEA(reservationCode, area, visitorQuantity,
  paymentType='A', procedencia = 'UN') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'E',
    @TipoVisita = '${area}',
    @Estatus = 'A',
    @Procedencia = '${procedencia}',
    @CategoriaPago = '${paymentType}',
    @CantidadVisitantes = ${visitorQuantity};`
    await db.executeQuery(query);
  } catch (error) {
    throw error;
  }
};

/*
Function to insert visitors with the code
EB which means
E: Extranjero
B: niño regular
*/

async function insertVisitorEB(reservationCode, area, visitorQuantity,
  paymentType='A', procedencia = 'UN') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'E',
    @TipoVisita = '${area}',
    @Estatus = 'B',
    @Procedencia = '${procedencia}',
    @CategoriaPago = '${paymentType}',
    @CantidadVisitantes = ${visitorQuantity};`
    await db.executeQuery(query);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  insertVisitorNA,
  insertVisitorNB,
  insertVisitorEA,
  insertVisitorEB
};
