/*---- Procedimientos para insertar reservaciones ----*/

-- Primero insertar usuario
go
CREATE PROCEDURE InsertUser
  @Email VARCHAR(60),
  @Cedula VARCHAR(60),
  @PrimerNombre VARCHAR(60),
  @SegundoNombre VARCHAR(60),
  @PrimerApellido VARCHAR(60),
  @SegundoApellido VARCHAR(60)
AS
BEGIN
  IF @SegundoNombre IS NULL AND @SegundoApellido IS NULL
  BEGIN
    INSERT INTO Usuario (Email, Cedula, PrimerNombre, PrimerApellido)
    VALUES (@Email, @Cedula, @PrimerNombre, @PrimerApellido);
  END
  ELSE IF @SegundoNombre IS NULL
  BEGIN
    INSERT INTO Usuario (Email, Cedula, PrimerNombre, SegundoApellido, PrimerApellido)
    VALUES (@Email, @Cedula, @PrimerNombre, @SegundoApellido, @PrimerApellido);
  END
  ELSE IF @SegundoApellido IS NULL
  BEGIN
    INSERT INTO Usuario (Email, Cedula, PrimerNombre, SegundoNombre, PrimerApellido)
    VALUES (@Email, @Cedula, @PrimerNombre, @SegundoNombre, @PrimerApellido);
  END
  ELSE
  BEGIN
    INSERT INTO Usuario (Email, Cedula, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido)
    VALUES (@Email, @Cedula, @PrimerNombre, @SegundoNombre, @PrimerApellido, @SegundoApellido);
  END
END;

go
CREATE PROCEDURE UpdateUser
  @Cedula VARCHAR(60),
  @Email VARCHAR(60) = NULL,
  @PrimerNombre VARCHAR(60) = NULL,
  @SegundoNombre VARCHAR(60) = NULL,
  @PrimerApellido VARCHAR(60) = NULL,
  @SegundoApellido VARCHAR(60) = NULL
AS
BEGIN
  UPDATE Usuario
  SET
    Email = ISNULL(@Email, Email),
    PrimerNombre = ISNULL(@PrimerNombre, PrimerNombre),
    SegundoNombre = ISNULL(@SegundoNombre, SegundoNombre),
    PrimerApellido = ISNULL(@PrimerApellido, PrimerApellido),
    SegundoApellido = ISNULL(@SegundoApellido, SegundoApellido)
  WHERE Cedula = @Cedula;
END;

/*EXEC InsertUser 
  @Email = 'example@email.com',
  @Cedula = '123456789',
  @PrimerNombre = 'John',
  @SegundoNombre = NULL,
  @PrimerApellido = 'Doe',
  @SegundoApellido = NULL;*/
-- Siguiente insertar telefono
go
CREATE PROCEDURE InsertPhone (
  @Cedula VARCHAR(60),
  @Numero VARCHAR(60)
)
AS
BEGIN
  INSERT INTO Telefono (Cedula, Numero)
  VALUES (@Cedula, @Numero)
END;

/*EXEC InsertPhone 
  @Email = 'example@email.com',
  @Numero = '123-456-7890';*/
-- Siguiente insertar el cliente
go
CREATE PROCEDURE InsertClient (
  @Cedula VARCHAR(60)
)
AS
BEGIN
  INSERT INTO Cliente (Cedula)
  VALUES (@Cedula)
END;
 
/*EXEC InsertClient 
  @Email = 'example@email.com'*/;

go
CREATE PROCEDURE InsertLimiteVisitantes
  @TipoArea CHAR,
  @Fecha DATETIME
AS
BEGIN
  DECLARE @CupoTotal INT;
  DECLARE @CupoOnline INT;

  SELECT @CupoTotal = CupoTotal, @CupoOnline = CupoOnline
  FROM Area
  WHERE Tipo = @TipoArea;
  INSERT INTO LimiteVisitantes (TipoArea, Fecha, CupoTotalDia, CupoOnlineDia)
  VALUES (@TipoArea, @Fecha, @CupoTotal, @CupoOnline);
END;

-- Insertar reservación
go
CREATE PROCEDURE InsertReservation
  @Cedula VARCHAR(60),
  @TipoArea CHAR,
  @FechaInicio DATETIME,
  @FechaFin DATETIME,
  @NombrePais VARCHAR(60),
  @NombreProvincia VARCHAR(60),
  @OutputParameter INT OUTPUT
