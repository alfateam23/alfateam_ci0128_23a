const db = require('../../DbConfig');

async function selectVisitsInDateRange(startdate, enddate) {
  try {
    const startDateObj = new Date(startdate);
    const endDateObj = new Date(enddate);
  
    if (isNaN(startDateObj.getTime()) || isNaN(endDateObj.getTime())) {
      return new Error('Invalid date format');
    }
    const formattedStartDate = new Date(startdate).toISOString().split('T')[0];
    const formattedEndDate = new Date(enddate).toISOString().split('T')[0];
    const query = `
          SELECT
          TV.TipoProcedencia,
          TV.TipoVisita,
          TV.Estatus,
          TV.CategoriaPago,
          ISNULL(SUM(V.CantidadVisitantes), 0) AS TotalVisitantes
        FROM
          TipoVisitante TV
          LEFT JOIN (
            SELECT V.TipoProcedencia, V.TipoVisita, V.Estatus, V.CategoriaPago, V.CantidadVisitantes
            FROM Visitante V
            INNER JOIN Reservacion R ON R.Codigo = V.CodigoReservacion
            WHERE R.FechaInicio BETWEEN '${formattedStartDate}' AND '${formattedEndDate}'
          ) AS V ON V.TipoProcedencia = TV.TipoProcedencia
            AND V.TipoVisita = TV.TipoVisita
            AND V.Estatus = TV.Estatus
            AND V.CategoriaPago = TV.CategoriaPago
        GROUP BY
          TV.TipoProcedencia,
          TV.TipoVisita,
          TV.Estatus,
          TV.CategoriaPago;`
    const result = await db.executeQuery(query)
    return result.recordset;
  }
  catch (error) {
    throw error;
  }
}

async function selectProfitsInDateRange(startdate, enddate) {
  try {
    const startDateObj = new Date(startdate);
    const endDateObj = new Date(enddate);
  
    if (isNaN(startDateObj.getTime()) || isNaN(endDateObj.getTime())) {
      return new Error('Invalid date format');
    }
    const formattedStartDate = new Date(startdate).toISOString().split('T')[0];
    const formattedEndDate = new Date(enddate).toISOString().split('T')[0];
    const query = `
        SELECT
          TV.TipoProcedencia,
          TV.TipoVisita,
          TV.Estatus,
          TV.CategoriaPago,
          ISNULL(SUM(V.Subtotal), 0) AS TotalVisitantes
        FROM
          TipoVisitante TV
          LEFT JOIN (
            SELECT V.TipoProcedencia, V.TipoVisita, V.Estatus, V.CategoriaPago, V.Subtotal
            FROM Visitante V
            INNER JOIN Reservacion R ON R.Codigo = V.CodigoReservacion
            WHERE R.FechaInicio BETWEEN '${formattedStartDate}' AND '${formattedEndDate}'
          ) AS V ON V.TipoProcedencia = TV.TipoProcedencia
            AND V.TipoVisita = TV.TipoVisita
            AND V.Estatus = TV.Estatus
            AND V.CategoriaPago = TV.CategoriaPago
        GROUP BY
          TV.TipoProcedencia,
          TV.TipoVisita,
          TV.Estatus,
          TV.CategoriaPago;`
    const result = await db.executeQuery(query)
    return result.recordset;
  }
  catch (error) {
    throw error;
  }
}

async function selectVisitorReport(startDate,endDate) {
  try {
    const formattedStartDate = new Date(startDate).toISOString().split('T')[0];
    const formattedEndDate = new Date(endDate).toISOString().split('T')[0];
    const result = await db.executeQuery(`
    SELECT FechaInicio AS FECHA,
    TipoProcedencia AS TipoDeVisitante,
    Procedencia = CASE WHEN NombreProvincia = '' THEN NombrePais ELSE NombreProvincia END,
    TipoDeVisita = CASE WHEN TipoArea = 'C' THEN 'Camping' ELSE 'Picnic' END,
    Estatus AS TipoDeTiquete,
    CantidadVisitantes AS CantidadDeVisitantes,
    Codigo AS CodReservacion
    FROM Reservacion JOIN Visitante ON CodigoReservacion = Codigo
    WHERE FechaInicio >= '${formattedStartDate}' AND FechaInicio <= '${formattedEndDate}'
    `);
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  selectProfitsInDateRange,
  selectVisitsInDateRange,
  selectVisitorReport
}
