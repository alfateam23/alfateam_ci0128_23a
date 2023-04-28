-- CI0128 G01 I-2023
-- Esquema de base de datos para Refugio de Vida Silvestre Bahía Junquillal
-- AlphaTeam: Jason Murillo, Jose Pereira, Marco Piedra, Josué Retana, Ariel Solís

use AlphaTeam;

-- Usuarios generales del sistema. Superclase de usuarios administradores y usuarios clientes que solicitan servicios.
-- Para propósitos de auditoría, no se debe eliminar usuarios administradores, sino marcarlos como inactivos.

CREATE TABLE Usuario(
  Id VARCHAR(30),
  Email VARCHAR(30) UNIQUE NOT NULL,
  PrimerNombre VARCHAR(30) NOT NULL,
  SegundoNombre VARCHAR(30),
  PrimerApellido VARCHAR(30) NOT NULL,
  SegundoApellido VARCHAR(30),
  CONSTRAINT PK_Usuario PRIMARY KEY(Id)
);

-- Teléfonos de usuarios generales.

CREATE TABLE Telefono(
  IdUsuario VARCHAR(30),
  Numero VARCHAR(30),
  CONSTRAINT PK_Telefono PRIMARY KEY(IdUsuario, Numero),
  CONSTRAINT FK_Telefono_Usuario FOREIGN KEY(IdUsuario) REFERENCES Usuario(Id) ON DELETE CASCADE
);

-- Usuarios administradores.
-- Para propósitos de auditoría, no se debe eliminar usuarios administradores, sino marcarlos como inactivos en EstadoActividad.
-- NUNCA se debe guardar claves directamente, sino solo el hash (e.g., Argon2).
-- En el inicio de sesión solo se valida si el hash de la clave ingresada coincide con el hash almacenado.

CREATE TABLE Administrador(
  Id VARCHAR(30),
  FechaIngreso DATETIME,
  FechaSalida DATETIME,
  Contrasena VARCHAR(30),
  EstadoActividad BIT DEFAULT 1 NOT NULL,
  CONSTRAINT PK_Administrador PRIMARY KEY(Id),
  CONSTRAINT FK_Administrador_Usuario FOREIGN KEY(Id) REFERENCES Usuario(Id) ON DELETE CASCADE,
  CHECK (FechaIngreso <= FechaSalida)
);

-- Tipo de entidad de negocio accesibles para usuarios administradores.
-- En HistorialAcceso, para propósitos de auditoría, un usuario administrador solo debería poder leer tuplas.
-- Los códigos son:
-- Usuario
-- Telefono
-- Administrador
-- Autorizacion
-- HistorialAcceso
-- Cliente
-- Vehículo
-- Parcela
-- ReservaParcela
-- Kayak
-- TarifaKayak
-- ViajeKayak
-- Sendero
-- RecorridoSendero
-- AreaPicnic
-- UsoAreaPicnic
-- TipoVisitante
-- TarifaVisitante
-- Visita
-- Cobro

CREATE TABLE TipoEntidad(
  Codigo VARCHAR(30),
  CONSTRAINT PK_TipoEntidad PRIMARY KEY(Codigo)
);

-- Tipo de permiso sobre entidad de negocio.
-- Los códigos son:
-- C (create)
-- R (read)
-- U (update)
-- D (delete)

CREATE TABLE TipoPermiso(
  Codigo CHAR,
  CONSTRAINT PK_TipoPermiso PRIMARY KEY(Codigo)
);

-- Combinaciones de permisos sobre entidades del sistema, que fueron autorizadas a cada usuario administrador.

