const db = require('../../DbConfig');

async function FinancialAdultNational(area, startDate,endDate) {
  try {
    const result = await db.executeQuery(
      `Select FechaInicio as Fecha, SUM(CantidadVisitantes) as Tiquetes, SUM(Subtotal) as Total
      From Visitante JOIN Reservacion on Codigo=CodigoReservacion
      Where FechaInicio >='${startDate}' AND FechaInicio <= '${endDate}'
      AND TipoVisita = '${area}' AND Estatus = 'Adulto'
      AND TipoProcedencia='Nacional'
      Group by FechaInicio
      Order by Fecha`
    )
    return result.recordset
  } catch (error) {
    throw error;
  }
}

async function FinancialKid06National(area, startDate,endDate) {
  try {
    const result = await db.executeQuery(
      `Select FechaInicio as Fecha, SUM(CantidadVisitantes) as Tiquetes, SUM(Subtotal) as Total
      From Visitante JOIN Reservacion on Codigo=CodigoReservacion
      Where FechaInicio >='${startDate}' AND FechaInicio <= '${endDate}'
      AND TipoVisita = '${area}' AND Estatus = 'Niño 0 a 6 años'
      AND TipoProcedencia='Nacional'
      Group by FechaInicio
      Order by Fecha`
    )
    
    return result.recordset
  } catch (error) {
    throw error;
  }
}

async function FinancialKid612National(area, startDate,endDate) {
  try {
    const result = await db.executeQuery(
      `Select FechaInicio as Fecha, SUM(CantidadVisitantes) as Tiquetes, SUM(Subtotal) as Total
      From Visitante JOIN Reservacion on Codigo=CodigoReservacion
      Where FechaInicio >='${startDate}' AND FechaInicio <= '${endDate}'
      AND TipoVisita = '${area}' AND Estatus = 'Niño 6 a 12 años'
      AND TipoProcedencia='Nacional'
      Group by FechaInicio
      Order by Fecha`
    )
    
    return result.recordset
  } catch (error) {
    throw error;
  }
}

async function FinancialAdult65National(area, startDate,endDate) {
  try {
    const result = await db.executeQuery(
      `Select FechaInicio as Fecha, SUM(CantidadVisitantes) as Tiquetes, SUM(Subtotal) as Total
      From Visitante JOIN Reservacion on Codigo=CodigoReservacion
      Where FechaInicio >='${startDate}' AND FechaInicio <= '${endDate}'
      AND TipoVisita = '${area}' AND Estatus = 'Adulto 65 años o más'
      AND TipoProcedencia='Nacional'
      Group by FechaInicio
      Order by Fecha`
    )
    
    return result.recordset
  } catch (error) {
    throw error;
  }
}

async function FinancialAdultForeign(area, startDate,endDate) {
  try {
    const result = await db.executeQuery(
      `Select FechaInicio as Fecha, SUM(CantidadVisitantes) as Tiquetes, SUM(Subtotal) as Total
      From Visitante JOIN Reservacion on Codigo=CodigoReservacion
      Where FechaInicio >='${startDate}' AND FechaInicio <= '${endDate}'
      AND TipoVisita = '${area}' AND Estatus = 'Adulto'
      AND TipoProcedencia='Extranjero'
      Group by FechaInicio
      Order by Fecha`
    )
    
    return result.recordset
  } catch (error) {
    throw error;
  }
}

async function FinancialKid06Foreign(area, startDate,endDate) {
  try {
    const result = await db.executeQuery(
      `Select FechaInicio as Fecha, SUM(CantidadVisitantes) as Tiquetes, SUM(Subtotal) as Total
      From Visitante JOIN Reservacion on Codigo=CodigoReservacion
      Where FechaInicio >='${startDate}' AND FechaInicio <= '${endDate}'
      AND TipoVisita = '${area}' AND Estatus = 'Niño 0 a 6 años'
      AND TipoProcedencia='Extranjero'
      Group by FechaInicio
      Order by Fecha`
    )
    
    return result.recordset
  } catch (error) {
    throw error;
  }
}

async function FinancialKid612Foreign(area, startDate,endDate) {
  try {
    const result = await db.executeQuery(
      `Select FechaInicio as Fecha, SUM(CantidadVisitantes) as Tiquetes, SUM(Subtotal) as Total
      From Visitante JOIN Reservacion on Codigo=CodigoReservacion
      Where FechaInicio >='${startDate}' AND FechaInicio <= '${endDate}'
      AND TipoVisita = '${area}' AND Estatus = 'Niño 6 a 12 años'
      AND TipoProcedencia='Extranjero'
      Group by FechaInicio
      Order by Fecha`
    )
    
    return result.recordset
  } catch (error) {
    throw error;
  }
}

async function FinancialAdult65Foreign(area, startDate,endDate) {
  try {
    const result = await db.executeQuery(
      `Select FechaInicio as Fecha, SUM(CantidadVisitantes) as Tiquetes, SUM(Subtotal) as Total
      From Visitante JOIN Reservacion on Codigo=CodigoReservacion
      Where FechaInicio >='${startDate}' AND FechaInicio <= '${endDate}'
      AND TipoVisita = '${area}' AND Estatus = 'Adulto 65 años o más'
      AND TipoProcedencia='Extranjero'
      Group by FechaInicio
      Order by Fecha`
    )
    
    return result.recordset
  } catch (error) {
    throw error;
  }
}

module.exports = {
  FinancialAdultNational,
  FinancialAdult65National,
  FinancialKid06National,
  FinancialKid612National,
  FinancialAdultForeign,
  FinancialAdult65Foreign,
  FinancialKid06Foreign,
  FinancialKid612Foreign
}
