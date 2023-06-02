import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import {My_Calendar} from './reservation_page/Calendar';


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
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState(null);
  const [filterValue, setFilterValue] = useState('');
  const [selectedTypeFilter, setselectedTypeFilter] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [aprobado,setAprobado] = useState(false);
  const [cancelado,setCancelado] = useState(0);
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);


useEffect(() => {
  fetch("/backend/reservationDetails/getReservations")
    .then((res) => {
      if (!res.ok) {
        console.log('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setData(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);

// Verificar si los datos se han cargado

const handleFilter = (field, value) => {
  let filteredData = [...initialData]; // Utiliza una copia del conjunto de datos original

  if (field === 'filterValue') {
    setFilterValue(value);
    filteredData = filteredData.filter((item) => item.ReservacionCodigo === parseInt(value));
  } else if (field === 'selectedTypeFilter') {
    setselectedTypeFilter(value);
    if (value !== '') {
      filteredData = filteredData.filter((item) => item.TipoArea === value);
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


  const handleCancelEstado = (ReservacionCodigo) => {
    const updatedData = data.map((item) => {
      if (item.ReservacionCodigo === ReservacionCodigo && item.EstadoActividad === 'Pendiente') {
          setCancelado(ReservacionCodigo);
          return { ...item, EstadoActividad: 'Cancelado' };
      }
      return item;
    });
    setData(updatedData);
  };

  useEffect(() => {
    if(cancelado !== 0){
      const ReservacionCodigo=cancelado;
    fetch(`/backend/reservationDetails/confirmReservation/${ReservacionCodigo}`)
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
    setCancelado(0);
    }
  }, [cancelado]);

  
  const handleAprobeEstado = (ReservacionCodigo) => {
    const updatedData = data.map((item) => {
      if (item.ReservacionCodigo === ReservacionCodigo && item.EstadoPago === 'Pendiente') {
        setAprobado(ReservacionCodigo);
        return { ...item, EstadoPago: 'Aprobado' };
      }
      return item;
    });
    setData(updatedData);
  };

  useEffect(() => {
    if(aprobado !== 0){
      const ReservacionCodigo=aprobado;
    fetch(`/backend/reservationDetails/confirmReservation/${ReservacionCodigo}`)
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
    setAprobado(0);
    }
  }, [aprobado]);


  if (data === null) {
    return <div>Cargando datos...</div>;
  }

  const mostrarCalendario = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const handleSelectDate = (day) => {
    let filteredData = [...initialData]; 
      setFilterValue(day);
      filteredData = filteredData.filter((item) => item.FechaInicio === day);
  setData(filteredData);  
};

  const ocultarCalendario = () => {
    setCalendarVisible(false);
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
      </div>
      <div>
        <select
          value={selectedTypeFilter}
          onChange={(event) => handleFilter('selectedTypeFilter', event.target.value)}
        >
          <option value="">Ambos</option>
          <option value="P">Picnic</option>
          <option value="C">Camping</option>
        </select>
      </div>

      <div>
      <button onClick={mostrarCalendario}>Mostrar Calendario</button>
      {isCalendarVisible && (
        <My_Calendar
          active={true}
          handleClick={handleSelectDate}
        />
      )}
      <button onClick={ocultarCalendario}>Ocultar Calendario</button>
    </div>

      <div className={classes.tableContainer}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Codigo
              <button onClick={() => handleSort('ReservacionCodigo')}>
                {sortField === 'ReservacionCodigo' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th>Tipo
              <button onClick={() => handleSort('TipoArea')}>
                {sortField === 'TipoArea' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th>
            Cantidad de Visitantes{' '}
              <button onClick={() => handleSort('TotalCantidadVisitantes')}>
                {sortField === 'TotalCantidadVisitantes' && sortOrder === 'asc' ? '▲' : '▼'}
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
            <th>EstadoPago
              <button onClick={() => handleSort('EstadoPago')}>
                {sortField === 'EstadoPago' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ReservacionCodigo}>
              <td>{item.ReservacionCodigo}</td>
              <td>{item.TipoArea === 'C' ? 'Camping' : 'Picnic'}</td>
              <td>{item.TotalCantidadVisitantes}</td>
              <td>{(new Date (item.FechaInicio)).toDateString()}</td>
              <td>{(new Date (item.FechaInicio)).toDateString()}</td>
              <td>{item.EstadoPago == true ? 'Aprobado' : item.EstadoActividad == false ? 'Cancelado' : 'Pendiente'}</td>
              <td>
               <button onClick={() => handleCancelEstado(item.ReservacionCodigo)}>Cancelar</button>
              </td>              
              <td>
                <button onClick={() => handleAprobeEstado(item.ReservacionCodigo)}>Confirmar</button>
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
