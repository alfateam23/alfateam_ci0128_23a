import React, { useEffect, useState } from 'react';
import DatePicker from "./DatePicker";
import "flowbite";
import ReservationTable from './TablaReservaciones';

function Lista() {
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState(null);
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
        setInitialData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filterElement = (field, value) => {
    let filteredData = [...initialData];
    if (field === 'selectedStateFilter') {
      setSelectedStateFilter(value);
      if (value === 'Cancelado') {
        filteredData = filteredData.filter((item) => item.EstadoActividad === false);
      } else if (value === 'Aceptado') {
        filteredData = filteredData.filter((item) => item.EstadoPago === true && item.EstadoActividad === true);
      } else if (value === 'Pendientes') {
        filteredData = filteredData.filter((item) => item.EstadoPago === false && item.EstadoActividad === true);
      }
      setData(filteredData);
    }
  };

  const resetTable = () => {
    setSelectedStateFilter('');
    setCalendarVisible(false);
    setData(initialData);
    const elementoCodigo1 = data.find(item => item.ReservacionCodigo === 29);
if (elementoCodigo1) {
  console.log(elementoCodigo1.EstadoPago);
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

  const cancelEstado = (ReservacionCodigo) => {
    const updatedData = data.map((item) => {
      if (item.ReservacionCodigo === ReservacionCodigo && item.EstadoActividad === true) {
          setCancelado(ReservacionCodigo);
          return { ...item, EstadoActividad: false };
      }
      return item;
    });
    setData(updatedData);
    window.location.reload();
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
    window.location.reload();
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

  const selectDate = (day) => {
    const filteredData = initialData.filter((item) => 
    (new Date(item.FechaInicio)).toDateString() === day.toDateString()
    );
    console.log(initialData);
    setSelectedStateFilter(day);
    setData(filteredData);
  };

  if (data === null) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="font-lexend text-center text-2xl">Reservaciones</h1>
        </div>
      </div>
      <div className="row">
      <div>
      <select
  className="rounded-xl my-4"
  value={selectedStateFilter}
  onChange={(event) => filterElement('selectedStateFilter', event.target.value)}
>
  <option value="" disabled selected>
    Filtro por estado
  </option>
  <option value="Aceptado">Aceptados</option>
  <option value="Cancelado">Cancelados</option>
  <option value="Pendientes">Pendientes</option>
</select>
</div>   
        <DatePicker
          selected={selectedDate}
          placeholderText='Filtro por fecha'
          onChange={(date) => {
            setSelectedDate(date);
            selectDate(date);
          }}
        />
        <div className="row col-12">
          {selectedStateFilter && (
          <button className="bg-[#FF8C32] hover:bg-[#FF8C32] text-black font-bold py-2 px-4 rounded my-4" onClick={resetTable}>Limpiar Filtro</button>
        )}</div>

      </div>
      <ReservationTable
  data={data}
  resetTable={resetTable}
  cancelEstado={cancelEstado}
  aprobeEstado={aprobeEstado}
  sortField={sortField}
  sortOrder={sortOrder}
  sortElements={sortElements}
/>
    </div>
  );
}

export default Lista;