AS
BEGIN
  DECLARE @Codigo INT;
  DECLARE @FechaSolicitud DATETIME;
  SET @FechaSolicitud = GETDATE(); -- Set the current date as the FechaSolicitud

  SET @Codigo = (SELECT MAX(Codigo) + 1 FROM Reservacion);

  IF @Codigo IS NULL
    SET @Codigo = 1;

  INSERT INTO Reservacion (Codigo, Cedula, TipoArea, FechaSolicitud, FechaInicio, FechaFin, NombrePais, NombreProvincia)
  VALUES (@Codigo, @Cedula, @TipoArea, @FechaSolicitud, @FechaInicio, @FechaFin, @NombrePais, @NombreProvincia);

  SET @OutputParameter = @Codigo;
  SELECT @OutputParameter AS OutputCode;
END;

/*DECLARE @Output INT;
EXEC InsertReservation 
  @Email = 'example@email.com',
  @TipoArea = 'C',
  @FechaInicio = '2023-06-01',
  @FechaFin = '2023-06-05',
  @NombrePais = 'Costa Rica',
  @NombreProvincia = 'San José',
  @OutputParameter = @Output OUTPUT;
SELECT @Output;*/

-- Insertar Vehiculo
GO
CREATE PROCEDURE InsertVehiculo
  @CodigoReservacion INT,
  @Placa VARCHAR(60)
AS
BEGIN
  INSERT INTO Vehiculo (CodigoReservacion, Placa)
  VALUES (@CodigoReservacion, @Placa);
END;

/*EXEC InsertVehiculo 
  @CodigoReservacion = 1,
  @Placa = 'ABC123';*/

-- Insertar Visitantes
go
CREATE PROCEDURE InsertVisitante
  @CodigoReservacion INT,
  @TipoProcedencia VARCHAR(60),
  @TipoVisita VARCHAR(60),
  @Estatus VARCHAR(60),
  @CategoriaPago VARCHAR(60),
  @CantidadVisitantes INT
AS
BEGIN
  DECLARE @Subtotal MONEY;

  -- Calculate the Subtotal based on TipoVisitante
  SELECT @Subtotal = Monto * @CantidadVisitantes
  FROM TipoVisitante
  WHERE TipoProcedencia = @TipoProcedencia
    AND TipoVisita = @TipoVisita
    AND Estatus = @Estatus
    AND CategoriaPago = @CategoriaPago;
  print @Estatus

  -- Insert into Visitante table with Subtotal
  INSERT INTO Visitante (CodigoReservacion, TipoProcedencia, TipoVisita, Estatus, CategoriaPago, CantidadVisitantes, Subtotal)
  VALUES (@CodigoReservacion, @TipoProcedencia, @TipoVisita, @Estatus, @CategoriaPago, @CantidadVisitantes, @Subtotal);
END;

/*EXEC InsertVisitante 
  @CodigoReservacion = 1,
  @TipoProcedencia = 'Nacional',
  @TipoVisita = 'Camping',
  @Estatus = 'Adulto',
  @CategoriaPago = 'No exonerado',
  @CantidadVisitantes = 2;*/
/*EXEC InsertVisitante 
  @CodigoReservacion = 1,
  @TipoProcedencia = 'Nacional',
  @TipoVisita = 'Camping',
  @Estatus = 'Adulto 65 años o más',
  @CategoriaPago = 'Exonerado',
  @CantidadVisitantes = 1;*/

-- Insertar la factura

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
  SET @Codigo = ISNULL((SELECT MAX(CodigoFactura) + 1 FROM Factura), 1);

  -- Inicializar Monto
  SET @Monto = 0;

  SELECT @Monto = SUM(v.Subtotal)
  FROM Visitante v
  WHERE v.CodigoReservacion = @CodigoReservacion;

  -- Se toma el valor de la moneda
  SET @Moneda = (SELECT TOP 1 Moneda
                FROM TipoVisitante tv
                INNER JOIN Visitante v ON tv.TipoProcedencia = v.TipoProcedencia
                  AND tv.TipoVisita = v.TipoVisita
                  AND tv.Estatus = v.Estatus
                WHERE v.CodigoReservacion = @CodigoReservacion);

  -- Se inserta la tupla de factura
  INSERT INTO Factura (CodigoFactura, CodigoReservacion, EstadoPago, FechaFactura, Monto, Moneda)
  VALUES (@Codigo, @CodigoReservacion, @EstadoPago, GETDATE(), @Monto, @Moneda);
