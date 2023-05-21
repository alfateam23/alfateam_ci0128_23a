import React, { useState } from 'react';
import './App.css'; // Archivo de estilos CSS personalizado

function Lista() {
  const [data, setData] = useState([
    { codigo: 11211, tipo: 'Camping', personas: '9', fecha: 1.5 },
    { codigo: 38382, tipo: 'Picnic', personas: '6', fecha: 1.2 },
    { codigo: 48273, tipo: 'Picnic', personas: '3', fecha: 1.0 },
    { codigo: 48223, tipo: 'Camping', personas: '9', fecha: 0.8 },
  ]);

  const [filterValue, setFilterValue] = useState('');

  const [typeFilter, setTypeFilter] = useState('');

  const handleDeleteRow = (codigo) => {
    const updatedData = data.filter((item) => item.codigo !== codigo);
    setData(updatedData);
  };

const handleFilterByType = () => {
  const filteredData = data.filter((item) => {
    if (typeFilter === '') {
      return true;
    } else {
      return item.tipo === typeFilter;
    }
  });
  setData(filteredData);
};

  const handleFilterByCodigo = () => {
    const filteredData = data.filter((item) => {
      if (filterValue !== '') {
        return item.codigo === parseInt(filterValue);
      } else {
        return true;
      }
    });
    setData(filteredData);
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div>
        <input
          type="text"
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
          placeholder="Buscar por Codigo"
        />
        <button onClick={handleFilterByCodigo}>Filtrar</button>
      </div>
      <div>
        <select
          value={typeFilter}
          onChange={(event) => setTypeFilter(event.target.value)}
        >
          <option value="">Ambos</option>
          <option value="Picnic">Picnic</option>
          <option value="Camping">Camping</option>
        </select>
        <button onClick={handleFilterByType}>Filtrar por Tipo</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Tipo</th>
            <th>Cantidad de Personas</th>
            <th>Fecha de visita</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.codigo}>
              <td>{item.codigo}</td>
              <td>{item.tipo}</td>
              <td>{item.personas}</td>
              <td>{item.fecha}</td>
              <td>
                <button onClick={() => handleDeleteRow(item.codigo)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lista;