CREATE TABLE Autorizacion(
  IdAdministrador VARCHAR(30),
  CodigoTipoEntidad VARCHAR(30),
  CodigoTipoPermiso CHAR,
  CONSTRAINT PK_Autorizacion PRIMARY KEY(IdAdministrador, CodigoTipoEntidad, CodigoTipoPermiso),
  CONSTRAINT FK_Autorizacion_Administrador FOREIGN KEY(IdAdministrador) REFERENCES Administrador(Id) ON DELETE CASCADE,
  CONSTRAINT FK_Autorizacion_TipoEntidad FOREIGN KEY(CodigoTipoEntidad) REFERENCES TipoEntidad(Codigo) ON DELETE CASCADE,
  CONSTRAINT FK_Autorizacion_TipoPermiso FOREIGN KEY(CodigoTipoPermiso) REFERENCES TipoPermiso(Codigo) ON DELETE CASCADE
);

-- Bitácora de utilización de permisos sobre entidades del sistema, según usuario administrador y fecha y hora.
-- Permite trazabilidad de acciones en el sistema.

CREATE TABLE HistorialAcceso(
  IdAdministrador VARCHAR(30),
  CodigoTipoEntidad VARCHAR(30),
  CodigoTipoPermiso CHAR,
  Fecha DATETIME,
  CONSTRAINT PK_HistorialAcceso PRIMARY KEY(IdAdministrador, CodigoTipoEntidad, CodigoTipoPermiso, Fecha),
  CONSTRAINT FK_HistorialAcceso_Administrador FOREIGN KEY(IdAdministrador) REFERENCES Administrador(Id) ON DELETE NO ACTION,
  CONSTRAINT FK_HistorialAcceso_TipoEntidad FOREIGN KEY(CodigoTipoEntidad) REFERENCES TipoEntidad(Codigo) ON DELETE NO ACTION,
  CONSTRAINT FK_HistorialAcceso_TipoPermiso FOREIGN KEY(CodigoTipoPermiso) REFERENCES TipoPermiso(Codigo) ON DELETE NO ACTION
);

-- Usuarios cliente, que utilizan servicios y tienen cobros asociados.

CREATE TABLE Cliente(
  Id VARCHAR(30),
  CONSTRAINT PK_Cliente PRIMARY KEY(Id),
  CONSTRAINT FK_Cliente_Usuario FOREIGN KEY(Id) REFERENCES Usuario(Id) ON DELETE CASCADE
);

-- Vehículos de usuarios cliente, identificados por placa.

CREATE TABLE Vehiculo(
  IdCliente VARCHAR(30),
  Placa VARCHAR(30),
  CONSTRAINT PK_Vehiculo PRIMARY KEY(IdCliente, Placa),
  CONSTRAINT FK_Vehiculo_Cliente FOREIGN KEY(IdCliente) REFERENCES Cliente(Id) ON DELETE CASCADE
);

-- Parcelas numeradas, que corresponden a espacios físicos específicos en el refugio. Cada una cuenta con capacidad máxima.

CREATE TABLE Parcela(
  Numero INT,
  Capacidad INT,
  CONSTRAINT PK_Parcela PRIMARY KEY(Numero),
  CHECK (Capacidad >= 0)
);

-- Reservas de parcelas numeradas para clientes en rangos de fechas.

CREATE TABLE ReservaParcela(
  IdCliente VARCHAR(30),
  NumeroParcela INT,
  FechaInicio DATETIME,
  FechaFin DATETIME,
  FechaSolicitud DATETIME NOT NULL,
  CONSTRAINT PK_ReservaParcela PRIMARY KEY(IdCliente, NumeroParcela, FechaInicio, FechaFin),
  CONSTRAINT FK_ReservaParcela_Cliente FOREIGN KEY(IdCliente) REFERENCES Cliente(Id) ON DELETE CASCADE,
  CONSTRAINT FK_ReservaParcela_Parcela FOREIGN KEY(NumeroParcela) REFERENCES Parcela(Numero) ON DELETE CASCADE,
  CHECK (FechaSolicitud <= FechaInicio),
  CHECK (FechaInicio <= FechaFin)
);

-- Unidades numeradas de kayak, cada uno con capacidad máxima.

CREATE TABLE Kayak(
  Numero INT,
  Capacidad INT,
  CONSTRAINT PK_Kayak PRIMARY KEY(Numero),
  CHECK (Capacidad >= 0)
);

