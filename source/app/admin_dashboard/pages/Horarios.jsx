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
        const fechaHora = moment(data.HoraApertura);
        const horaAperturaFormateada = fechaHora.format('HH:mm');
        setHoraEntradaP(horaAperturaFormateada);
        const fechaHora2 = moment(data.HoraCierre);
        const horaAperturaFormateada2 = fechaHora2.format('HH:mm');
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
        const horaAperturaFormateada = fechaHora.format('HH:mm');
        setHoraEntradaC(horaAperturaFormateada);
        const fechaHora2 = moment(data.HoraCierre);
        const horaAperturaFormateada2 = fechaHora2.format('HH:mm');
        setHoraSalidaC(horaAperturaFormateada2);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const horaEntradaPChange = (time) => {
    setHoraEntradaP(time.format('HH:mm'));
  };

  const horaSalidaPChange = (time) => {
    setHoraSalidaP(time.format('HH:mm'));
  };

  const horaEntradaCChange = (time) => {
    setHoraEntradaC(time.format('HH:mm'));
  };

  const horaSalidaCChange = (time) => {
    setHoraSalidaC(time.format('HH:mm'));
  };

  const convertirAMoment = (time) => {
    return moment(time, 'HH:mm');
  };

  return (
    <div>
      <h2 className="font-sans text-4xl rounded-none py-4 m-3">Configurar horas para Picnic</h2>
      <p className="font-sans rounded-none py-4 m-3">Hora de entrada para picnic: {horaEntradaP ? horaEntradaP : ''}</p>
      <p className="font-sans rounded-none py-4 m-3">Hora de salida para picnic: {horaSalidaP ? horaSalidaP : ''}</p>
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
        <p className="font-sans rounded-none py-4 m-3">Hora de entrada para camping: {horaEntradaC ? horaEntradaC : ''}</p>
        <p className="font-sans rounded-none py-4 m-3">Hora de salida para camping: {horaSalidaC ? horaSalidaC : ''}</p>
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
