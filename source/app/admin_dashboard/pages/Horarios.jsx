import React, { useState } from 'react';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function Horarios() {
    const [horaEntrada, setHoraEntrada] = useState(null);
    const [horaSalida, setHoraSalida] = useState(null);
  
    const handleHoraEntradaChange = (time) => {
      setHoraEntrada(time);
    };
  
    const handleHoraSalidaChange = (time) => {
      setHoraSalida(time);
    };
  
    const convertirADayjs = (time) => {
      return dayjs(time, 'HH:mm');
    };
  
    return (
      <div>
        <h1 className="font-sans text-4xl rounded-none py-4 m-3" >Configuracion de horarios</h1>
        <div>
          <p className="font-sans rounded-none py-4 m-3">Hora de entrada: {horaEntrada ? horaEntrada.format('HH:mm') : ''}</p>
          <p className="font-sans rounded-none py-4 m-3">Hora de salida: {horaSalida ? horaSalida.format('HH:mm') : ''}</p>
        </div>
        <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nueva hora de entrada:</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileTimePicker
            value={horaEntrada ? convertirADayjs(horaEntrada) : null}
            onChange={handleHoraEntradaChange}
          />
        </LocalizationProvider>
  
        <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nueva hora de salida:</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileTimePicker
            value={horaSalida ? convertirADayjs(horaSalida) : null}
            onChange={handleHoraSalidaChange}
          />
        </LocalizationProvider>
  
  
      </div>
    );
  };

export default Horarios;