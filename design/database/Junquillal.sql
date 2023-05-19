-- Refugio de Vida Silvestre Bahía Junquillal: Esquema de Base de Datos en SQL Server
-- AlphaTeam: Jason Murillo, Jose Pereira, Marco Piedra, Josué Retana, Ariel Solís
-- Proyecto Integrador de Ingeniería de Software y Bases de Datos
-- Escuela de Ciencias de la Computación e Informática, Universidad de Costa Rica
-- Abril 2023

use AlphaTeam;

-- Usuario genérico
-- Cédula es una identificación personal oficial. Incluye pasaporte y carnet de residente o refugiado.

CREATE TABLE Usuario
(
  Email VARCHAR(60),
  Cedula VARCHAR(60) NOT NULL UNIQUE,
  PrimerNombre VARCHAR(60) NOT NULL,
  SegundoNombre VARCHAR(60),
  PrimerApellido VARCHAR(60) NOT NULL,
  SegundoApellido VARCHAR(60),
  EstadoActividad BIT DEFAULT (1) NOT NULL,
  CONSTRAINT PK_Usuario PRIMARY KEY(Email)
);

-- Teléfono de usuario.

CREATE TABLE Telefono
(
  Email VARCHAR(60),
  Numero VARCHAR(60),
  CONSTRAINT PK_Telefono PRIMARY KEY(Email, Numero),
  CONSTRAINT FK_Telefono_Usuario FOREIGN KEY(Email)
  REFERENCES Usuario(Email) ON UPDATE CASCADE
);

-- Administrador de la aplicación
-- NUNCA guardar contraseñas en texto plano, sino solo el hash (e.g., con algoritmo Argon2).
-- En el inicio de sesión solo se valida si el hash de la clave ingresada coincide con el hash almacenado.
-- No borrar administradores, sino solo desactivarlos (i.e., borrado lógico) en la columna EstadoActivo.
-- Inicialmente el valor de EstadoActividad es activo.

CREATE TABLE Administrador
(
  Email VARCHAR(60),
  Clave VARCHAR(60) NOT NULL,
  CONSTRAINT PK_Administrador PRIMARY KEY(Email),
  CONSTRAINT FK_Administrador_Usuario FOREIGN KEY(Email)
  REFERENCES Usuario(Email) ON UPDATE CASCADE
);

-- Rol de administrador
-- Las combinaciones concretas de permisos, asociados a roles de administradores, se realizan en la aplicación.

CREATE TABLE Rol
(
  Nombre VARCHAR(60),
  CONSTRAINT PK_Rol PRIMARY KEY(Nombre)
);

-- Autorización de administrador
-- La validación de acciones de administradores, con respecto a roles autorizados, se realiza en la aplicación.

CREATE TABLE Autorizacion
(
  EmailAdmin VARCHAR(60),
  NombreRol VARCHAR(60),
  CONSTRAINT PK_Autorizacion PRIMARY KEY(EmailAdmin, NombreRol),
  CONSTRAINT FK_Autorizacion_Administrador FOREIGN KEY(EmailAdmin)
  REFERENCES Administrador(Email) ON UPDATE CASCADE,
  CONSTRAINT FK_Autorizacion_Rol FOREIGN KEY(NombreRol)
  REFERENCES Rol(Nombre)
);

-- Cliente que solicita reservación

CREATE TABLE Cliente
(
  Email VARCHAR(60),
  CONSTRAINT PK_Cliente PRIMARY KEY(Email),
  CONSTRAINT FK_Cliente_Usuario FOREIGN KEY(Email)
  REFERENCES Usuario(Email) ON UPDATE CASCADE
);

-- Vehículo de cliente

CREATE TABLE Vehiculo
(
  EmailCliente VARCHAR(60),
  Placa VARCHAR(60),
  CONSTRAINT PK_Vehiculo PRIMARY KEY(EmailCliente, Placa),
  CONSTRAINT FK_Vehiculo_Cliente FOREIGN KEY(EmailCliente)
  REFERENCES Cliente(Email) ON UPDATE CASCADE
);

--Tipo de área, puede ser picnic o camping

CREATE TABLE Area
(
  Tipo BIT DEFAULT (1), -- 0 Camping, 1 picnic
  Cupo INT NOT NULL,
  Plazo SMALLINT NOT NULL,
  HoraApertura TIME NOT NULL,
  HoraCierre TIME NOT NULL
  CONSTRAINT PK_Area PRIMARY KEY(Tipo)
);

-- Reservación genérica

