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

Select *
From Visitante JOIN Reservacion on Codigo=CodigoReservacion
Where FechaInicio >='2023-06-01' AND FechaInicio <= '2023-06-30'
AND TipoVisita = 'Camping' AND Estatus = 'Adulto'

Select FechaInicio as Fecha, SUM(CantidadVisitantes) as Tiquetes, SUM(Subtotal) as Total
From Visitante JOIN Reservacion on Codigo=CodigoReservacion
Where FechaInicio >='2023-06-01' AND FechaInicio <= '2023-06-30'
AND TipoVisita = 'Camping' AND Estatus = 'Adulto'
Group by FechaInicio
Order by Fecha

Select * From TipoServicio
Select * from Servicio
