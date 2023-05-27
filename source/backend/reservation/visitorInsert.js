const db = require('../DbConfig');

/*
Function to insert visitors
Adult national
*/

async function insertVisitorAdultNational(reservationCode, area, visitorQuantity,
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
Function to insert visitors Kids 0-6 y/o National
*/

async function insertVisitorKid06National(reservationCode, area, visitorQuantity,
  paymentType='A', procedencia = 'UN') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'N',
    @TipoVisita = '${area}',
    @Estatus = 'C',
    @Procedencia = '${procedencia}',
    @CategoriaPago = '${paymentType}',
    @CantidadVisitantes = ${visitorQuantity};`
    await db.executeQuery(query);
  } catch (error) {
    throw error;
  }
};

/*
Function to insert visitors, kids 6-12 y/o national
*/

async function insertVisitorKids612National(reservationCode, area, visitorQuantity,
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
Function to insert visitors elder (65+ y/o) nationals
*/

async function insertVisitorElderNational(reservationCode, area, visitorQuantity,
  paymentType='A', procedencia = 'UN') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'N',
    @TipoVisita = '${area}',
    @Estatus = 'C',
    @Procedencia = '${procedencia}',
    @CategoriaPago = '${paymentType}',
    @CantidadVisitantes = ${visitorQuantity};`
    await db.executeQuery(query);
  } catch (error) {
    throw error;
  }
};
/*
Function to insert visitors
Adult f
*/

async function insertVisitorAdultForeign(reservationCode, area, visitorQuantity,
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
Function to insert visitors Kids 0-6 y/o Foreign
*/

async function insertVisitorKid06Foreign(reservationCode, area, visitorQuantity,
  paymentType='A', procedencia = 'UN') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'E',
    @TipoVisita = '${area}',
    @Estatus = 'C',
    @Procedencia = '${procedencia}',
    @CategoriaPago = '${paymentType}',
    @CantidadVisitantes = ${visitorQuantity};`
    await db.executeQuery(query);
  } catch (error) {
    throw error;
  }
};

/*
Function to insert visitors, kids 6-12 y/o Foreign
*/

async function insertVisitorKids612Foreign(reservationCode, area, visitorQuantity,
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
Function to insert visitors elder (65+ y/o) Foreigns
*/

async function insertVisitorElderForeign(reservationCode, area, visitorQuantity,
  paymentType='A', procedencia = 'UN') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'E',
    @TipoVisita = '${area}',
    @Estatus = 'C',
    @Procedencia = '${procedencia}',
    @CategoriaPago = '${paymentType}',
    @CantidadVisitantes = ${visitorQuantity};`
    await db.executeQuery(query);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  insertVisitorAdultNational,
  insertVisitorKid06National,
  insertVisitorKids612National,
  insertVisitorElderNational,
  insertVisitorAdultForeign,
  insertVisitorKid06Foreign,
  insertVisitorKids612Foreign,
  insertVisitorElderForeign,
};
