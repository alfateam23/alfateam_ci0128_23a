import React, {useEffect, useState } from 'react';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function Horarios() {
    const [horaEntrada, setHoraEntrada] = useState(null);
    const [horaSalida, setHoraSalida] = useState(null);
    /*
    useEffect(() => {
      fetch('/backend/horarios/getHorarios')
        .then((res) => {
          if (!res.ok) {
            console.log('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          // Si los datos estan de esta forma { horaEntrada: '09:00', horaSalida: '17:00' }
          const { horaEntrada, horaSalida } = data;
  
          setHoraEntrada(dayjs(horaEntrada, 'HH:mm'));
          setHoraSalida(dayjs(horaSalida, 'HH:mm'));
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
    */
    const horaEntradaChange = (time) => {
      setHoraEntrada(time);
    };
    
    /*
    useEffect(() => {
      setHoraEntradaDB(horaEntrada);
    }, [horaEntrada]);
*/
    const horaSalidaChange = (time) => {
      setHoraSalida(time);
    };

    /*
    useEffect(() => {
      setHoraSalidaDB(horaSalida);
    }, [horaSalida]);

    */
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
            onChange={horaEntradaChange}
          />
        </LocalizationProvider>
  
        <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nueva hora de salida:</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileTimePicker
            value={horaSalida ? convertirADayjs(horaSalida) : null}
            onChange={horaSalidaChange}
          />
        </LocalizationProvider>
  
  
      </div>
    );
  };

export default Horarios;