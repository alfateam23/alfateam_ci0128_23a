

CREATE NONCLUSTERED INDEX IX_Reservacion_FechaInicio
ON Reservacion(FechaInicio)

CREATE NONCLUSTERED INDEX IX_Visitante_Subtotal
ON Visitante(Subtotal)

CREATE INDEX IX_Area_Cupos
ON Area (CupoTotal) INCLUDE (CupoOnline)
