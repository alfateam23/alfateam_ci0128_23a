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

delete from Factura where CodigoReservacion = 10
delete from Visitante where CodigoReservacion = 10
delete from Vehiculo where CodigoReservacion = 10
delete from Cliente where Email = 'asolmon88@gmail.com'
delete from Telefono where Email = 'asolmon88@gmail.com'
delete from usuario where Email = 'asolmon88@gmail.com'
delete from Reservacion where Codigo = 10

delete from Cliente where Email = 'pablito-clava@gmail.com'
delete from Telefono where Email = 'pablito-clava@gmail.com'
delete from Usuario where Email = 'pablito-clava@gmail.com'
delete from Reservacion where Codigo = 7

SELECT constraint_name, constraint_type
FROM information_schema.table_constraints
WHERE table_name = 'Usuario';

select dbo.CheckEmailExists('asolmon88@gmail.com');