CREATE TABLE Reservacion
(
  Codigo INT,
  Email VARCHAR(60) NOT NULL,
  TipoArea BIT DEFAULT (1) NOT NULL, -- 0 Camping, 1 picnic
  FechaSolicitud DATETIME NOT NULL,
  CONSTRAINT PK_Reservacion PRIMARY KEY(Codigo),
  CONSTRAINT FK_Reservacion_Cliente FOREIGN KEY(Email)
  REFERENCES Cliente(Email) ON UPDATE CASCADE,
  CONSTRAINT FK_Tipo_Area FOREIGN KEY(TipoArea)
  REFERENCES Area(Tipo) ON UPDATE CASCADE
);

-- Dia inactivo, día que el refugio no trabaja

CREATE TABLE DiaInactivo
(
  TipoArea BIT DEFAULT (1),
  Fecha DATETIME,
  CONSTRAINT FK_DiaInactivo PRIMARY KEY(TipoArea, Fecha)
);

-- Tipo de visitante
-- Monto de tarifa según la combinación de tipo de procedencia (nacional o extranjero), tipo de visita (camping o picnic)
-- y estatus (adulto regular, adulto mayor, etc.), con base en la plantilla de SEMEC.

CREATE TABLE TipoVisitante
(
  TipoProcedencia CHAR,
  TipoVisita CHAR,
  Estatus CHAR,
  Monto MONEY NOT NULL,
  Moneda CHAR(3) NOT NULL,
  CONSTRAINT PK_TipoVisitante PRIMARY KEY(TipoProcedencia, TipoVisita, Estatus),
  CHECK (Monto >= 0)
);

-- Uso de reservación
-- Procedencia es la provincia de Costa Rica para nacionales o el nombre de país para extranjeros.
-- Categoría de pago es no exonerado, prepago, o exonerado.
-- Consecutivo se obtene de la secuencia correspondiente al código (e.g., ConsecutivoNPA para nacional, picnic, adulto regular)
-- La lista completa de códigos posibles se encuentra en el diccionario de datos (README.md)

CREATE TABLE Visitante
(
  CodigoReservacion INT,
  TipoProcedencia CHAR,
  TipoVisita CHAR,
  Estatus CHAR,
  Procedencia VARCHAR(60) NOT NULL,
  CategoriaPago CHAR NOT NULL,
  Consecutivo INT,
  CONSTRAINT PK_UsoReservacion PRIMARY KEY(CodigoReservacion, TipoProcedencia, TipoVisita, Estatus),
  CONSTRAINT FK_UsoReservacion_Reservacion FOREIGN KEY(CodigoReservacion)
  REFERENCES Reservacion(Codigo),
  CONSTRAINT FK_UsoReservacion_TipoVisitante FOREIGN KEY(TipoProcedencia, TipoVisita, Estatus)
  REFERENCES TipoVisitante(TipoProcedencia, TipoVisita, Estatus)
);

-- Factura
-- Se registra si el cobro de la factura está pendiente o ya fue pagado. Se inicializa en falso.
-- El monto se calcula con base en características de visitantes (tipo de procedencia, tipo de visita, estatus, categoría de pago).
-- Si aplica, se incluyen servicios independientes de características de visitantes, según tiempo de uso.

CREATE TABLE Factura
(
  Codigo INT,
  CodigoReservacion INT NOT NULL,
  EstadoPago BIT DEFAULT(0) NOT NULL,
  FechaFactura DATETIME NOT NULL,
  Monto MONEY NOT NULL,
  Moneda CHAR(3) NOT NULL,
  CONSTRAINT PK_Factura PRIMARY KEY(Codigo),
  CONSTRAINT FK_Factura_Reservacion FOREIGN KEY(CodigoReservacion)
  REFERENCES Reservacion(Codigo),
  CHECK(Monto >= 0)
);

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

-- Consecutivos para los visitantes y las reservas.

CREATE SEQUENCE ConsecutivoReserva
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNCA
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNCB
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNCC
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNCD
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNCE
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNCF
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNCG
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNCH
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNCI
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNPA
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNPB
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNPC
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNPD
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNPE
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNPF
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNPG
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNPH
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoNPI
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoECA
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoECB
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoECC
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoECD
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoECE
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoECF
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoECG
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoECH
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoECI
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoEPA
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoEPB
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoEPC
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoEPD
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoEPE
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoEPF
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoEPG
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoEPH
  START WITH 1
  INCREMENT BY 1;
GO

CREATE SEQUENCE ConsecutivoEPI
  START WITH 1
  INCREMENT BY 1;
GO
