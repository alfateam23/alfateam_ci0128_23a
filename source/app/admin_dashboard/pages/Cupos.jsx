import React, { useEffect, useState } from 'react';
import { Input, Button } from 'antd';

function Cupos() {
  const [cupoPicnicTotal, setCupoPicnicTotal] = useState('');
  const [cupoPicnicLinea, setCupoPicnicLinea] = useState('');
  const [cupoCampingTotal, setCupoCampingTotal] = useState('');
  const [cupoCampingLinea, setCupoCampingLinea] = useState('');
  const [nuevoCupoPicnicTotal, setNuevoCupoPicnicTotal] = useState('');
  const [nuevoCupoPicnicLinea, setNuevoCupoPicnicLinea] = useState('');
  const [nuevoCupoCampingTotal, setNuevoCupoCampingTotal] = useState('');
  const [nuevoCupoCampingLinea, setNuevoCupoCampingLinea] = useState('');

/*
  useEffect(() => {
    Promise.all([
      fetch("/backend/reservationDetails/getCuposPicnicTotal"),
      fetch("/backend/reservationDetails/getCuposPicnicLinea"),
      fetch("/backend/reservationDetails/getCuposCampingTotal"),
      fetch("/backend/reservationDetails/getCuposCampingLinea")
    ])
      .then((responses) => {
        return Promise.all(responses.map((res) => res.json()));
      })
      .then(([cupoPicnicTotal, cupoPicnicLinea, cupoCampingTotal, cupoCampingLinea]) => {
        setCupoPicnicTotal(cupoPicnicTotal);
        setCupoPicnicLinea(cupoPicnicLinea);
        setCupoCampingTotal(cupoCampingTotal);
        setCupoCampingLinea(cupoCampingLinea);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
*/
  const CupoPicnicTotalChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    setNuevoCupoPicnicTotal(value);
  };

  const CupoPicnicLineaChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    setNuevoCupoPicnicLinea(value);
  };

  const CupoCampingTotalChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    setNuevoCupoCampingTotal(value);
  };

  const CupoCampingLineaChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    setNuevoCupoCampingLinea(value);
  };

  //Actualizar los cupos de Camping
  const ActualizarCupoCamping = () => {
    if (nuevoCupoCampingTotal !== '') {
      if (nuevoCupoCampingLinea !== '' && parseInt(nuevoCupoCampingTotal) <= parseInt(nuevoCupoCampingLinea)) {
        window.alert('No pueden haber más cupos en línea que cupos totales.');
        return;
      }
  
      setCupoCampingTotal(nuevoCupoCampingTotal);
    }
  
    if (nuevoCupoCampingLinea !== '' && cupoCampingTotal !== '') {
      if (parseInt(nuevoCupoCampingLinea) > parseInt(cupoCampingTotal)) {
        window.alert('No pueden haber más cupos en línea que cupos totales.');
        return;
      }
  
      setCupoCampingLinea(nuevoCupoCampingLinea);
    }
  };
  /*
  useEffect(() => {
    if (nuevoCupoCampingTotal !== '' && nuevoCupoCampingLinea !== '' && parseInt(nuevoCupoCampingTotal) <= parseInt(nuevoCupoCampingLinea)) {
      window.alert('No pueden haber más cupos en línea que cupos totales.');
      return;
    }
  
    if (nuevoCupoCampingTotal !== '') {
      setCupoCampingTotal(nuevoCupoCampingTotal);
    }
  
    if (nuevoCupoCampingLinea !== '' && cupoCampingTotal !== '') {
      if (parseInt(nuevoCupoCampingLinea) > parseInt(cupoCampingTotal)) {
        window.alert('No pueden haber más cupos en línea que cupos totales.');
        return;
      }
  
      setCupoCampingLinea(nuevoCupoCampingLinea);
    }
  }, [nuevoCupoCampingTotal, nuevoCupoCampingLinea, cupoCampingTotal]);
*/
  //Actualizar Cupos de pincnic
  const ActualizarCupoPicnic = () => {
    if (nuevoCupoPicnicTotal !== '') {
      if (nuevoCupoPicnicLinea !== '' && parseInt(nuevoCupoPicnicTotal) <= parseInt(nuevoCupoPicnicLinea)) {
        window.alert('No pueden haber más cupos en linea que cupos totales".');
        return;
      }

      setCupoPicnicTotal(nuevoCupoPicnicTotal);
    }

    if (nuevoCupoPicnicLinea !== '' && cupoPicnicTotal !== '') {
      if (parseInt(nuevoCupoPicnicLinea) > parseInt(cupoPicnicTotal)) {
        window.alert('No pueden haber más cupos en linea que cupos totales".');
        return;
      }

      setCupoPicnicLinea(nuevoCupoPicnicLinea);
    }
  };
  
