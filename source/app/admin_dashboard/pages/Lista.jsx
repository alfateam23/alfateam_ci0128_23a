
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "flowbite";

function Lista() {
  //const classes = useStyles();
  const [initialData, setInitialData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(null);
  const [filterValue, setFilterValue] = useState('');
  const [selectedStateFilter, setSelectedStateFilter] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [Aceptado,setAceptado] = useState(false);
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
        setInitialData(data); // Establecer initialData con los datos recibidos
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const filterElement = (field, value) => {
    let filteredData = [...initialData]; 
    if (field === 'selectedStateFilter') {
      setSelectedStateFilter(value);
      if (value === 'Aceptado') {
        filteredData = filteredData.filter((item) => item.EstadoPago === true);
      } else if (value === 'Cancelado') {
        filteredData = filteredData.filter((item) => item.EstadoActividad === false);
      } else if (value === 'Pendientes') {
        filteredData = filteredData.filter((item) => item.EstadoPago === false && item.EstadoActividad === true);
      }
      setData(filteredData);
    }
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

  const resetTable = () => {
    setSelectedStateFilter('');
    setCalendarVisible(false);
    setData(initialData);
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
        setAceptado(ReservacionCodigo);
        return { ...item, EstadoPago: true };
      }
      return item;
    });
    setData(updatedData);
  };

  useEffect(() => {
    if(Aceptado !== 0){
      const ReservacionCodigo=Aceptado;
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
    setAceptado(0);
    }
  }, [Aceptado]);


  if (data === null) {
    return <div>Cargando datos...</div>;
  }

  const selectDate = (day) => {
    const filteredData = initialData.filter((item) => 
    (new Date(item.FechaInicio)).toDateString() === day.toDateString()
    );
    console.log(initialData);
    setSelectedStateFilter(day);
    setData(filteredData);
  };

  return (
    <div className='{{ backgroundColor: gray }}'>
      <h1 className="font-sans text-4xl rounded-none py-4 m-3">
        Lista de Reservas
      </h1>
      <div>
      <select
  value={selectedStateFilter}
  onChange={(event) => filterElement('selectedStateFilter', event.target.value)}
>
  <option value="">Filtrar por estado</option>
  <option value="Aceptado">Aceptados</option>
  <option value="Cancelado">Cancelados</option>
  <option value="Pendientes">Pendientes</option>
</select>
</div>
      <div className="flex flex-row space-x-10">
        <DatePicker
          selected={selectedDate}
          placeholderText='Filtro por fecha'
          onChange={(date) => {
            setSelectedDate(date);
            selectDate(date);
          }}
        />
      </div>
        {selectedStateFilter && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={resetTable}> Reiniciar Tabla</button>
        )}
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
              <td class="px-6 py-4">{item.EstadoPago == true ? 'Aceptado' : item.EstadoActividad == false ? 'Cancelado' : 'Pendiente'}</td>
    
                {item.EstadoActividad && (
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={() => cancelEstado(item.ReservacionCodigo)}>Cancelar</button>
                )}
                           
                {!item.EstadoPago && item.EstadoActividad && (
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={() => aprobeEstado(item.ReservacionCodigo)}>Aceptar</button>
                )}
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Lista;