select * from Usuario
select * from Telefono
select * from Telefono
select * from Cliente
select * from Reservacion
select * from Vehiculo
select * from Visitante
select * from Factura

select * from TipoVisitante

delete from usuario where Email = 'asolmon88@gmail.com'
delete from Telefono where Email = 'asolmon88@gmail.com'
delete from Cliente where Email = 'asolmon88@gmail.com'

delete from Factura where CodigoReservacion = 3
delete from Visitante where CodigoReservacion = 3
delete from Vehiculo where CodigoReservacion = 3
delete from Cliente where Email = 'mario-neta@hotmail.com'
delete from Telefono where Email = 'mario-neta@hotmail.com'
delete from Usuario where Email = 'mario-neta@hotmail.com'
delete from Reservacion where Codigo = 3

DECLARE @date1 DATE;
SET @date1 = CONVERT(DATE, '2023-06-27', 23);
DECLARE @date2 DATE;
SET @date2 = CONVERT(DATE, '2023-06-30', 23);

SELECT
  TV.TipoProcedencia,
  TV.TipoVisita,
  TV.Estatus,
  ISNULL(SUM(V.CantidadVisitantes),0) AS TotalVisitors
FROM
  TipoVisitante TV
  LEFT JOIN Visitante V ON V.TipoProcedencia = TV.TipoProcedencia
    AND V.TipoVisita = TV.TipoVisita
    AND V.Estatus = TV.Estatus
    AND V.CategoriaPago = TV.CategoriaPago
  LEFT JOIN Reservacion R ON R.Codigo = V.CodigoReservacion
    AND R.FechaInicio BETWEEN '2023-06-27' AND '2023-06-30'
GROUP BY
  TV.TipoProcedencia,
  TV.TipoVisita,
  TV.Estatus;
