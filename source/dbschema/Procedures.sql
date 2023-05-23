-- Agregar los tipos de area.

/*
Camping Cupo 100, 3 días de plazo antes de que comience
la reserva para pagar,
Hora de apertura 6am, Cierre 8pm
*/
INSERT INTO Area (Tipo, Cupo, Plazo, HoraApertura, HoraCierre)
VALUES ('C', 100, 3, '06:00:00', '20:00:00');

/*
Camping Cupo 70, 7 días de plazo antes de que comience
la reserva para pagar,
Hora de apertura 6am, Cierre 8pm
*/
INSERT INTO Area (Tipo, Cupo, Plazo, HoraApertura, HoraCierre)
VALUES ('P', 70, 7, '06:00:00', '20:00:00');

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
drop PROCEDURE InsertUser
go
CREATE PROCEDURE InsertUser
  @Email VARCHAR(60),
  @Cedula VARCHAR(60),
  @PrimerNombre VARCHAR(60),
  @SegundoNombre VARCHAR(60),
  @PrimerApellido VARCHAR(60),
  @SegundoApellido VARCHAR(60),
  @EstadoActividad BIT
AS
BEGIN
  IF @SegundoNombre IS NULL AND @SegundoApellido IS NULL
  BEGIN
    INSERT INTO Usuario (Email, Cedula, PrimerNombre, PrimerApellido, EstadoActividad)
    VALUES (@Email, @Cedula, @PrimerNombre, @PrimerApellido, @EstadoActividad);
  END
  ELSE IF @SegundoNombre IS NULL
  BEGIN
    INSERT INTO Usuario (Email, Cedula, PrimerNombre, SegundoApellido, PrimerApellido, EstadoActividad)
    VALUES (@Email, @Cedula, @PrimerNombre, @SegundoApellido, @PrimerApellido, @EstadoActividad);
  END
  ELSE IF @SegundoApellido IS NULL
  BEGIN
    INSERT INTO Usuario (Email, Cedula, PrimerNombre, SegundoNombre, PrimerApellido, EstadoActividad)
    VALUES (@Email, @Cedula, @PrimerNombre, @SegundoNombre, @PrimerApellido, @EstadoActividad);
  END
  ELSE
  BEGIN
    INSERT INTO Usuario (Email, Cedula, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, EstadoActividad)
    VALUES (@Email, @Cedula, @PrimerNombre, @SegundoNombre, @PrimerApellido, @SegundoApellido, @EstadoActividad);
  END
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
  @TipoArea CHAR, -- C Camping, P picnic
  @FechaSolicitud DATETIME,
  @OutputParameter INT OUTPUT
)
AS
BEGIN
  DECLARE @Codigo INT;
  SET @Codigo = (SELECT MAX(Codigo) + 1 FROM Reservacion);

  IF @Codigo IS NULL
    SET @Codigo = 1;

  INSERT INTO Reservacion (Codigo, Email, TipoArea, FechaSolicitud)
  VALUES (@Codigo, @Email, @TipoArea, @FechaSolicitud)
  SET @OutputParameter = @Codigo;
END;

/*DECLARE @FechaSolicitud DATETIME = GETDATE();
DECLARE @OutputParameter INT;
EXEC InsertReservation
@Email = 'example@example.com',
@TipoArea = 'C',
@FechaSolicitud = @FechaSolicitud,
@OutputParameter = @OutputParameter OUTPUT;
SELECT @OutputParameter AS OutputParameter;*/

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
/*EXEC InsertVisitante
  @CodigoReservacion = 1,
  @TipoProcedencia = 'N',
  @TipoVisita = 'C',
  @Estatus = 'B',
  @Procedencia = 'EXT',
  @CategoriaPago = 'A',
  @CantidadVisitantes = 2;*/

-- Insertar la factura
/* TODO: PARA INSERTAR LA FACTURA HAY QUE 
BASARSE EN LOS VALORES YA INSERTADOS PARA
MONTO, MONEDA.

*/
drop PROCEDURE InsertFactura
go
CREATE PROCEDURE InsertFactura
  @CodigoReservacion INT,
  @EstadoPago BIT
AS
BEGIN
  DECLARE @Codigo INT;
  DECLARE @Monto MONEY;
  DECLARE @Moneda CHAR(3);

  -- Genera el código
  SET @Codigo = ISNULL((SELECT MAX(Codigo) + 1 FROM Factura), 1);

  -- Inicializar Monto
  SET @Monto = 0;

  DECLARE @MontoSum MONEY;
  DECLARE @CantidadVisitantes INT;

  DECLARE MontoCursor CURSOR FOR
  SELECT tv.Monto, v.CantidadVisitantes
  FROM TipoVisitante tv
  INNER JOIN Visitante v ON tv.TipoProcedencia = v.TipoProcedencia
    AND tv.TipoVisita = v.TipoVisita
    AND tv.Estatus = v.Estatus
  WHERE v.CodigoReservacion = @CodigoReservacion;

  OPEN MontoCursor;
  FETCH NEXT FROM MontoCursor INTO @MontoSum, @CantidadVisitantes;

  WHILE @@FETCH_STATUS = 0
  BEGIN
    SET @Monto = @Monto + (@MontoSum * @CantidadVisitantes);
    FETCH NEXT FROM MontoCursor INTO @MontoSum, @CantidadVisitantes;
  END;

  CLOSE MontoCursor;
  DEALLOCATE MontoCursor;

  -- Se toma el valor de la moneda
  SET @Moneda = (SELECT TOP 1 Moneda FROM TipoVisitante);

  -- Se inserta la tupla de factura
  INSERT INTO Factura (Codigo, CodigoReservacion, EstadoPago, FechaFactura, Monto, Moneda)
  VALUES (@Codigo, @CodigoReservacion, @EstadoPago, GETDATE(), @Monto, @Moneda);
END;

/*EXEC InsertFactura
  @CodigoReservacion = 1,
  @EstadoPago = 0;

  select * from Factura
  select *from TipoVisitante*/
