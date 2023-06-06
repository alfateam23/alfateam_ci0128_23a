select * from Usuario
select * from Telefono
select * from Cliente
select * from Reservacion
select * from Vehiculo
select * from Visitante
select * from Factura

select * from TipoVisitante

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

