select * from Usuario
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

