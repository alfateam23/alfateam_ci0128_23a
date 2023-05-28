# Refugio de Vida Silvestre Bahía Junquillal: Diccionario de Datos

AlphaTeam: Jason Murillo, Jose Pereira, Marco Piedra, Josué Retana, Ariel Solís

Proyecto Integrador de Ingeniería de Software y Bases de Datos

Escuela de Ciencias de la Computación e Informática, Universidad de Costa Rica

Abril 2023

## Código de visitante

- Formato: `TipoProcedencia-TipoVisita-Estatus-Número`

Número es un consecutivo de 8 dígitos.

- Expresión regular: `([neNE])\-([cpCP])\-([a-iA-I])\-([0-9]{1,8})`

## Tipo de Procedencia

- `N` (nacional)
- `E` (extranjero)

## Tipo de visita

- `C` (camping, i.e., más de un día)
- `P` (picnic, i.e., por el día)

## Estatus

- `A` (regular)
- `B` (niño regular)
- `C` (estudiante)
- `D` (niño exonerado)
- `E` (adulto mayor)
- `F` (miércoles de cortesía)
- `G` (por resolución)
- `H` (sin mecanismo)
- `I` (otros)

## Categoría de pago

- `A` No exonerado
- `B` Prepagado
- `C` Exonerado

## Códigos de visitante

- desde N-C-A-00000001 hasta N-C-A-99999999
- desde N-C-B-00000001 hasta N-C-B-99999999
- desde N-C-C-00000001 hasta N-C-C-99999999
- desde N-C-D-00000001 hasta N-C-D-99999999
- desde N-C-E-00000001 hasta N-C-E-99999999
- desde N-C-F-00000001 hasta N-C-F-99999999
- desde N-C-G-00000001 hasta N-C-G-99999999
- desde N-C-H-00000001 hasta N-C-H-99999999
- desde N-C-I-00000001 hasta N-C-I-99999999
- desde N-P-A-00000001 hasta N-P-A-99999999
- desde N-P-B-00000001 hasta N-P-B-99999999
- desde N-P-C-00000001 hasta N-P-C-99999999
- desde N-P-D-00000001 hasta N-P-D-99999999
- desde N-P-E-00000001 hasta N-P-E-99999999
- desde N-P-F-00000001 hasta N-P-F-99999999
- desde N-P-G-00000001 hasta N-P-G-99999999
- desde N-P-H-00000001 hasta N-P-H-99999999
- desde N-P-I-00000001 hasta N-P-I-99999999
- desde E-C-A-00000001 hasta E-C-A-99999999
- desde E-C-B-00000001 hasta E-C-B-99999999
- desde E-C-C-00000001 hasta E-C-C-99999999
- desde E-C-D-00000001 hasta E-C-D-99999999
- desde E-C-E-00000001 hasta E-C-E-99999999
- desde E-C-F-00000001 hasta E-C-F-99999999
- desde E-C-G-00000001 hasta E-C-G-99999999
- desde E-C-H-00000001 hasta E-C-H-99999999
- desde E-C-I-00000001 hasta E-C-I-99999999
- desde E-P-A-00000001 hasta E-P-A-99999999
- desde E-P-B-00000001 hasta E-P-B-99999999
- desde E-P-C-00000001 hasta E-P-C-99999999
- desde E-P-D-00000001 hasta E-P-D-99999999
- desde E-P-E-00000001 hasta E-P-E-99999999
- desde E-P-F-00000001 hasta E-P-F-99999999
- desde E-P-G-00000001 hasta E-P-G-99999999
- desde E-P-H-00000001 hasta E-P-H-99999999
- desde E-P-I-00000001 hasta E-P-I-99999999

## Tarifas

Tarifa especial de picnic para grupos.
Tarifa de camping por persona por día.
Tarifa de kayak por cada 30 minutos de uso.
Niños son de 2 a 12 años.

### Camping

- Camping, Nacional, Adulto: 4520 CRC
- Camping, Nacional, Niño: 3390 CRC
- Camping, Extranjero, Adulto: 18.08 USD
- Camping, Extranjero, Niño: 10.17 USD

### Picnic

