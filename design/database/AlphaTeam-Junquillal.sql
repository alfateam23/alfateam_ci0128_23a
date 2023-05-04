-- CI0128 G01 I-2023
-- Esquema de base de datos para Refugio de Vida Silvestre Bahía Junquillal
-- AlphaTeam: Jason Murillo, Jose Pereira, Marco Piedra, Josué Retana, Ariel Solís

use AlphaTeam;

-- Usuarios generales del sistema. Superclase de usuarios administradores y de usuarios clientes que solicitan servicios.

CREATE TABLE Usuario
(
  Email VARCHAR(30),
  Cedula VARCHAR(30) UNIQUE NOT NULL,
  PrimerNombre VARCHAR(30) NOT NULL,
  SegundoNombre VARCHAR(30),
  PrimerApellido VARCHAR(30) NOT NULL,
  SegundoApellido VARCHAR(30),
  CONSTRAINT PK_Usuario PRIMARY KEY(Email)
);

-- Teléfonos de usuarios.

CREATE TABLE Telefono
(
  EmailUsuario VARCHAR(30),
  NumeroTelefono VARCHAR(30),
  CONSTRAINT PK_Telefono PRIMARY KEY(EmailUsuario, NumeroTelefono),
  CONSTRAINT FK_Telefono_Usuario FOREIGN KEY(EmailUsuario) REFERENCES Usuario(Email) ON DELETE CASCADE
);

-- Administradores del sistema.
-- No se debe eliminar administradores, sino marcarlos como inactivos en EstadoActividad.
-- NUNCA se debe guardar claves en texto plano, sino solo el hash (e.g., Argon2).
-- En el inicio de sesión solo se valida si el hash de la clave ingresada coincide con el hash almacenado.
-- Email se utiliza como nombre de usuario para inicio de sesión.

CREATE TABLE Administrador
(
  Email VARCHAR(30),
  FechaIngreso DATETIME,
  FechaSalida DATETIME,
  Contrasena VARCHAR(30) NOT NULL,
  EstadoActividad BIT DEFAULT 1 NOT NULL,
  CONSTRAINT PK_Administrador PRIMARY KEY(Email),
  CONSTRAINT FK_Administrador_Usuario FOREIGN KEY(Email) REFERENCES Usuario(Email) ON DELETE CASCADE,
  CHECK (FechaIngreso <= FechaSalida)
);

-- Roles de administradores.
-- Las combinaciones concretas de permisos asociados a roles (e.g., modificación de reservas) se realizan en aplicación.

CREATE TABLE Rol
(
  Nombre VARCHAR(30),
  CONSTRAINT PK_Rol PRIMARY KEY(Nombre)
);

-- Autorización de administradores mediante roles.
-- En aplicación se validan las acciones de administradores contra el rol para el que tengan autorización.

CREATE TABLE Autorizacion
(
  EmailAdmin VARCHAR(30),
  NombreRol VARCHAR(30),
  CONSTRAINT PK_Autorizacion PRIMARY KEY(EmailAdmin, NombreRol),
  CONSTRAINT FK_Autorizacion_Administrador FOREIGN KEY(EmailAdmin) REFERENCES Administrador(Email) ON DELETE CASCADE,
  CONSTRAINT FK_Autorizacion_Rol FOREIGN KEY(NombreRol) REFERENCES Rol(Nombre) ON DELETE CASCADE
);

-- Clientes que realizan reservaciones.

CREATE TABLE Cliente
(
  Email VARCHAR(30),
  CONSTRAINT PK_Cliente PRIMARY KEY(Email),
  CONSTRAINT FK_Cliente_Usuario FOREIGN KEY(Email) REFERENCES Usuario(Email) ON DELETE CASCADE
);

-- Vehículos de clientes.

CREATE TABLE Vehiculo
(
  EmailCliente VARCHAR(30),
  Placa VARCHAR(30),
  CONSTRAINT PK_Vehiculo PRIMARY KEY(EmailCliente, Placa),
  CONSTRAINT FK_Vehiculo_Cliente FOREIGN KEY(EmailCliente) REFERENCES Cliente(Email) ON DELETE CASCADE
);

CREATE TABLE Reservacion
(
  Codigo INT,
  EmailCliente VARCHAR(30),

);













-- Parcelas numeradas, que corresponden a espacios físicos específicos en el refugio. Cada una cuenta con capacidad máxima.

CREATE TABLE Parcela
(
  Numero INT,
  Capacidad INT,
  CONSTRAINT PK_Parcela PRIMARY KEY(Numero),
  CHECK (Capacidad >= 0)
);

-- Reservas de parcelas numeradas para clientes en rangos de fechas.

