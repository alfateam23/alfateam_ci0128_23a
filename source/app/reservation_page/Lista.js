import React, { useState } from 'react';

function Lista() {
  const initialData = [
    { codigo: 11211, tipo: 'Camping', personas: '9', fecha: 1.5 },
    { codigo: 38382, tipo: 'Picnic', personas: '6', fecha: 1.2 },
    { codigo: 48273, tipo: 'Picnic', personas: '3', fecha: 1.0 },
    { codigo: 48223, tipo: 'Camping', personas: '9', fecha: 0.8 },
  ];

  const [data, setData] = useState(initialData);
  const [filterValue, setFilterValue] = useState('');  
  const [sortOrder, setSortOrder] = useState('asc');
  const [typeFilter, setTypeFilter] = useState('');

  const handleDeleteRow = (codigo) => {
    const updatedData = data.filter((item) => item.codigo !== codigo);
    setData(updatedData);
  };

const handleFilterByType = () => {
  let filteredData = [...initialData];

  if (typeFilter !== '') {
    filteredData = filteredData.filter((item) => item.tipo === typeFilter);
  }

  setData(filteredData);
  setFilterValue('');
};

  const handleFilterByCodigo = () => {
    if (filterValue === '') {
      setData([...initialData]);
    } else {
      const filteredData = initialData.filter((item) => item.codigo === parseInt(filterValue));
      setData(filteredData);
    }
  };

  const handleSortByPeople = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.personas - b.personas;
      } else {
        return b.personas - a.personas;
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <h1>Lista de Reservas</h1>
      <div>
        <input
          type="text"
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
          placeholder="Buscar por Codigo"
        />
        <button onClick={handleFilterByCodigo}>Buscar</button>
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
        <button onClick={handleFilterByType}>Filtrar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Tipo</th>
            <th>
            Cantidad de Personas{' '}
              <button onClick={handleSortByPeople}>
                {sortOrder === 'asc' ? <>&#x25B2;</> : <>&#x25BC;</>}
              </button>
            </th>
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
