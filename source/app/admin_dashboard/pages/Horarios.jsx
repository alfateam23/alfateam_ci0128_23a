import React, { useEffect, useState } from 'react';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

function Horarios() {
  const [horaEntradaP, setHoraEntradaP] = useState(null);
  const [horaSalidaP, setHoraSalidaP] = useState(null);
  const [horaEntradaC, setHoraEntradaC] = useState(null);
  const [horaSalidaC, setHoraSalidaC] = useState(null);

  useEffect(() => {
    fetch("/backend/schedule/P")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.HoraApertura)
        const fechaHora = moment(data.HoraApertura);
        const date = new Date(fechaHora);
        const horaAperturaFormateada = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        setHoraEntradaP(horaAperturaFormateada);
        const fechaHora2 = moment(data.HoraCierre);
        const date2 = new Date(fechaHora2);
        const horaAperturaFormateada2 = date2.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });;
        setHoraSalidaP(horaAperturaFormateada2);
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
        setHoraEntradaC(horaAperturaFormateada);
        const fechaHora2 = moment(data.HoraCierre);
        const date2 = new Date(fechaHora2);
        const horaAperturaFormateada2 = date2.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });;
        setHoraSalidaC(horaAperturaFormateada2);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  const horaEntradaPChange = (time) => {
    setHoraEntradaP(time.format('HH:mm'));
  };
  
  useEffect(() => {
    if (horaEntradaP) {
      console.log('Valores a enviar en la solicitud PUT:');
      console.log('area:', 'P');
      console.log('open:', horaEntradaP);
      console.log('close:', horaSalidaP);
  
      fetch('/backend/schedule/update', {
        method: 'PUT',
        body: JSON.stringify({
          area: 'P',
          open: horaEntradaP,
          close: horaSalidaP
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
  }, [horaEntradaP, horaSalidaP]);

  const horaSalidaPChange = (time) => {
    setHoraSalidaP(time.format('HH:mm'));
  };
  useEffect(() => {
    if (horaSalidaP) {
  
      fetch('/backend/schedule/update', {
        method: 'PUT',
        body: JSON.stringify({
          area: 'P',
          open: horaEntradaP,
          close: horaSalidaP
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
  }, [horaEntradaP, horaSalidaP]);

  const horaEntradaCChange = (time) => {
    setHoraEntradaC(time.format('HH:mm'));
  };

  useEffect(() => {
    if (horaEntradaC) {
  
      fetch('/backend/schedule/update', {
        method: 'PUT',
        body: JSON.stringify({
          area: 'C',
          open: horaEntradaC,
          close: horaSalidaC
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
  }, [horaEntradaC, horaSalidaC]);

  const horaSalidaCChange = (time) => {
    setHoraSalidaC(time.format('HH:mm'));
  };

  useEffect(() => {
    if (horaSalidaC) {
  
      fetch('/backend/schedule/update', {
        method: 'PUT',
        body: JSON.stringify({
          area: 'C',
          open: horaEntradaC,
          close: horaSalidaC
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
  }, [horaEntradaC, horaSalidaC]);

  const convertirAMoment = (time) => {
    return moment(time, 'HH:mm');
  };
  
  const formatearHora = (hora) => {
    return moment(hora, 'HH:mm').format('hh:mm A');
  };

  return (
    <div>
      <h2 className="font-sans text-4xl rounded-none py-4 m-3">Configurar horas para Picnic</h2>
      <p className="font-sans rounded-none py-4 m-3">        Hora de entrada para picnic: {horaEntradaP ? formatearHora(horaEntradaP) : ''}
</p>
      <p className="font-sans rounded-none py-4 m-3">Hora de salida para picnic: {horaSalidaP ? formatearHora(horaSalidaP) : ''}</p>
      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nueva hora de entrada:</label>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileTimePicker
          value={horaEntradaP ? convertirAMoment(horaEntradaP) : null}
          onChange={horaEntradaPChange}
        />
      </LocalizationProvider>

      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nueva hora de salida:</label>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileTimePicker
          value={horaSalidaP ? convertirAMoment(horaSalidaP) : null}
          onChange={horaSalidaPChange}
        />
      </LocalizationProvider>
      <h2 className="font-sans text-4xl rounded-none py-4 m-3">Configurar horas para Camping</h2>
        <p className="font-sans rounded-none py-4 m-3">Hora de entrada para camping: {horaEntradaC ? formatearHora(horaEntradaC) : ''}</p>
        <p className="font-sans rounded-none py-4 m-3">Hora de salida para camping: {horaSalidaC ? formatearHora(horaSalidaC) : ''}</p>
      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nueva hora de entrada:</label>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileTimePicker
          value={horaEntradaC ? convertirAMoment(horaEntradaC) : null}
          onChange={horaEntradaCChange}
        />
      </LocalizationProvider>

      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nueva hora de salida:</label>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileTimePicker
          value={horaSalidaC ? convertirAMoment(horaSalidaC) : null}
          onChange={horaSalidaCChange}
        />
      </LocalizationProvider>
    </div>
  );
}

export default Horarios;
