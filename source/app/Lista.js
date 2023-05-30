import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  tableContainer: {
    maxWidth: '1500px',
    width: '100%',
    margin: '0 auto',
    fontFamily: 'Times New Roman, sans-serif',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    '& th, td': {
      padding: '8px',
      border: '1px solid #ddd',
      textAlign: 'center', // Centrar el contenido de las celdas
    },
    '& th': {
      backgroundColor: '#C9F1EB',
      fontWeight: 'bold',
    },
    '& tr:nth-child(even)': {
      backgroundColor: '#f2f2f2',
    },
    '& tr:hover': {
      backgroundColor: '#ddd',
    },
  },
});

function Lista() {
  const classes = useStyles();
  const [data, setData] = useState(initialData);
  const [filterValue, setFilterValue] = useState('');
  const [selectedNameFilter, setSelectedNameFilter] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    fetch("/backend/reservationDetails/getReservations")
    .then((res) => {
      if (!res.ok) {
        console.log('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => setInitialData(data))
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  // Al eliminar se debe invocar una funcion que envia el ID de la rserva a eliminar junto al token para eliminarlo en la DB
  const handleFilter = (field, value) => {
    let filteredData = [...initialData];
  
    if (field === 'filterValue') {
      setFilterValue(value);
      filteredData = filteredData.filter((item) => item.codigo === parseInt(value)); 
    } else if (field === 'selectedNameFilter') {
      setSelectedNameFilter(value);
      if (value !== '') {
        filteredData = filteredData.filter((item) => item.tipo === value); 
      }
    }
  
    setData(filteredData); 
  };

  const handleSort = (field) => {
    let sortedData = [...data];

    if (sortField === field && sortOrder === 'asc') {
      sortedData.sort((a, b) => {
        if (typeof a[field] === 'string') {
          return b[field].localeCompare(a[field]);
        } else {
          return b[field] - a[field];
        }
      });

      setSortOrder('desc');
    } else {
      sortedData.sort((a, b) => {
        if (typeof a[field] === 'string') {
          return a[field].localeCompare(b[field]);
        } else {
          return a[field] - b[field];
        }
      });

      setSortOrder('asc');
    }

    setSortField(field);
    setData(sortedData);
  };

  const handleCancelEstado = (codigo) => {
    const updatedData = data.map((item) => {
      if (item.codigo === codigo && item.estado === 'Pendiente') {
          return { ...item, estado: 'Cancelado' };
      }
      return item;
    });
    setData(updatedData);
    
    useEffect(() => {
      fetch('/cancelReservation/:id')
      .then((res) => {
        if (!res.ok) {
          console.log('Network response was not ok');
        }
        return res.json();
      })
      .then((updatedData) => setData(updatedData))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }, []);
  };


  const handleAprobeEstado = (codigo) => {
    const updatedData = data.map((item) => {
      if (item.codigo === codigo && item.estado === 'Pendiente') {
          return { ...item, estado: 'Aprobado' };
      }
      return item;
    });
    setData(updatedData);

    useEffect(() => {
      fetch('/confirmReservation/:id')
      .then((res) => {
        if (!res.ok) {
          console.log('Network response was not ok');
        }
        return res.json();
      })
      .then((updatedData) => setData(updatedData))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }, []);
  };



  return (
    <div className='{{ backgroundColor: gray }}'>
      <h1 className='col' >Lista de Reservas</h1>
      <div>
        <input
          type="text"
          value={filterValue}
          onChange={(event) => handleFilter('filterValue', event.target.value)}
          placeholder="Filtrar por Código"
        />
        <button onClick={() => handleFilter('filterValue', filterValue)}>Buscar por Codigo</button>
      </div>
      <div>
        <select
          value={selectedNameFilter}
          onChange={(event) => handleFilter('selectedNameFilter', event.target.value)}
        >
          <option value="">Ambos</option>
          <option value="Picnic">Picnic</option>
          <option value="Camping">Camping</option>
        </select>
        <button onClick={() => handleFilter('selectedNameFilter', selectedNameFilter)}>
          Filtrar
        </button>
      </div>
      <div className={classes.tableContainer}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Codigo
              <button onClick={() => handleSort('codigo')}>
                {sortField === 'codigo' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th>Tipo
              <button onClick={() => handleSort('tipo')}>
                {sortField === 'tipo' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th>
            Cantidad de Personas{' '}
              <button onClick={() => handleSort('personas')}>
                {sortField === 'personas' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th>Fecha entrada
              <button onClick={() => handleSort('fechaInicio')}>
                {sortField === 'fechaInicio' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th>Fecha salida
              <button onClick={() => handleSort('fechaFinal')}>
                {sortField === 'fechaFinal' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th>Estado
              <button onClick={() => handleSort('estado')}>
                {sortField === 'estado' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.codigo}>
              <td>{item.codigo}</td>
              <td>{item.tipo}</td>
              <td>{item.personas}</td>
              <td>{item.fechaInicio}</td>
              <td>{item.fechaFinal}</td>
              <td>{item.estado}</td>
              <td>
                <button onClick={() => handleCancelEstado(item.codigo)}>Cancelar</button>
              </td>              
              <td>
                <button onClick={() => handleAprobeEstado(item.codigo)}>Confirmar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Lista;
