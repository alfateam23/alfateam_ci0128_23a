import React, { useEffect, useState } from 'react';
import DatePicker from "./DatePicker";
import "flowbite";
import ReservationTable from './TablaReservaciones';

function Lista() {
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState(null);
  const [selectedStateFilter, setSelectedStateFilter] = useState('');
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
    fetch(`/backend/reservationDetails/updateReservationEstadoActividad/${ReservacionCodigo}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            EstadoActividad: false,
        }),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
        setCancelado(0);
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
    fetch(`/backend/reservationDetails/updateReservationEstadoPago/${ReservacionCodigo}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            EstadoPago: true,
        }),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
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
          <h1>Reservaciones</h1>
        </div>
      </div>
      <div className="row">
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
      </div>
      <ReservationTable
        data={data}
        resetTable={resetTable}
        cancelEstado={cancelEstado}
        aprobeEstado={aprobeEstado}
      />
    </div>
  );
}

export default Lista;
