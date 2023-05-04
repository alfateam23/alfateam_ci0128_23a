-- Refugio de Vida Silvestre Bahía Junquillal: Esquema de Base de Datos para SQL Server
-- AlphaTeam: Jason Murillo, Jose Pereira, Marco Piedra, Josué Retana, Ariel Solís
-- Proyecto Integrador de Ingeniería de Software y Bases de Datos
-- Escuela de Ciencias de la Computación e Informática, Universidad de Costa Rica
-- Abril 2023

USE AlphaTeam;

-- Usuarios generales.
-- Cédula es una identificación personal oficial. Incluye pasaporte y carnet de residente o refugiado.

CREATE TABLE Usuario
(
    Email VARCHAR(30),
    Cedula VARCHAR(30) UNIQUE,
    PrimerNombre VARCHAR(30) NOT NULL,
    SegundoNombre VARCHAR(30),
    PrimerApellido VARCHAR(30) NOT NULL,
    SegundoApellido VARCHAR(30)
    CONSTRAINT PK_Usuario PRIMARY KEY(Email)
);

-- Teléfonos de usuario.

CREATE TABLE Telefono
(
    Email VARCHAR(30),
    Numero VARCHAR(30),
    CONSTRAINT PK_Telefono PRIMARY KEY(Email, Numero),
    CONSTRAINT FK_Telefono_Usuario FOREIGN KEY(Email) REFERENCES Usuario(Email)
);

-- Administradores de la aplicación.
-- NUNCA guardar contraseñas en texto plano, sino solo el hash (e.g., con algoritmo Argon2).
-- En el inicio de sesión solo se valida si el hash de la clave ingresada coincide con el hash almacenado.
-- No borrar administradores, sino solo desactivarlos (i.e., borrado lógico) en la columna EstadoActivo.
-- Inicialmente el valor de EstadoActividad es activo.

CREATE TABLE Administrador
(
    Email VARCHAR(30),
    Clave VARCHAR(30) NOT NULL,
    EstadoActividad BIT DEFAULT(1) NOT NULL,
    CONSTRAINT PK_Administrador PRIMARY KEY(Email),
    CONSTRAINT FK_Administrador FOREIGN KEY(Email) REFERENCES Usuario(Email)
);

-- Roles de administradores.
-- Las combinaciones concretas de permisos, asociados a roles de administradores, se realizan en la aplicación.

CREATE TABLE Rol
(
    Nombre VARCHAR(30),

);
