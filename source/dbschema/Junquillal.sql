-- Refugio de Vida Silvestre Bahía Junquillal: Esquema de Base de Datos en SQL Server
-- AlphaTeam: Jason Murillo, Jose Pereira, Marco Piedra, Josué Retana, Ariel Solís
-- Proyecto Integrador de Ingeniería de Software y Bases de Datos
-- Escuela de Ciencias de la Computación e Informática, Universidad de Costa Rica

use AlphaTeam_Testing;

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
-- NUNCA guardar contraseñas en texto plano, sino solo el hash (e.g., con algoritmo bcrypt).
-- En el inicio de sesión solo se valida si el hash de la clave ingresada coincide con el hash almacenado.
-- No borrar administradores, sino solo desactivarlos (i.e., borrado lógico) en la columna EstadoActivo.
-- Inicialmente el valor de EstadoActividad es activo.

CREATE TABLE Administrador
(
  Email VARCHAR(60),
  Clave VARCHAR(100) NOT NULL,
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

-- Tipo de área, puede ser picnic o camping
-- C Camping, P picnic

CREATE TABLE Area
(
  Tipo CHAR,
  CupoTotal INT NOT NULL,
  CupoOnline INT NOT NULL,
  Plazo INT NOT NULL,
  HoraApertura TIME NOT NULL,
  HoraCierre TIME NOT NULL
  CONSTRAINT PK_Area PRIMARY KEY(Tipo),
);

-- País asociado a reservación

CREATE TABLE Pais
(
  Nombre VARCHAR(60),
  CONSTRAINT PK_Pais PRIMARY KEY(Nombre),
);


-- Provincia de Costa Rica
-- Alajuela, Cartago, Heredia, San José, Puntarenas, Guanacaste, Limón

CREATE TABLE ProvinciaCRC
(
  Nombre VARCHAR(60),
  CONSTRAINT PK_Provincia PRIMARY KEY (Nombre),
);

-- Dia inactivo, día que el refugio no trabaja

CREATE TABLE DiaInactivo
(
  TipoArea CHAR,
  Fecha DATETIME,
  CONSTRAINT PK_DiaInactivo PRIMARY KEY(TipoArea, Fecha),
  CONSTRAINT FK_DiaInactivo_Area FOREIGN KEY(TipoArea)
  REFERENCES Area(Tipo)
);

-- Límite diario de visitantes

CREATE TABLE LimiteVisitantes
(
  TipoArea CHAR,
  Fecha DATETIME,
  CupoTotalDia INT NOT NULL,
  CupoOnlineDia INT NOT NULL,
  CONSTRAINT PK_LimiteVisitantes PRIMARY KEY(TipoArea, Fecha),
  CONSTRAINT FK_LimiteVisitantes_Area FOREIGN KEY(TipoArea)
  REFERENCES Area(Tipo),
  CHECK (CupoTotalDia>0),
  CHECK (CupoOnlineDia>0)
);

-- Reservación genérica
-- C Camping, P picnic

CREATE TABLE Reservacion
(
  Codigo INT,
  Email VARCHAR(60) NOT NULL,
  TipoArea CHAR NOT NULL,
  FechaSolicitud DATETIME NOT NULL,
  FechaInicio DATETIME NOT NULL,
  FechaFin DATETIME NOT NULL,
  EstadoActividad BIT DEFAULT (1) NOT NULL,
  NombrePais VARCHAR(60),
  NombreProvincia VARCHAR(60),
  CONSTRAINT PK_Reservacion PRIMARY KEY(Codigo),
  CONSTRAINT FK_Reservacion_Cliente FOREIGN KEY(Email)
  REFERENCES Cliente(Email) ON UPDATE CASCADE,
  CONSTRAINT FK_Reservacion_Area FOREIGN KEY(TipoArea)
  REFERENCES Area(Tipo),
  CONSTRAINT FK_Reservacion_Pais FOREIGN KEY(NombrePais)
  REFERENCES Pais(Nombre),
  CONSTRAINT FK_Reservacion_Provincia FOREIGN KEY(NombreProvincia)
  REFERENCES ProvinciaCRC(Nombre),
  CHECK (FechaSolicitud <= FechaInicio),
  CHECK (FechaInicio <= FechaFin)
);

-- Vehículo de reservación

CREATE TABLE Vehiculo
(
  CodigoReservacion INT,
  Placa VARCHAR(60),
  CONSTRAINT PK_Vehiculo PRIMARY KEY(CodigoReservacion, Placa),
  CONSTRAINT FK_Vehiculo_Reservacion FOREIGN KEY(CodigoReservacion)
  REFERENCES Reservacion(Codigo)
);

-- Tipo de visitante
-- Monto de tarifa según la combinación de tipo de procedencia (nacional o extranjero), tipo de visita (camping o picnic)
-- y estatus (adulto regular, adulto mayor, etc.), con base en la plantilla de SEMEC.

CREATE TABLE TipoVisitante
(
  TipoProcedencia VARCHAR(60),
  TipoVisita VARCHAR(60),
  Estatus VARCHAR(60),
  CategoriaPago VARCHAR(60),
  Monto MONEY NOT NULL,
  Moneda CHAR(3) NOT NULL,
  CONSTRAINT PK_TipoVisitante PRIMARY KEY(TipoProcedencia, TipoVisita, Estatus, CategoriaPago)
);

-- Uso de reservación
-- Procedencia es la provincia de Costa Rica para nacionales o el nombre de país para extranjeros.
-- Categoría de pago es no exonerado, prepago, o exonerado.
-- Consecutivo se obtene de la secuencia correspondiente al código (e.g., ConsecutivoNPA para nacional, picnic, adulto regular)
-- La lista completa de códigos posibles se encuentra en el diccionario de datos (README.md)

CREATE TABLE Visitante
(
  CodigoReservacion INT,
  TipoProcedencia VARCHAR(60),
  TipoVisita VARCHAR(60),
  Estatus VARCHAR(60),
  CategoriaPago VARCHAR(60),
  CantidadVisitantes INT NOT NULL,
  CONSTRAINT PK_Visitante PRIMARY KEY(CodigoReservacion, TipoProcedencia, TipoVisita, Estatus, CategoriaPago),
  CONSTRAINT FK_Visitante_Reservacion FOREIGN KEY(CodigoReservacion)
  REFERENCES Reservacion(Codigo),
  CONSTRAINT FK_Visitante_TipoVisitante FOREIGN KEY(TipoProcedencia, TipoVisita, Estatus, CategoriaPago)
  REFERENCES TipoVisitante(TipoProcedencia, TipoVisita, Estatus, CategoriaPago)
);

-- Factura
-- Se registra si el cobro de la factura está pendiente o ya fue pagado. Se inicializa en falso.
-- El monto se calcula con base en características de visitantes (tipo de procedencia, tipo de visita, estatus, categoría de pago).
-- Si aplica, se incluyen servicios independientes de características de visitantes, según tiempo de uso.

CREATE TABLE Factura
(
  CodigoFactura INT,
  CodigoReservacion INT NOT NULL,
  EstadoPago BIT DEFAULT(0) NOT NULL,
  FechaFactura DATETIME NOT NULL,
  Monto MONEY NOT NULL,
  Moneda CHAR(3) NOT NULL,
  CONSTRAINT PK_Factura PRIMARY KEY(CodigoFactura),
  CONSTRAINT FK_Factura_Reservacion FOREIGN KEY(CodigoReservacion)
  REFERENCES Reservacion(Codigo)
);
