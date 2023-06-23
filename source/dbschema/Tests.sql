select * from Usuario
select * from Telefono
select * from Cliente
select * from Reservacion
select * from Vehiculo
select * from Visitante
select * from Factura

select * from TipoVisitante

drop table Factura;
drop table Visitante
drop table Vehiculo
drop table Reservacion
drop table Cliente
drop table Telefono
drop table Usuario
drop table Autorizacion;
drop table Administrador;

delete from Factura where CodigoReservacion = 12
delete from Visitante where CodigoReservacion = 12
delete from Vehiculo where CodigoReservacion = 12
delete from Reservacion where Codigo = 12
delete from Cliente where Cedula = '123456879'
delete from Telefono where Cedula = '123456879'
delete from usuario where Cedula = '123456879'

delete from Cliente where Email = 'pablito-clava@gmail.com'
delete from Telefono where Email = 'pablito-clava@gmail.com'
delete from Usuario where Email = 'pablito-clava@gmail.com'
delete from Reservacion where Codigo = 7

DECLARE @StartDate DATE = '2023-06-01';
DECLARE @FinishDate DATE = '2023-06-30';

SELECT FechaInicio AS FECHA,
TipoProcedencia AS TipoDeVisitante,
Procedencia = CASE WHEN NombreProvincia = '' THEN NombrePais ELSE NombreProvincia END,
TipoDeVisita = CASE WHEN TipoArea = 'C' THEN 'Camping' ELSE 'Picnic' END,
Estatus AS TipoDeTiquete,
CantidadVisitantes AS CantidadDeVisitantes,
Codigo AS CodReservacion
FROM Reservacion JOIN Visitante ON CodigoReservacion = Codigo
WHERE FechaInicio >= @StartDate AND FechaInicio <= @FinishDate