CREATE TABLE ReservaParcela
(
  EmailCliente VARCHAR(30),
  NumeroParcela INT,
  FechaInicio DATETIME,
  FechaFin DATETIME,
  FechaSolicitud DATETIME NOT NULL,
  CONSTRAINT PK_ReservaParcela PRIMARY KEY(EmailCliente, NumeroParcela, FechaInicio, FechaFin),
  CONSTRAINT FK_ReservaParcela_Cliente FOREIGN KEY(EmailCliente) REFERENCES Cliente(Email) ON DELETE CASCADE,
  CONSTRAINT FK_ReservaParcela_Parcela FOREIGN KEY(NumeroParcela) REFERENCES Parcela(Numero) ON DELETE CASCADE,
  CHECK (FechaSolicitud <= FechaInicio),
  CHECK (FechaInicio <= FechaFin)
);




-- Tipos de visitante, según clasificación de SEMEC (Sistema de Evaluación del Mejoramiento Continuo de la Calidad)
-- del SINAC (Sistema Nacional de Áreas de Conservación).

-- Procedencia es provincia de Costa Rica o país (sin incluir Costa Rica).

-- Categoría de pago es:
-- No exonerado
-- Prepagado
-- Exonerado

-- Estatus es:
-- Tarifa regular
-- Niño Regular
-- Estudiantes
-- Niño exonerados
-- Adulto Mayor
-- Miercoles de cortesía
-- Por resolución
-- Sin mecanismo de cobro
-- Otros

CREATE TABLE TipoVisitante
(
  Procedencia VARCHAR(30),
  CategoriaPago VARCHAR(30),
  Estatus VARCHAR(30),
  CONSTRAINT PK_TipoVisitante PRIMARY KEY(Procedencia, CategoriaPago, Estatus)
);

-- Tarifas por tipos de visitantes.

CREATE TABLE TarifaVisitante
(
  Procedencia VARCHAR(30),
  CategoriaPago VARCHAR(30),
  Estatus VARCHAR(30),
  Monto MONEY,
  Moneda CHAR(3) NOT NULL,
  CONSTRAINT PK_TarifaVisitante PRIMARY KEY(Procedencia, CategoriaPago, Estatus),
  CONSTRAINT FK_TarifaVisitante_TipoVisitante FOREIGN KEY(Procedencia, CategoriaPago, Estatus)
    REFERENCES TipoVisitante(Procedencia, CategoriaPago, Estatus) ON DELETE CASCADE,
  CHECK (Monto >= 0)
);

-- Visitas específicas por tipos de visitantes.
-- Además de cobros, permite generar reportes de cantidades por cada tipo de visitante.

CREATE TABLE Visita
(
  Procedencia VARCHAR(30),
  CategoriaPago VARCHAR(30),
  Estatus VARCHAR(30),
  Numero INT,
  CONSTRAINT PK_Visita PRIMARY KEY(Procedencia, CategoriaPago, Estatus, Numero),
  CONSTRAINT FK_Visita_TipoVisitante FOREIGN KEY(Procedencia, CategoriaPago, Estatus)
    REFERENCES TipoVisitante(Procedencia, CategoriaPago, Estatus) ON DELETE CASCADE
);

-- Cobros de sesiones de uso de servicios, por parte de usuarios cliente.
-- Los pagos se realizan de forma externa al sistema. El sistema permite llevar control de pagos realizados y pendientes.
-- TipoCambio guarda el tipo de cambio de la moneda indicada, con respecto al colón, en el día que se generó el cobro.

CREATE TABLE Cobro
(
  Codigo INT,
  IdCliente VARCHAR(30),
  Monto MONEY,
  Moneda CHAR(3) NOT NULL,
  TipoCambio MONEY,
  Fecha DATETIME,
  EstadoPago BIT DEFAULT(0) NOT NULL,
  CONSTRAINT PK_Cobro PRIMARY KEY(Codigo),
  CONSTRAINT FK_Cobro_Cliente FOREIGN KEY(IdCliente) REFERENCES Cliente(Id) ON DELETE CASCADE,
  CHECK (Monto >= 0),
  CHECK (TipoCambio >= 0)
);


-- -- Procedimientos almacenados

-- CREATE PROCEDURE Cobro.convertirAColones(
--   @CodigoCobro VARCHAR(30),
--   @MontoConvertido MONEY OUTPUT
-- )
-- AS
-- BEGIN
--   SELECT @MontoConvertido = (CASE Moneda WHEN 'CRC' THEN Monto ELSE Monto * TipoCambio END) FROM Cobro WHERE Codigo = @CodigoCobro;
-- END;
