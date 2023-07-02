import React, { useEffect, useState } from 'react';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

function Horarios() {
  const [horaEntradaPicnic, setHoraEntradaPicnic] = useState(null);
  const [horaSalidaPicnic, setHoraSalidaPicnic] = useState(null);
  const [horaEntradaCamping, setHoraEntradaCamping] = useState(null);
  const [horaSalidaCamping, setHoraSalidaCamping] = useState(null);

  useEffect(() => {
    fetch("/backend/schedule/P")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const fechaHora = moment(data.HoraApertura);
        const date = new Date(fechaHora);
        const horaAperturaFormateada = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        setHoraEntradaPicnic(horaAperturaFormateada);
        const fechaHora2 = moment(data.HoraCierre);
        const date2 = new Date(fechaHora2);
        const horaAperturaFormateada2 = date2.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });;
        setHoraSalidaPicnic(horaAperturaFormateada2);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch("/backend/schedule/C")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const fechaHora = moment(data.HoraApertura);
        const date = new Date(fechaHora);
        const horaAperturaFormateada = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        setHoraEntradaCamping(horaAperturaFormateada);
        const fechaHora2 = moment(data.HoraCierre);
        const date2 = new Date(fechaHora2);
        const horaAperturaFormateada2 = date2.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });;
        setHoraSalidaCamping(horaAperturaFormateada2);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  const horaEntradaPicnicChange = (time) => {
    setHoraEntradaPicnic(time.format('HH:mm'));
  };
  
  useEffect(() => {
    if (horaEntradaPicnic) {
      fetch('/backend/schedule/update', {
        method: 'PUT',
        body: JSON.stringify({
          area: 'P',
          open: horaEntradaPicnic,
          close: horaSalidaPicnic
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => {
          if (!res.ok) {
            console.log('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          console.log('Data updated successfully:', data);
        })
        .catch((error) => {
          console.error('Error updating data:', error);
        });
    }
  }, [horaEntradaPicnic, horaSalidaPicnic]);

  const horaSalidaPicnicChange = (time) => {
    setHoraSalidaPicnic(time.format('HH:mm'));
  };
  useEffect(() => {
    if (horaSalidaPicnic) {
  
      fetch('/backend/schedule/update', {
        method: 'PUT',
        body: JSON.stringify({
          area: 'P',
          open: horaEntradaPicnic,
          close: horaSalidaPicnic
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => {
          if (!res.ok) {
            console.log('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          console.log('Data updated successfully:', data);
        })
        .catch((error) => {
          console.error('Error updating data:', error);
        });
    }
  }, [horaEntradaPicnic, horaSalidaPicnic]);

  const horaEntradaCampingChange = (time) => {
    setHoraEntradaCamping(time.format('HH:mm'));
  };

  useEffect(() => {
    if (horaEntradaCamping) {
  
      fetch('/backend/schedule/update', {
        method: 'PUT',
        body: JSON.stringify({
          area: 'C',
          open: horaEntradaCamping,
          close: horaSalidaCamping
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => {
          if (!res.ok) {
            console.log('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          console.log('Data updated successfully:', data);
        })
        .catch((error) => {
          console.error('Error updating data:', error);
        });
    }
  }, [horaEntradaCamping, horaSalidaCamping]);

  const horaSalidaCampingChange = (time) => {
    setHoraSalidaCamping(time.format('HH:mm'));
  };

  useEffect(() => {
    if (horaSalidaCamping) {
  
      fetch('/backend/schedule/update', {
        method: 'PUT',
        body: JSON.stringify({
          area: 'C',
          open: horaEntradaCamping,
          close: horaSalidaCamping
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => {
          if (!res.ok) {
            console.log('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          console.log('Data updated successfully:', data);
        })
        .catch((error) => {
          console.error('Error updating data:', error);
        });
    }
  }, [horaEntradaCamping, horaSalidaCamping]);

  const convertirAMoment = (time) => {
    return moment(time, 'HH:mm');
  };
  
  const formatearHora = (hora) => {
    return moment(hora, 'HH:mm').format('hh:mm A');
  };

  return (
    <div>
      <h2 className="font-sans text-4xl rounded-none py-4 m-3">Configurar horas para Picnic</h2>
      <p className="font-sans rounded-none py-4 m-3">        Hora de entrada para picnic: {horaEntradaPicnic ? formatearHora(horaEntradaPicnic) : ''}
</p>
      <p className="font-sans rounded-none py-4 m-3">Hora de salida para picnic: {horaSalidaPicnic ? formatearHora(horaSalidaPicnic) : ''}</p>
      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nueva hora de entrada:</label>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileTimePicker
          value={horaEntradaPicnic ? convertirAMoment(horaEntradaPicnic) : null}
          onChange={horaEntradaPicnicChange}
        />
      </LocalizationProvider>

      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nueva hora de salida:</label>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileTimePicker
          value={horaSalidaPicnic ? convertirAMoment(horaSalidaPicnic) : null}
          onChange={horaSalidaPicnicChange}
        />
      </LocalizationProvider>
      <h2 className="font-sans text-4xl rounded-none py-4 m-3">Configurar horas para Camping</h2>
        <p className="font-sans rounded-none py-4 m-3">Hora de entrada para camping: {horaEntradaCamping ? formatearHora(horaEntradaCamping) : ''}</p>
        <p className="font-sans rounded-none py-4 m-3">Hora de salida para camping: {horaSalidaCamping ? formatearHora(horaSalidaCamping) : ''}</p>
      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nueva hora de entrada:</label>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileTimePicker
          value={horaEntradaCamping ? convertirAMoment(horaEntradaCamping) : null}
          onChange={horaEntradaCampingChange}
        />
      </LocalizationProvider>

      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nueva hora de salida:</label>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileTimePicker
          value={horaSalidaCamping ? convertirAMoment(horaSalidaCamping) : null}
          onChange={horaSalidaCampingChange}
        />
      </LocalizationProvider>
    </div>
  );
}

export default Horarios;
