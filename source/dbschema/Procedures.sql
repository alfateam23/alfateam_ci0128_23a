-- Agregar los tipos de area.

/*
Camping Cupo 100, 3 días de plazo antes de que comience
la reserva para pagar,
Hora de apertura 6am, Cierre 8pm
*/
INSERT INTO Area (Tipo, Cupo, Plazo, HoraApertura, HoraCierre)
VALUES (0, 100, 3, '06:00:00', '20:00:00');

/*
Camping Cupo 70, 7 días de plazo antes de que comience
la reserva para pagar,
Hora de apertura 6am, Cierre 8pm
*/
INSERT INTO Area (Tipo, Cupo, Plazo, HoraApertura, HoraCierre)
VALUES (1, 70, 7, '06:00:00', '20:00:00');

INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'C', 'A', 4520, 'CRC')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'C', 'B', 3390, 'CRC')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'C', 'C', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'C', 'D', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'C', 'E', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'C', 'F', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'C', 'G', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'C', 'H', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'C', 'I', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'P', 'A', 2260, 'CRC')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'P', 'B', 1130, 'CRC')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'P', 'C', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'P', 'D', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'P', 'E', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'P', 'F', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'P', 'G', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'P', 'H', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('N', 'P', 'I', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'C', 'A', 18.08, 'USD')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'C', 'B', 10.17, 'USD')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'C', 'C', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'C', 'D', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'C', 'E', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'C', 'F', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'C', 'G', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'C', 'H', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'C', 'I', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'P', 'A', 13.56, 'USD')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'P', 'B', 5.65, 'USD')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'P', 'C', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'P', 'D', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'P', 'E', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'P', 'F', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'P', 'G', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'P', 'H', 0, 'CAN')
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, Monto, Moneda) VALUES ('E', 'P', 'I', 0, 'CAN')

/*---- Procedimientos para insertar reservaciones ----*/

-- Primero insertar usuario
go
CREATE PROCEDURE InsertUser(
  @Email VARCHAR(60),
  @Cedula VARCHAR(60),
  @PrimerNombre VARCHAR(60),
  @SegundoNombre VARCHAR(60),
  @PrimerApellido VARCHAR(60),
  @SegundoApellido VARCHAR(60),
  @EstadoActividad BIT
)
AS
BEGIN
  INSERT INTO Usuario (Email, Cedula, PrimerNombre, SegundoNombre,
  PrimerApellido, SegundoApellido, EstadoActividad)
  VALUES
  (@Email, @Cedula, @PrimerNombre, @SegundoNombre,
  @PrimerApellido, @SegundoApellido, @EstadoActividad)
END;

/*EXEC InsertUser
  @Email = 'example@example.com',
  @Cedula = '123456789',
  @PrimerNombre = 'John',
  @SegundoNombre = 'Doe',
  @PrimerApellido = 'Smith',
  @SegundoApellido = 'Johnson',
  @EstadoActividad = 1;*/

-- Siguiente insertar telefono
go
CREATE PROCEDURE InsertPhone (
  @Email VARCHAR(60),
  @Numero VARCHAR(60)
)
AS
BEGIN
  INSERT INTO Telefono (Email, Numero)
  VALUES (@Email, @Numero)
END;

EXEC InsertPhone
  @Email='example@example.com',
  @Numero='88774455'

-- Siguiente insertar el cliente
go
CREATE PROCEDURE InsertClient (
  @Email VARCHAR(60)
)
AS
BEGIN
  INSERT INTO Cliente (Email)
  VALUES (@Email)
END;

-- EXEC InsertClient @Email='example@example.com';

-- Insertar Vehiculo
GO
CREATE PROCEDURE InsertVehicle (
  @EmailCliente VARCHAR(60),
  @Placa VARCHAR(60)
)
AS
BEGIN
  INSERT INTO Vehiculo (EmailCliente, Placa)
  VALUES (@EmailCliente, @Placa)
END;

/*EXEC InsertVehicle
  @EmailCliente='example@example.com',
  @Placa='888445'*/

-- Insertar reservación
go
CREATE PROCEDURE InsertReservation(
  @Email VARCHAR(60),
  @TipoArea BIT, -- 0 Camping, 1 picnic
  @FechaSolicitud DATETIME
)
AS
BEGIN
  DECLARE @Codigo INT;
  SET @Codigo = (SELECT MAX(Codigo) + 1 FROM Reservacion);

  IF @Codigo IS NULL
    SET @Codigo = 1;

  INSERT INTO Reservacion (Codigo, Email, TipoArea, FechaSolicitud)
  VALUES (@Codigo, @Email, @TipoArea, @FechaSolicitud)
END;


/*DECLARE @FechaSolicitud DATETIME = GETDATE();
EXEC InsertReservation
  @Email = 'example@example.com',
  @TipoArea = 0,
  @FechaSolicitud = @FechaSolicitud;*/

-- Insertar Visitantes

GO
CREATE PROCEDURE InsertVisitante
  @CodigoReservacion INT,
  @TipoProcedencia CHAR,
  @TipoVisita CHAR,
  @Estatus CHAR,
  @Procedencia VARCHAR(60),
  @CategoriaPago CHAR,
  @CantidadVisitantes INT
AS
BEGIN
  INSERT INTO Visitante (CodigoReservacion, TipoProcedencia, TipoVisita, Estatus, Procedencia, CategoriaPago, CantidadVisitantes)
  VALUES (@CodigoReservacion, @TipoProcedencia, @TipoVisita, @Estatus, @Procedencia, @CategoriaPago, @CantidadVisitantes);
END;

/*EXEC InsertVisitante
  @CodigoReservacion = 1,
  @TipoProcedencia = 'N',
  @TipoVisita = 'C',
  @Estatus = 'A',
  @Procedencia = 'EXT',
  @CategoriaPago = 'A',
  @CantidadVisitantes = 2;*/


-- Insertar la factura
/* TODO: PARA INSERTAR LA FACTURA HAY QUE 
BASARSE EN LOS VALORES YA INSERTADOS PARA
MONTO, MONEDA.

*/
go
CREATE PROCEDURE InsertFactura
  @Codigo INT,
  @CodigoReservacion INT,
  @EstadoPago BIT,
  @FechaFactura DATETIME,
  @Monto MONEY,
  @Moneda CHAR(3)
AS
BEGIN
  INSERT INTO Factura (Codigo, CodigoReservacion, EstadoPago, FechaFactura, Monto, Moneda)
  VALUES (@Codigo, @CodigoReservacion, @EstadoPago, @FechaFactura, @Monto, @Moneda);
END;

EXEC InsertFactura
  @Codigo = 1,
  @CodigoReservacion = 123,
  @EstadoPago = 0,
  @FechaFactura = GETDATE(),
  @Monto = 100.50,
  @Moneda = 'USD';
