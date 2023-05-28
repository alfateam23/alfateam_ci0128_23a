const db = require('../DbConfig');

/*
Function to insert visitors
Adult national
*/

async function insertVisitorAdultNational(reservationCode, area, visitorQuantity,
  paymentType='No exonerado') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'Nacional',
    @TipoVisita = '${area}',
    @Estatus = 'Adulto',
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
  paymentType='Exonerado') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'Nacional',
    @TipoVisita = '${area}',
    @Estatus = 'Niño 0 a 6 años',
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
  paymentType='No exonerado') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'Nacional',
    @TipoVisita = '${area}',
    @Estatus = 'Niño 6 a 12 años',
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
  paymentType='Exonerado') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'Nacional',
    @TipoVisita = '${area}',
    @Estatus = 'Adulto 65 años o más',
    @CategoriaPago = '${paymentType}',
    @CantidadVisitantes = ${visitorQuantity};`
    await db.executeQuery(query);
  } catch (error) {
    throw error;
  }
};

/*
Function to insert visitors
Adult foreigner
*/

async function insertVisitorAdultForeign(reservationCode, area, visitorQuantity,
  paymentType='No exonerado') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'Extranjero',
    @TipoVisita = '${area}',
    @Estatus = 'Adulto',
    @CategoriaPago = '${paymentType}',
    @CantidadVisitantes = ${visitorQuantity};`
    await db.executeQuery(query);
  } catch (error) {
    throw error;
  }
};

/*
Function to insert visitors Kids 0-6 y/o foreigner
*/

async function insertVisitorKid06Foreign(reservationCode, area, visitorQuantity,
  paymentType='Exonerado') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'Extranjero',
    @TipoVisita = '${area}',
    @Estatus = 'Niño 0 a 6 años',
    @CategoriaPago = '${paymentType}',
    @CantidadVisitantes = ${visitorQuantity};`
    await db.executeQuery(query);
  } catch (error) {
    throw error;
  }
};

/*
Function to insert visitors, kids 6-12 y/o foreigner
*/

async function insertVisitorKids612Foreign(reservationCode, area, visitorQuantity,
  paymentType='No exonerado') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'Extranjero',
    @TipoVisita = '${area}',
    @Estatus = 'Niño 6 a 12 años',
    @CategoriaPago = '${paymentType}',
    @CantidadVisitantes = ${visitorQuantity};`
    await db.executeQuery(query);
  } catch (error) {
    throw error;
  }
};

/*
Function to insert visitors elder (65+ y/o) foreigner
*/

async function insertVisitorElderForeign(reservationCode, area, visitorQuantity,
  paymentType='Exonerado') {
  try {
    const query = `EXEC InsertVisitante
    @CodigoReservacion = ${reservationCode},
    @TipoProcedencia = 'Extranjero',
    @TipoVisita = '${area}',
    @Estatus = 'Adulto 65 años o más',
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
