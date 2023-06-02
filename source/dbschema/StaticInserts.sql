use AlphaTeam_Testing;
-- Agregar los tipos de area.

-- Insertar los roles posibles

/*
Picnic Cupo 100, en línea 70, 3 días de plazo antes de que comience
la reserva para pagar,
Hora de apertura 6am, Cierre 8pm
*/
INSERT INTO Area (Tipo, CupoTotal, CupoOnline, Plazo, HoraApertura, HoraCierre)
VALUES ('P', 100, 70, 3, '06:00:00', '20:00:00');

/*
Camping Cupo 70, 7 días de plazo antes de que comience
la reserva para pagar,
Hora de apertura 6am, Cierre 8pm
*/
INSERT INTO Area (Tipo, CupoTotal, CupoOnline, Plazo, HoraApertura, HoraCierre)
VALUES ('C', 120, 70, 7, '06:00:00', '20:00:00');

/*
Insertar los países
*/

INSERT INTO Pais(Nombre) VALUES ('Afganistán');
INSERT INTO Pais(Nombre) VALUES ('Albania');
INSERT INTO Pais(Nombre) VALUES ('Alemania');
INSERT INTO Pais(Nombre) VALUES ('Andorra');
INSERT INTO Pais(Nombre) VALUES ('Angola');
INSERT INTO Pais(Nombre) VALUES ('Antigua y Barbuda');
INSERT INTO Pais(Nombre) VALUES ('Arabia Saudita');
INSERT INTO Pais(Nombre) VALUES ('Argelia');
INSERT INTO Pais(Nombre) VALUES ('Argentina');
INSERT INTO Pais(Nombre) VALUES ('Armenia');
INSERT INTO Pais(Nombre) VALUES ('Australia');
INSERT INTO Pais(Nombre) VALUES ('Austria');
INSERT INTO Pais(Nombre) VALUES ('Azerbaiyán');
INSERT INTO Pais(Nombre) VALUES ('Bahamas');
INSERT INTO Pais(Nombre) VALUES ('Bangladés');
INSERT INTO Pais(Nombre) VALUES ('Barbados');
INSERT INTO Pais(Nombre) VALUES ('Baréin');
INSERT INTO Pais(Nombre) VALUES ('Bélgica');
INSERT INTO Pais(Nombre) VALUES ('Belice');
INSERT INTO Pais(Nombre) VALUES ('Benin');
INSERT INTO Pais(Nombre) VALUES ('Bielorrusia');
INSERT INTO Pais(Nombre) VALUES ('Bolivia');
INSERT INTO Pais(Nombre) VALUES ('Bosnia y Herzegovina');
INSERT INTO Pais(Nombre) VALUES ('Botsuana');
INSERT INTO Pais(Nombre) VALUES ('Brasil');
INSERT INTO Pais(Nombre) VALUES ('Brunei');
INSERT INTO Pais(Nombre) VALUES ('Bulgaria');
INSERT INTO Pais(Nombre) VALUES ('Burkina Faso');
INSERT INTO Pais(Nombre) VALUES ('Burundi');
INSERT INTO Pais(Nombre) VALUES ('Bután');
INSERT INTO Pais(Nombre) VALUES ('Cabo Verde');
INSERT INTO Pais(Nombre) VALUES ('Camboya');
INSERT INTO Pais(Nombre) VALUES ('Camerún');
INSERT INTO Pais(Nombre) VALUES ('Canadá');
INSERT INTO Pais(Nombre) VALUES ('Catar');
INSERT INTO Pais(Nombre) VALUES ('Chad');
INSERT INTO Pais(Nombre) VALUES ('Chile');
INSERT INTO Pais(Nombre) VALUES ('China');
INSERT INTO Pais(Nombre) VALUES ('Chipre');
INSERT INTO Pais(Nombre) VALUES ('Colombia');
INSERT INTO Pais(Nombre) VALUES ('Comoras');
INSERT INTO Pais(Nombre) VALUES ('Corea del Norte');
INSERT INTO Pais(Nombre) VALUES ('Corea del Sur');
INSERT INTO Pais(Nombre) VALUES ('Costa de Marfil');
INSERT INTO Pais(Nombre) VALUES ('Costa Rica');
INSERT INTO Pais(Nombre) VALUES ('Croacia');
INSERT INTO Pais(Nombre) VALUES ('Cuba');
INSERT INTO Pais(Nombre) VALUES ('Dinamarca');
INSERT INTO Pais(Nombre) VALUES ('Dominica');
INSERT INTO Pais(Nombre) VALUES ('Ecuador');
INSERT INTO Pais(Nombre) VALUES ('Egipto');
INSERT INTO Pais(Nombre) VALUES ('El Salvador');
INSERT INTO Pais(Nombre) VALUES ('Emiratos Arabes Unidos');
INSERT INTO Pais(Nombre) VALUES ('Eritrea');
INSERT INTO Pais(Nombre) VALUES ('Escocia');
INSERT INTO Pais(Nombre) VALUES ('Eslovaquia');
INSERT INTO Pais(Nombre) VALUES ('Eslovenia');
INSERT INTO Pais(Nombre) VALUES ('España');
INSERT INTO Pais(Nombre) VALUES ('Estados Unidos');
INSERT INTO Pais(Nombre) VALUES ('Estonia');
INSERT INTO Pais(Nombre) VALUES ('Etiopía');
INSERT INTO Pais(Nombre) VALUES ('Filipinas');
INSERT INTO Pais(Nombre) VALUES ('Finlandia');
INSERT INTO Pais(Nombre) VALUES ('Fiyi');
INSERT INTO Pais(Nombre) VALUES ('Francia');
INSERT INTO Pais(Nombre) VALUES ('Gabón');
INSERT INTO Pais(Nombre) VALUES ('Gambia');
INSERT INTO Pais(Nombre) VALUES ('Georgia');
INSERT INTO Pais(Nombre) VALUES ('Ghana');
INSERT INTO Pais(Nombre) VALUES ('Granada');
INSERT INTO Pais(Nombre) VALUES ('Grecia');
INSERT INTO Pais(Nombre) VALUES ('Guatemala');
INSERT INTO Pais(Nombre) VALUES ('Guinea');
INSERT INTO Pais(Nombre) VALUES ('Guinea Ecuatorial');
INSERT INTO Pais(Nombre) VALUES ('Guinea-Bissau');
INSERT INTO Pais(Nombre) VALUES ('Guyana');
INSERT INTO Pais(Nombre) VALUES ('Haití');
INSERT INTO Pais(Nombre) VALUES ('Holanda');
INSERT INTO Pais(Nombre) VALUES ('Honduras');
INSERT INTO Pais(Nombre) VALUES ('Hungría');
INSERT INTO Pais(Nombre) VALUES ('India');
INSERT INTO Pais(Nombre) VALUES ('Indonesia');
INSERT INTO Pais(Nombre) VALUES ('Inglaterra');
INSERT INTO Pais(Nombre) VALUES ('Irán');
INSERT INTO Pais(Nombre) VALUES ('Iraq');
INSERT INTO Pais(Nombre) VALUES ('Irlanda');
INSERT INTO Pais(Nombre) VALUES ('Islandia');
INSERT INTO Pais(Nombre) VALUES ('Islas Vírgenes');
INSERT INTO Pais(Nombre) VALUES ('Islas Salomón');
INSERT INTO Pais(Nombre) VALUES ('Israel');
INSERT INTO Pais(Nombre) VALUES ('Italia');
INSERT INTO Pais(Nombre) VALUES ('Jamaica');
INSERT INTO Pais(Nombre) VALUES ('Japón');
INSERT INTO Pais(Nombre) VALUES ('Jordania');
INSERT INTO Pais(Nombre) VALUES ('Kazajistán');
INSERT INTO Pais(Nombre) VALUES ('Kenia');
INSERT INTO Pais(Nombre) VALUES ('Kirguistán');
INSERT INTO Pais(Nombre) VALUES ('Kiribati');
INSERT INTO Pais(Nombre) VALUES ('Kuwait');
INSERT INTO Pais(Nombre) VALUES ('Laos');
INSERT INTO Pais(Nombre) VALUES ('Lesoto');
INSERT INTO Pais(Nombre) VALUES ('Letonia');
INSERT INTO Pais(Nombre) VALUES ('Líbano');
INSERT INTO Pais(Nombre) VALUES ('Liberia');
INSERT INTO Pais(Nombre) VALUES ('Libia');
INSERT INTO Pais(Nombre) VALUES ('Liechtenstein');
INSERT INTO Pais(Nombre) VALUES ('Lituania');
INSERT INTO Pais(Nombre) VALUES ('Luxemburgo');
INSERT INTO Pais(Nombre) VALUES ('Madagascar');
INSERT INTO Pais(Nombre) VALUES ('Malasia');
INSERT INTO Pais(Nombre) VALUES ('Malaui');
INSERT INTO Pais(Nombre) VALUES ('Maldivas');
INSERT INTO Pais(Nombre) VALUES ('Mali');
INSERT INTO Pais(Nombre) VALUES ('Malta');
INSERT INTO Pais(Nombre) VALUES ('Marruecos');
INSERT INTO Pais(Nombre) VALUES ('Mauricio');
INSERT INTO Pais(Nombre) VALUES ('Mauritania');
INSERT INTO Pais(Nombre) VALUES ('México');
INSERT INTO Pais(Nombre) VALUES ('Micronesia');
INSERT INTO Pais(Nombre) VALUES ('Moldavia');
INSERT INTO Pais(Nombre) VALUES ('Mónaco');
INSERT INTO Pais(Nombre) VALUES ('Mongolia');
INSERT INTO Pais(Nombre) VALUES ('Montenegro');
INSERT INTO Pais(Nombre) VALUES ('Mozambique');
INSERT INTO Pais(Nombre) VALUES ('Myanmar (Birmania)');
INSERT INTO Pais(Nombre) VALUES ('Namibia');
INSERT INTO Pais(Nombre) VALUES ('Nauru');
INSERT INTO Pais(Nombre) VALUES ('Nepal');
INSERT INTO Pais(Nombre) VALUES ('Nicaragua');
INSERT INTO Pais(Nombre) VALUES ('Níger');
INSERT INTO Pais(Nombre) VALUES ('Nigeria');
INSERT INTO Pais(Nombre) VALUES ('Noruega');
INSERT INTO Pais(Nombre) VALUES ('Nueva Zelanda');
INSERT INTO Pais(Nombre) VALUES ('Omán');
INSERT INTO Pais(Nombre) VALUES ('Países Bajos');
INSERT INTO Pais(Nombre) VALUES ('Pakistán');
INSERT INTO Pais(Nombre) VALUES ('Palaos');
INSERT INTO Pais(Nombre) VALUES ('Palestina');
INSERT INTO Pais(Nombre) VALUES ('Panamá');
INSERT INTO Pais(Nombre) VALUES ('Papúa Nueva Guinea');
INSERT INTO Pais(Nombre) VALUES ('Paraguay');
INSERT INTO Pais(Nombre) VALUES ('Perú');
INSERT INTO Pais(Nombre) VALUES ('Polonia');
INSERT INTO Pais(Nombre) VALUES ('Portugal');
INSERT INTO Pais(Nombre) VALUES ('Puerto Rico');
INSERT INTO Pais(Nombre) VALUES ('Reino Unido');
INSERT INTO Pais(Nombre) VALUES ('República Centroafricana');
INSERT INTO Pais(Nombre) VALUES ('República Checa');
INSERT INTO Pais(Nombre) VALUES ('República de Macedonia');
INSERT INTO Pais(Nombre) VALUES ('República del Congo');
INSERT INTO Pais(Nombre) VALUES ('República Democrática del Congo');
INSERT INTO Pais(Nombre) VALUES ('República Dominicana');
INSERT INTO Pais(Nombre) VALUES ('República Saharaui');
INSERT INTO Pais(Nombre) VALUES ('Ruanda');
INSERT INTO Pais(Nombre) VALUES ('Rumania');
INSERT INTO Pais(Nombre) VALUES ('Rusia');
INSERT INTO Pais(Nombre) VALUES ('Samoa');
INSERT INTO Pais(Nombre) VALUES ('San Cristóbal y Nieves');
INSERT INTO Pais(Nombre) VALUES ('San Marino');
INSERT INTO Pais(Nombre) VALUES ('San Vicente y Las Granadinas');
INSERT INTO Pais(Nombre) VALUES ('Santa Lucía');
INSERT INTO Pais(Nombre) VALUES ('Santo Tomé y Príncipe');
INSERT INTO Pais(Nombre) VALUES ('Senegal');
INSERT INTO Pais(Nombre) VALUES ('Serbia');
INSERT INTO Pais(Nombre) VALUES ('Seychelles');
INSERT INTO Pais(Nombre) VALUES ('Sierra Leona');
INSERT INTO Pais(Nombre) VALUES ('Singapur');
INSERT INTO Pais(Nombre) VALUES ('Siria');
INSERT INTO Pais(Nombre) VALUES ('Somalia');
INSERT INTO Pais(Nombre) VALUES ('Sri Lanka');
INSERT INTO Pais(Nombre) VALUES ('Suazilandia');
INSERT INTO Pais(Nombre) VALUES ('Sudáfrica');
INSERT INTO Pais(Nombre) VALUES ('Sudán del Norte');
INSERT INTO Pais(Nombre) VALUES ('Sudán del Sur');
INSERT INTO Pais(Nombre) VALUES ('Suecia');
INSERT INTO Pais(Nombre) VALUES ('Suiza');
INSERT INTO Pais(Nombre) VALUES ('Surinam');
INSERT INTO Pais(Nombre) VALUES ('Tailandia');
INSERT INTO Pais(Nombre) VALUES ('Taiwan');
INSERT INTO Pais(Nombre) VALUES ('Tanzania');
INSERT INTO Pais(Nombre) VALUES ('Tayikistán');
INSERT INTO Pais(Nombre) VALUES ('Timor Oriental');
INSERT INTO Pais(Nombre) VALUES ('Togo');
INSERT INTO Pais(Nombre) VALUES ('Tonga');
INSERT INTO Pais(Nombre) VALUES ('Trinidad y Tobago');
INSERT INTO Pais(Nombre) VALUES ('Túnez');
INSERT INTO Pais(Nombre) VALUES ('Turkmenistán');
INSERT INTO Pais(Nombre) VALUES ('Turquía');
INSERT INTO Pais(Nombre) VALUES ('Tuvalu');
INSERT INTO Pais(Nombre) VALUES ('Ucrania');
INSERT INTO Pais(Nombre) VALUES ('Uganda');
INSERT INTO Pais(Nombre) VALUES ('Uruguay');
INSERT INTO Pais(Nombre) VALUES ('Uzbekistán');
INSERT INTO Pais(Nombre) VALUES ('Vanuatu');
INSERT INTO Pais(Nombre) VALUES ('Vaticano');
INSERT INTO Pais(Nombre) VALUES ('Venezuela');
INSERT INTO Pais(Nombre) VALUES ('Vietnam');
INSERT INTO Pais(Nombre) VALUES ('Yemen');
INSERT INTO Pais(Nombre) VALUES ('Yibuti');
INSERT INTO Pais(Nombre) VALUES ('Zambia');
INSERT INTO Pais(Nombre) VALUES ('Zimbabue');

