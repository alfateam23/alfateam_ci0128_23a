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
  EstadoActividad BIT DEFAULT(1) NOT NULL,
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

-- Reservación genérica

CREATE TABLE Reservacion
(
  Codigo INT,
  Email VARCHAR(60) NOT NULL,
  FechaSolicitud DATETIME NOT NULL,
  CONSTRAINT PK_Reservacion PRIMARY KEY(Codigo),
  CONSTRAINT FK_Reservacion_Cliente FOREIGN KEY(Email)
  REFERENCES Cliente(Email) ON UPDATE CASCADE
);

-- Reservación de parcela

CREATE TABLE ReservacionParcela
(
  Codigo INT,
  FechaInicio DATETIME NOT NULL,
  FechaFin DATETIME NOT NULL,
  CONSTRAINT PK_ReservacionParcela PRIMARY KEY(Codigo),
  CONSTRAINT FK_ReservacionParcela_Reservacion FOREIGN KEY(Codigo)
  REFERENCES Reservacion(Codigo),
  CHECK (FechaInicio <= FechaFin)
);

-- Parcela

CREATE TABLE Parcela
(
  Numero INT,
  Cupo INT NOT NULL,
  CONSTRAINT PK_Parcela PRIMARY KEY(Numero),
  CHECK (Cupo >= 0)
);

-- Asociacion entre reservación de parcela y parcela

CREATE TABLE AsociacionParcela
(
  CodigoReservacion INT,
  NumeroParcela INT,
  CONSTRAINT PK_AsociacionParcela PRIMARY KEY(CodigoReservacion, NumeroParcela),
  CONSTRAINT FK_AsociacionParcela_ReservacionParcela FOREIGN KEY(CodigoReservacion)
  REFERENCES ReservacionParcela(Codigo),
  CONSTRAINT FK_AsociacionParcela_Parcela FOREIGN KEY(NumeroParcela)
  REFERENCES Parcela(Numero)
);

-- Reservación de servicio
-- Tiempo es el uso del servicio (e.g., kayak) en minutos, durante una reservación de servicio.

CREATE TABLE ReservacionServicio
(
  Codigo INT,
  Tiempo INT NOT NULL,
  CONSTRAINT PK_ReservacionServicio PRIMARY KEY(Codigo),
  CONSTRAINT FK_ReservacionServicio_Reservacion FOREIGN KEY(Codigo)
  REFERENCES Reservacion(Codigo),
  CHECK (Tiempo >= 0)
);

-- Servicio
-- Monto de tarifa en un servicio aplica solo si es independiente de tipo de visitante (e.g., kayak).
-- El cobro se realiza según tiempo de uso del servicio.
-- La moneda es según estándar ISO 4217: CRC (colones costarricenses), USD (dólares estadounidenses).

CREATE TABLE Servicio
(
  Nombre VARCHAR(60),
  Cupo INT NOT NULL,
  Monto MONEY NOT NULL,
  Moneda CHAR(3) NOT NULL,
  CONSTRAINT PK_Servicio PRIMARY KEY(Nombre),
  CHECK (Cupo >= 0),
  CHECK (Monto >= 0)
);

-- Asociación entre reservación de servicio y servicio

CREATE TABLE AsociacionServicio
(
  CodigoReservacion INT,
  NombreServicio VARCHAR(60),
  CONSTRAINT PK_AsociacionServicio PRIMARY KEY(CodigoReservacion, NombreServicio),
  CONSTRAINT FK_AsociacionServicio_ReservacionServicio FOREIGN KEY(CodigoReservacion)
  REFERENCES ReservacionServicio(Codigo),
  CONSTRAINT FK_AsociacionServicio_Servicio FOREIGN KEY(NombreServicio)
  REFERENCES Servicio(Nombre)
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

CREATE TABLE UsoReservacion
(
  CodigoReservacion INT,
  TipoProcedencia CHAR,
  TipoVisita CHAR,
  Estatus CHAR,
  Procedencia VARCHAR(60) NOT NULL,
  CategoriaPago CHAR NOT NULL,
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
