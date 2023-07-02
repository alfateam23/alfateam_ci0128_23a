import React from 'react';

const FiltroEstado = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Filtrar por estado</option>
      <option value="Aceptado">Aceptados</option>
      <option value="Cancelado">Cancelados</option>
      <option value="Pendientes">Pendientes</option>
    </select>
  );
}

export default FiltroEstado;