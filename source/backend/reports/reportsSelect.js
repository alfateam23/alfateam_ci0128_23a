// Endpoints for report datasets

const db = require('../DbConfig')

export async function selectVisitsInDateRange(startdate, enddate) {
    try {
        const query = `SELECT TipoProcedencia, TipoVisita, Estatus, CategoriaPago, CantidadVisitantes FROM Visitante
            JOIN Reservacion
            ON Codigo=Visitante.CodigoReservacion
            WHERE Reservacion.FechaInicio BETWEEN ${startdate} AND ${enddate}`
        const result = await db.executeQuery(query)
        return result
    }
    catch (error) {
        throw error;
    }
}

export async function selectProfitsInDateRange(startdate, enddate) {
    try {
        const query = `SELECT TipoProcedencia, TipoVisita, Estatus, CategoriaPago,
        CantidadVisitantes * TipoVisitanteMonto, TipoVisitante.Moneda FROM Visitante
            JOIN Reservacion
            ON Codigo=Visitante.CodigoReservacion
            JOIN TipoVisitante
            ON TipoVisitante.TipoProcedencia=Visitante.TipoProcedencia
            AND TipoVisitante.TipoVisita=Visitante.TipoVisita
            AND TipoVisitante.Estatus=Visitante.Estatus
            AND TipoVisitante.CategoriaPago=Visitante.CategoriaPago
            WHERE Reservacion.FechaInicio BETWEEN ${startdate} AND ${enddate}`
        const result = await db.executeQuery(query)
        return result
    }
    catch (error) {
        throw error;
    }
}