-- Tarifas de kayak por sesión de uso (e.g., 30 minutos).
-- Código de moneda según estándar ISO 4217. Por ejemplo, CRC (colones costarricenses), USD (dólares estadounidenses).

CREATE TABLE TarifaKayak(
  NumeroKayak INT,
  Monto MONEY,
  Moneda CHAR(3) NOT NULL,
  CONSTRAINT PK_TarifaKayak PRIMARY KEY(NumeroKayak),
  CONSTRAINT FK_TarifaKayak_Kayak FOREIGN KEY(NumeroKayak) REFERENCES Kayak(Numero) ON DELETE CASCADE,
  CHECK (Monto >= 0)
);

-- Viajes en kayak de los usuarios clientes.
-- El tiempo de uso es en minutos.

CREATE TABLE ViajeKayak(
  IdCliente VARCHAR(30),
  NumeroKayak INT,
  Fecha DATETIME,
  TiempoUso INT,
  CONSTRAINT PK_ViajeKayak PRIMARY KEY(IdCliente, NumeroKayak, Fecha),
  CONSTRAINT FK_ViajeKayak_Cliente FOREIGN KEY(IdCliente) REFERENCES Cliente(Id) ON DELETE CASCADE,
  CONSTRAINT FK_ViajeKayak_Kayak FOREIGN KEY(NumeroKayak) REFERENCES Kayak(Numero) ON DELETE CASCADE,
  CHECK (TiempoUso >= 0)
);

-- Senderos disponibles en el refugio.
-- Los nombres son:
-- Carao
-- Estero Seco
-- Laguna

CREATE TABLE Sendero(
  Nombre VARCHAR(30),
  CONSTRAINT PK_Sendero PRIMARY KEY(Nombre)
);

-- Recorridos de los usuarios cliente por los senderos.

CREATE TABLE RecorridoSendero(
  IdCliente VARCHAR(30),
  NombreSendero VARCHAR(30),
  Fecha DATETIME,
  CONSTRAINT PK_RecorridoSendero PRIMARY KEY(IdCliente, NombreSendero, Fecha),
  CONSTRAINT FK_RecorridoSendero_Cliente FOREIGN KEY(IdCliente) REFERENCES Cliente(Id) ON DELETE CASCADE,
  CONSTRAINT FK_RecorridoSendero_Sendero FOREIGN KEY(NombreSendero) REFERENCES Sendero(Nombre) ON DELETE CASCADE,
);

-- Áreas numeradas de picnic.

CREATE TABLE AreaPicnic(
  Numero INT,
  Capacidad INT,
  CONSTRAINT PK_AreaPicnic PRIMARY KEY(Numero),
  CHECK (Capacidad >= 0)
);

-- Sesiones de uso de áreas de picnic por parte de usuarios cliente.

CREATE TABLE UsoAreaPicnic(
  IdCliente VARCHAR(30),
  NumeroAreaPicnic INT,
  Fecha DATETIME,
  CONSTRAINT PK_UsoAreaPicnic PRIMARY KEY(IdCliente, NumeroAreaPicnic, Fecha),
  CONSTRAINT FK_UsoAreaPicnic_Cliente FOREIGN KEY(IdCliente) REFERENCES Cliente(Id) ON DELETE CASCADE,
  CONSTRAINT FK_UsoAreaPicnic_AreaPicnic FOREIGN KEY(NumeroAreaPicnic) REFERENCES AreaPicnic(Numero) ON DELETE CASCADE,
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

CREATE TABLE TipoVisitante(
  Procedencia VARCHAR(30),
  CategoriaPago VARCHAR(30),
  Estatus VARCHAR(30),
  CONSTRAINT PK_TipoVisitante PRIMARY KEY(Procedencia, CategoriaPago, Estatus)
);

-- Tarifas por tipos de visitantes.

CREATE TABLE TarifaVisitante(
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

CREATE TABLE Visita(
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

CREATE TABLE Cobro(
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