/*
  useEffect(() => {
    if (nuevoCupoPicnicTotal !== '' && nuevoCupoPicnicLinea !== '' && parseInt(nuevoCupoPicnicTotal) <= parseInt(nuevoCupoPicnicLinea)) {
      window.alert('No pueden haber más cupos en línea que cupos totales.');
      return;
    }
  
    if (nuevoCupoPicnicTotal !== '') {
      setCupoPicnicTotal(nuevoCupoPicnicTotal);
    }
  
    if (nuevoCupoPicnicLinea !== '' && cupoPicnicTotal !== '') {
      if (parseInt(nuevoCupoPicnicLinea) > parseInt(cupoPicnicTotal)) {
        window.alert('No pueden haber más cupos en línea que cupos totales.');
        return;
      }
  
      setCupoPicnicLinea(nuevoCupoPicnicLinea);
    }
  }, [nuevoCupoPicnicTotal, nuevoCupoPicnicLinea, cupoPicnicTotal]);

*/


  return (
    <div>
      <h1 className="font-sans text-4xl rounded-none py-4 m-3">Configuracion de cupos</h1>
      <div>
        <p className="font-sans rounded-none py-4 m-3">Cupos de picnic totales: {cupoPicnicTotal}</p>
        <p className="font-sans rounded-none py-4 m-3">Cupos de picnic en línea: {cupoPicnicLinea}</p>
        <p className="font-sans rounded-none py-4 m-3">Cupos de camping totales: {cupoCampingTotal}</p>
        <p className="font-sans rounded-none py-4 m-3">Cupos de camping en línea: {cupoCampingLinea}</p>
      </div>
      <h1 className="font-sans text-4xl rounded-none py-4 m-3">Configuracion de cupos de Picnic</h1>
      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nuevo cupo total:</label>
      <Input value={nuevoCupoPicnicTotal} onChange={CupoPicnicTotalChange} />
      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nuevo cupo en línea:</label>
      <Input
        value={nuevoCupoPicnicLinea}
        onChange={CupoPicnicLineaChange}
        disabled={!cupoPicnicTotal}
      />

<Button
  className="bg-[#FF8C32] hover:bg-[#f79e4a] text-gray font-bold px-6 py-3 rounded m-4 text-lg flex items-center"
  onClick={ActualizarCupoPicnic}
>Actualizar
</Button>

<h1 className="font-sans text-4xl rounded-none py-4 m-3">Configuracion de cupos de Camping</h1>
      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nuevo cupo total:</label>
      <Input value={nuevoCupoCampingTotal} onChange={CupoCampingTotalChange} />
      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nuevo cupo en línea:</label>
      <Input
        value={nuevoCupoCampingLinea}
        onChange={CupoCampingLineaChange}
        disabled={!cupoCampingTotal}
      />

<Button
  className="bg-[#FF8C32] hover:bg-[#f79e4a] text-gray font-bold px-6 py-3 rounded m-4 text-lg flex items-center"
  onClick={ActualizarCupoCamping}
>Actualizar
</Button>
    </div>
  );
}

export default Cupos;