-- Insertar los países

INSERT INTO ProvinciaCRC(Nombre) VALUES ('Guanacaste');
INSERT INTO ProvinciaCRC(Nombre) VALUES ('Cartago');
INSERT INTO ProvinciaCRC(Nombre) VALUES ('Limón');
INSERT INTO ProvinciaCRC(Nombre) VALUES ('Alajuela');
INSERT INTO ProvinciaCRC(Nombre) VALUES ('Heredia');
INSERT INTO ProvinciaCRC(Nombre) VALUES ('San José');
INSERT INTO ProvinciaCRC(Nombre) VALUES ('Puntareans');
INSERT INTO ProvinciaCRC(Nombre) VALUES ('');

/*
Insertar todos los tipos de visitante posibles.
*/

INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda) 
VALUES ('Nacional', 'Camping', 'Niño 0 a 6 años', 'Exonerado', 0, 'CRC');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Nacional', 'Camping', 'Niño 6 a 12 años', 'No exonerado', 3390, 'CRC');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Nacional', 'Camping', 'Adulto', 'No exonerado', 4520, 'CRC');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Nacional', 'Camping', 'Adulto 65 años o más', 'Exonerado', 0, 'CRC');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Extranjero', 'Camping', 'Niño 0 a 6 años', 'Exonerado', 0, 'USD');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Extranjero', 'Camping', 'Niño 6 a 12 años', 'No exonerado', 10.17, 'USD');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Extranjero', 'Camping', 'Adulto', 'No exonerado', 18.08, 'USD');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Extranjero', 'Camping', 'Adulto 65 años o más', 'Exonerado', 0, 'USD');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Nacional', 'Picnic', 'Niño 0 a 6 años', 'Exonerado', 0, 'CRC');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Nacional', 'Picnic', 'Niño 6 a 12 años', 'No exonerado', 1130, 'CRC');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Nacional', 'Picnic', 'Adulto', 'No exonerado', 2260, 'CRC');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Nacional', 'Picnic', 'Adulto 65 años o más', 'Exonerado', 0, 'CRC');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Extranjero', 'Picnic', 'Niño 0 a 6 años', 'Exonerado', 0, 'USD');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Extranjero', 'Picnic', 'Niño 6 a 12 años', 'No exonerado', 5.65, 'USD');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Extranjero', 'Picnic', 'Adulto', 'No exonerado', 13.56, 'USD');
INSERT INTO TipoVisitante (TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda)
VALUES ('Extranjero', 'Picnic', 'Adulto 65 años o más', 'Exonerado', 0, 'USD');