END;

/*EXEC InsertFactura 
  @CodigoReservacion = 1,
  @EstadoPago = 1;

  select * from Factura
  select *from TipoVisitante*/

go
CREATE TRIGGER UpdateLimiteVisitantes
ON Visitante
AFTER INSERT
AS
BEGIN
  DECLARE @CodigoReservacion INT;
  DECLARE @FechaInicio DATETIME;
  DECLARE @FechaFin DATETIME;
  DECLARE @CantidadVisitantes INT;

  -- obtener valores insertados
  SELECT
    @CodigoReservacion = inserted.CodigoReservacion,
    @CantidadVisitantes = inserted.CantidadVisitantes,
    @FechaInicio = r.FechaInicio,
    @FechaFin = r.FechaFin
  FROM inserted
  INNER JOIN Reservacion r ON inserted.CodigoReservacion = r.Codigo;

  -- restarle la cantidad de visitantes a los LimiteVisitantes
  -- Existentes
  UPDATE lv
  SET
    CupoTotalDia = lv.CupoTotalDia - @CantidadVisitantes,
    CupoOnlineDia = lv.CupoOnlineDia - @CantidadVisitantes
  FROM LimiteVisitantes lv
  WHERE
    lv.TipoArea = (
      SELECT TipoArea FROM Reservacion WHERE Codigo = @CodigoReservacion
    )
    AND lv.Fecha >= @FechaInicio
    AND lv.Fecha < @FechaFin;

  /*Si hay algún día que no hay cupo todavía,
  se agrega.*/
  DECLARE @CurrentDate DATETIME;
  SET @CurrentDate = @FechaInicio;

  WHILE @CurrentDate < @FechaFin
  BEGIN
    IF NOT EXISTS (
      SELECT 1 FROM LimiteVisitantes WHERE TipoArea = (
        SELECT TipoArea FROM Reservacion WHERE Codigo = @CodigoReservacion
      ) AND Fecha = @CurrentDate
    )
    BEGIN
      INSERT INTO LimiteVisitantes (TipoArea, Fecha, CupoTotalDia, CupoOnlineDia)
      VALUES (
        (SELECT TipoArea
        FROM Reservacion
        WHERE Codigo = @CodigoReservacion),
        @CurrentDate,
        (SELECT CupoTotal
        FROM Area
        WHERE Tipo = (SELECT TipoArea
                      FROM Reservacion
                      WHERE Codigo = @CodigoReservacion)) - @CantidadVisitantes,
        (SELECT CupoOnline
        FROM Area
        WHERE Tipo = (SELECT TipoArea
                      FROM Reservacion
                      WHERE Codigo = @CodigoReservacion)) - @CantidadVisitantes
      );
    END

    SET @CurrentDate = DATEADD(DAY, 1, @CurrentDate);
  END
END;

go
CREATE PROCEDURE CancelReservation
    @Codigo INT
AS
BEGIN
    UPDATE Reservacion
    SET EstadoActividad = 0
    WHERE Codigo = @Codigo;
    EXEC GetReservationWithCode @Codigo = @Codigo
END;

go
CREATE PROCEDURE GetReservationWithCode
  @Codigo INT
AS
BEGIN
  SELECT
    Reservacion.Codigo AS ReservacionCodigo,
    Reservacion.TipoArea,
    SUM(Visitante.CantidadVisitantes) AS TotalCantidadVisitantes,
    Reservacion.FechaInicio,
    Reservacion.FechaFin,
    Factura.EstadoPago,
    Reservacion.EstadoActividad
  FROM
    Reservacion
    INNER JOIN Visitante ON Visitante.CodigoReservacion = Reservacion.Codigo
    INNER JOIN Factura ON Factura.CodigoReservacion = Reservacion.Codigo
  WHERE
    Reservacion.Codigo = @Codigo
  GROUP BY
    Reservacion.Codigo,
    Reservacion.TipoArea,
    Reservacion.FechaInicio,
    Reservacion.FechaFin,
    Factura.EstadoPago,
    Reservacion.EstadoActividad;
END;

go
CREATE PROCEDURE ConfirmReservation
    @Codigo INT
AS
BEGIN
  UPDATE Factura
  SET EstadoPago = 1
  WHERE CodigoReservacion = @Codigo;
  EXEC GetReservationWithCode @Codigo = @Codigo
END;

