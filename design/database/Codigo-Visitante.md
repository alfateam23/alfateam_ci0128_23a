# Códigos de visitante

## Formato

```
Procedencia-Estatus-TipoDeVisita-Número
```

## Expresión regular

```python
[CRC|EXT]-[RNEDMWLXO]-[A|P]-[\d]{8}
```

## Procedencia

- `CRC` (nacional)
- `EXT` (extranjero)

## Estatus

`R` (regular)
`N` (niño regular)
`E` (estudiante)
`D` (niño exonerado)
`M` (adulto mayor)
`W` (miércoles de cortesía)
`L` (por resolución)
`X` (sin mecanismo)
`O` (otros)

## Tipo de visita

`A` (camping, i.e., más de un día)
`P` (picnic, i.e., por el día)

## Número

Consecutivo de 8 dígitos, asociado a procedencia, estatus, tipo de visita.
