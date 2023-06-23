import React, { useState } from 'react';
import { Input, Button } from 'antd';

function Cupos() {
  const [cupoTotal, setcupoTotal] = useState('');
  const [cupoLinea, setcupoLinea] = useState('');
  const [nuevoCupoTotal, setNuevoCupoTotal] = useState('');
  const [nuevoCupoLinea, setNuevoCupoLinea] = useState('');

  const CupoTotalChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    setNuevoCupoTotal(value);
  };

  const CupoLineaChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    setNuevoCupoLinea(value);
  };

  const ActualizarClick = () => {
    if (nuevoCupoTotal !== '') {
      if (nuevoCupoLinea !== '' && parseInt(nuevoCupoTotal) <= parseInt(nuevoCupoLinea)) {
        window.alert('No pueden haber más cupos en linea que cupos totales".');
        return;
      }

      setcupoTotal(nuevoCupoTotal);
    }

    if (nuevoCupoLinea !== '' && cupoTotal !== '') {
      if (parseInt(nuevoCupoLinea) > parseInt(cupoTotal)) {
        window.alert('No pueden haber más cupos en linea que cupos totales".');
        return;
      }

      setcupoLinea(nuevoCupoLinea);
    }
  };

  return (
    <div>
      <h1 className="font-sans text-4xl rounded-none py-4 m-3">Configuracion de cupos</h1>
      <div>
        <p className="font-sans rounded-none py-4 m-3">Cupo total: {cupoTotal}</p>
        <p className="font-sans rounded-none py-4 m-3">Cupos en línea: {cupoLinea}</p>
      </div>
      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nuevo cupo total:</label>
      <Input value={nuevoCupoTotal} onChange={CupoTotalChange} />

      <label className="font-sans rounded-none py-4 m-3 flex flex-col">Nuevo cupo en línea:</label>
      <Input
        value={nuevoCupoLinea}
        onChange={CupoLineaChange}
        disabled={!cupoTotal}
      />

<Button
  className="bg-[#FF8C32] hover:bg-[#f79e4a] text-gray font-bold px-6 py-3 rounded m-4 text-lg flex items-center"
  onClick={ActualizarClick}
>Actualizar
</Button>
    </div>
  );
}

export default Cupos;
