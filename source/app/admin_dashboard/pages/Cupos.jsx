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

  useEffect(() => {
    fetch("/backend/quota/P")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCupoPicnicTotal(data.CupoTotal);
        setCupoPicnicLinea(data.CupoOnline);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch("/backend/quota/C")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCupoCampingTotal(data.CupoTotal);
        setCupoCampingLinea(data.CupoOnline);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
      setCupoCampingTotal(nuevoCupoCampingTotal);
    }

    if (nuevoCupoCampingLinea !== '') {
      setCupoCampingLinea(nuevoCupoCampingLinea);
    }
  };

  useEffect(() => {
    let result = null;
    fetch('/backend/quota/update', {
      method: 'PUT',
      body: JSON.stringify({
        area: 'C',
        total: cupoCampingTotal,
        online: cupoCampingLinea
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => {
      if (!res.ok) {
        console.log('Network response was not ok');
      }
      return res.json();
    }).then((data) => {
    console.log("Cupos virtuales enviados del Front:", data.total)
    console.log("Cupos totales obtenidos del Front:", data.online)
      result = data;
    })
    .catch((error) => {
      console.error('Error getting user information:', error);
    });

  }, [cupoCampingTotal,cupoCampingLinea]);


  //Actualizar Cupos de pincnic
  const ActualizarCupoPicnic = () => {
    if (nuevoCupoPicnicTotal !== '') {
      setCupoPicnicTotal(nuevoCupoPicnicTotal);
    }

    if (nuevoCupoPicnicLinea !== '' && cupoPicnicTotal !== '') {
      setCupoPicnicLinea(nuevoCupoPicnicLinea);
    }
  };

  useEffect(() => {
    let result = null;
    fetch('/backend/quota/update', {
      method: 'PUT',
      body: JSON.stringify({
        area: 'P',
        total: cupoPicnicTotal,
        online: cupoPicnicLinea
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => {
      if (!res.ok) {
        console.log('Network response was not ok');
      }
      return res.json();
    }).then((data) => {
    console.log("Cupos virtuales enviados del Front:", data.total)
    console.log("Cupos totales obtenidos del Front:", data.online)
      result = data;
    })
    .catch((error) => {
      console.error('Error getting user information:', error);
    });

  }, [cupoPicnicTotal,cupoPicnicLinea]);


return (
  <div>
    <h1 className="font-sans text-4xl rounded-none py-4 m-3">Configuracion de cupos de Picnic</h1>
      <p className="font-sans rounded-none py-4 m-3">Cupos de picnic totales: {cupoPicnicTotal}</p>
      <p className="font-sans rounded-none py-4 m-3">Cupos de picnic en línea: {cupoPicnicLinea}</p>
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
      <p className="font-sans rounded-none py-4 m-3">Cupos de camping totales: {cupoCampingTotal}</p>
      <p className="font-sans rounded-none py-4 m-3">Cupos de camping en línea: {cupoCampingLinea}</p>
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