go
CREATE PROCEDURE CalculateSubtotal
  @NacionalCampingNiño0a6 INT,
  @NacionalCampingNiño6a12 INT,
  @NacionalCampingAdulto INT,
  @NacionalCampingAdulto65 INT,
  @ExtranjeroCampingNiño0a6 INT,
  @ExtranjeroCampingNiño6a12 INT,
  @ExtranjeroCampingAdulto INT,
  @ExtranjeroCampingAdulto65 INT
AS
BEGIN
  DECLARE @Subtotals TABLE
  (
    TipoProcedencia VARCHAR(60),
    TipoVisita VARCHAR(60),
    Estatus VARCHAR(60),
    CategoriaPago VARCHAR(60),
    Cantidad INT,
    Subtotal MONEY
  );

  -- Insertar todos los tipos de visitante y sus cantidades
  INSERT INTO @Subtotals (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Cantidad)
  VALUES
    ('Nacional', 'Camping', 'Niño 0 a 6 años', 'Exonerado', @NacionalCampingNiño0a6),
    ('Nacional', 'Camping', 'Niño 6 a 12 años', 'No exonerado', @NacionalCampingNiño6a12),
    ('Nacional', 'Camping', 'Adulto', 'No exonerado', @NacionalCampingAdulto),
    ('Nacional', 'Camping', 'Adulto 65 años o más', 'No exonerado', @NacionalCampingAdulto65),
    ('Extranjero', 'Camping', 'Niño 0 a 6 años', 'Exonerado', @ExtranjeroCampingNiño0a6),
    ('Extranjero', 'Camping', 'Niño 6 a 12 años', 'No exonerado', @ExtranjeroCampingNiño6a12),
    ('Extranjero', 'Camping', 'Adulto', 'No exonerado', @ExtranjeroCampingAdulto),
    ('Extranjero', 'Camping', 'Adulto 65 años o más', 'No exonerado', @ExtranjeroCampingAdulto65);

  -- Calcular subtotales
  UPDATE t
  SET Subtotal = tv.Monto * t.Cantidad
  FROM @Subtotals t
  JOIN TipoVisitante tv ON t.TipoProcedencia = tv.TipoProcedencia
                        AND t.TipoVisita = tv.TipoVisita
                        AND t.Estatus = tv.Estatus
                        AND t.CategoriaPago = tv.CategoriaPago;

  -- Total
  DECLARE @Total MONEY;
  SELECT @Total = SUM(Subtotal)
  FROM @Subtotals;

  SELECT @Total AS Total;
END;

go
CREATE PROCEDURE GetReservationCode
  @Cedula VARCHAR(60)
AS
BEGIN
  SELECT Codigo
  FROM Reservacion
  WHERE Cedula = @Cedula
END

go
CREATE PROCEDURE CheckIDExists
(
  @Cedula VARCHAR(60)
)
AS
BEGIN
  IF EXISTS(SELECT 1 FROM Usuario WHERE @Cedula = Cedula)
  BEGIN
    SELECT Email, Cedula, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido
    FROM Usuario
    WHERE @Cedula = Cedula;
  END
  ELSE
  BEGIN
    SELECT CAST(0 AS BIT) AS EmailExists;
  END
END;

go
CREATE PROCEDURE GetPhone
(
  @Cedula VARCHAR(60)
)
AS
BEGIN
  SELECT Numero
  FROM Telefono
  WHERE @Cedula = Cedula
END;

/*---- Procedimientos para insertar USUARIOS ----*/
go
CREATE PROCEDURE InsertAdmin
    @Cedula VARCHAR(60),
    @Email VARCHAR(60),
    @PrimerNombre VARCHAR(60),
    @SegundoNombre VARCHAR(60),
    @PrimerApellido VARCHAR(60),
    @SegundoApellido VARCHAR(60),
    @Clave VARCHAR(100),
    @NombreRol VARCHAR(60)
AS
BEGIN
    -- Insert user into Usuario table
    INSERT INTO Usuario (Cedula, Email, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido)
    VALUES (@Cedula, @Email, @PrimerNombre, @SegundoNombre, @PrimerApellido, @SegundoApellido);

    -- Insert administrator entry in Administrador table
    INSERT INTO Administrador (Cedula, Clave)
    VALUES (@Cedula, @Clave);

    -- Assign role to the user in Autorizacion table
    INSERT INTO Autorizacion (CedulaAdmin, NombreRol)
    VALUES (@Cedula, @NombreRol);
END;

