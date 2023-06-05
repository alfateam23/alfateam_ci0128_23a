
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import {My_Calendar} from '../../reservation_page/Calendar';
import "flowbite";
/** 
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
      textAlign: 'center',
      whiteSpace: 'nowrap',
      fontSize: 25
    },
    '& th': {
      backgroundColor: '#3f83f8',
      fontWeight: 'bold',
      color: 'white',
    },
    '& tr:nth-child(even)': {
      backgroundColor: '#f2f2f2',
    },
    '& tr:nth-child(odd)': {
      backgroundColor: '#f2f2f2',
    },
    '& tr:hover': {
      backgroundColor: '#ddd',
    },
  },
});
*/
function Lista() {
  //const classes = useStyles();
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState(null);
  const [filterValue, setFilterValue] = useState('');
  const [selectedTypeFilter, setselectedTypeFilter] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [aprobado,setAprobado] = useState(false);
  const [cancelado,setCancelado] = useState(false);
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

const filterElement = (field, value) => {
  let filteredData = [...initialData]; 
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

  const sortElements = (field) => {
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


  const cancelEstado = (ReservacionCodigo) => {
    const updatedData = data.map((item) => {
      if (item.ReservacionCodigo === ReservacionCodigo && item.EstadoActividad === true) {
          setCancelado(ReservacionCodigo);
          return { ...item, EstadoActividad: false };
      }
      return item;
    });
    setData(updatedData);
  };

  useEffect(() => {
    if(cancelado !== 0){
      const ReservacionCodigo=cancelado;
    fetch(`/backend/reservationDetails/cancelReservation/${ReservacionCodigo}`)
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
    setCancelado(1);
    }
  }, [cancelado]);

  
  const aprobeEstado = (ReservacionCodigo) => {
    const updatedData = data.map((item) => {
      if (item.ReservacionCodigo === ReservacionCodigo && item.EstadoPago === false) {
        setAprobado(ReservacionCodigo);
        return { ...item, EstadoPago: true };
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

  const selectDate = (day) => {
    const filteredData = initialData.filter((item) => {
      return (new Date(item.FechaInicio)).toDateString() === (new Date(day)).toDateString();
    });
  
    setData(filteredData);
  };

  const ocultarCalendario = () => {
    setCalendarVisible(false);
  };

  
  return (
    <div className='{{ backgroundColor: gray }}'>
      <h1 class="font-sans text-4xl rounded-none py-4 m-3">
    Lista de Reservas
      </h1>
      <div>
        <input
          type="text"
          value={filterValue}
          onChange={(event) => filterElement('filterValue', event.target.value)}
          placeholder="Filtrar por Código"
        />
      </div>
      <div>
        <select
          value={selectedTypeFilter}
          onChange={(event) => filterElement('selectedTypeFilter', event.target.value)}
        >
          <option value="">Ambos</option>
          <option value="P">Picnic</option>
          <option value="C">Camping</option>
        </select>
      </div>

      <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={mostrarCalendario}>Mostrar Calendario</button>
      {isCalendarVisible && (
        <My_Calendar
          active={true}
          handleClick={selectDate}
        />
      )}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={ocultarCalendario}>Ocultar Calendario</button>
    </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Codigo
              <button onClick={() => sortElements('ReservacionCodigo')}>
                {sortField === 'ReservacionCodigo' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th scope="col" class="px-6 py-3">Tipo
              <button onClick={() => sortElements('TipoArea')}>
                {sortField === 'TipoArea' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th scope="col" class="px-6 py-3">
            Cantidad de Visitantes{' '}
              <button onClick={() => sortElements('TotalCantidadVisitantes')}>
                {sortField === 'TotalCantidadVisitantes' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th scope="col" class="px-6 py-5">Fecha entrada
              <button onClick={() => sortElements('fechaInicio')}>
                {sortField === 'fechaInicio' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th scope="col" class="px-6 py-3">EstadoPago
              <button onClick={() => sortElements('EstadoPago')}>
                {sortField === 'EstadoPago' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={item.ReservacionCodigo}>
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.ReservacionCodigo}</th>
              <td class="px-6 py-4">{item.TipoArea === 'C' ? 'Camping' : 'Picnic'}</td>
              <td class="px-6 py-4">{item.TotalCantidadVisitantes}</td>
              <td class="px-6 py-4">{(new Date (item.FechaInicio)).toDateString()}</td>
              <td class="px-6 py-4">{item.EstadoPago == true ? 'Aprobado' : item.EstadoActividad == false ? 'Cancelado' : 'Pendiente'}</td>
              <td class="px-6 py-4">
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={() => cancelEstado(item.ReservacionCodigo)}>Cancelar</button>
              </td>              
              <td class="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={() => aprobeEstado(item.ReservacionCodigo)}>Confirmar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
}

export default Lista;