- Picnic, Nacional, Adulto: 2260 CRC
- Picnic, Nacional, Niño: 1130 CRC
- Picnic, Extranjero, Adulto: 13.56 USD
- Picnic, Extranjero, Niño: 5.65 USD

### Kayak

- Kayak, Individual: 5000 CRC
- Kayak, Doble: 8000 CRC

### Senderos

No tienen costo. Los nombres de senderos son:

- Carao
- Estero Seco
- Laguna

## Moneda

- `USD`: dólar estadounidense
- `CRC`: colón costarricense

## Procedencia

### Nacional

- Alajuela
- Cartago
- Guanacaste
- Heredia
- Limón
- Puntarenas
- San José

### Extranjero

- Afganistán
- Albania
- Alemania
- Andorra
- Angola
- Antigua y Barbuda
- Arabia Saudita
- Argelia
- Argentina
- Armenia
- Australia
- Austria
- Azerbaiyán
- Bahamas
- Bangladés
- Barbados
- Baréin
- Bélgica
- Bélgica
- Belice
- Benin
- Bielorrusia
- Bolivia
- Bosnia y Herzegovina
- Botsuana
- Brasil
- Brunei
- Bulgaria
- Burkina Faso
- Burundi
- Bután
- Cabo Verde
- Camboya
- Camerún
- Canadá
- Catar
- Chad
- Chile
- China
- Chipre
- Colombia
- Comoras
- Corea del Norte
- Corea del Sur
- Costa de Marfil
- Costa Rica
- Croacia
- Cuba
- Dinamarca
- Dominica
- Ecuador
- Egipto
- El Salvador
- Emiratos Arabes Unidos
- Eritrea
- Escocia
- Eslovaquia
- Eslovenia
- España
- Estados Unidos
- Estonia
- Etiopía
- Filipinas
- Finlandia
- Fiyi
- Francia
- Gabón
- Gambia
- Georgia
- Ghana
- Granada
- Grecia
- Guatemala
- Guinea
- Guinea Ecuatorial
- Guinea-Bissau
- Guyana
- Haití
- Holanda
- Honduras
- Hungría
- India
- Indonesia
- Inglaterra
- Irán
- Iraq
- Irlanda
- Islandia
- Islas Vírgenes
- Islas Salomón
- Israel
- Italia
- Jamaica
- Japón
- Jordania
- Kazajistán
- Kenia
- Kirguistán
- Kiribati
- Kuwait
- Laos
- Lesoto
- Letonia
- Líbano
- Liberia
- Libia
- Liechtenstein
- Lituania
- Luxemburgo
- Madagascar
- Malasia
- Malaui
- Maldivas
- Mali
- Malta
- Marruecos
- Mauricio
- Mauritania
- México
- Micronesia
- Moldavia
- Mónaco
- Mongolia
- Montenegro
- Mozambique
- Myanmar (Birmania)
- Namibia
- Nauru
- Nepal
- Nicaragua
- Níger
- Nigeria
- Noruega
- Nueva Zelanda
- Omán
- Países Bajos
- Pakistán
- Palaos
- Palestina
- Panamá
- Papúa Nueva Guinea
- Paraguay
- Perú
- Polonia
- Portugal
- Puerto Rico
- Reino Unido
- República Centroafricana
- República Checa
- República de Macedonia
- República del Congo
- República Democrática del Congo
- República Dominicana
- República Saharaui
- Ruanda
- Rumania
- Rusia
- Samoa
- San Cristóbal y Nieves
- San Marino
- San Vicente y Las Granadinas
- Santa Lucía
- Santo Tomé y Príncipe
- Senegal
- Serbia
- Seychelles
- Sierra Leona
- Singapur
- Siria
- Somalia
- Sri Lanka
- Suazilandia
- Sudáfrica
- Sudán del Norte
- Sudán del Sur
- Suecia
- Suiza
- Surinam
- Tailandia
- Taiwan
- Tanzania
- Tayikistán
- Timor Oriental
- Togo
- Tonga
- Trinidad y Tobago
- Túnez
- Turkmenistán
- Turquía
- Tuvalu
- Ucrania
- Uganda
- Uruguay
- Uzbekistán
- Vanuatu
- Vaticano
- Venezuela
- Vietnam
- Yemen
- Yibuti
- Zambia
- Zimbabue
