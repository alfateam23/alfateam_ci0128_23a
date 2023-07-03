import React, {useEffect, useState} from "react";
import {
  LocalizationProvider,
  DateTimePicker
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Table,
Button,
Dropdown } from 'flowbite-react';
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";
import { TableRow } from "flowbite-react/lib/esm/components/Table/TableRow";
import { DisplayVisitorInfo,
SelectService,
SelectUseTime } from "./ComponentsInsertService";
import {values, getServices, saveService} from "./ServiceAPI"

export const ServicePage = ({visitorInfo}) => {
  const [dateTime, setDateTime] = useState(null);
  const [serviceType, setServiceType] = useState(null);
  const [useTime, setUseTime] = useState(null);
  const [services, setServices] = useState(null);
  const [price, setPrice] = useState(null);
  useEffect(()=>{
    async function servicesAPIReq() {
      const result = await getServices();
      setServices(result);
    }
    servicesAPIReq();
  },[]);

  useEffect(()=>{
    if (serviceType && useTime && services) {
      const amount = getMontoAndMoneda(serviceType,
        useTime, services);
      if (amount) setPrice(amount.MONTO + " " + amount.MONEDA);
    }
  },[serviceType, useTime, services]);

  return (
    <div>
      <Button onClick={()=>window.location.reload()}
      className="mb-10" color="gray">
        Regresar a ingresar usuario
      </Button>
      <div className="flex flex-col space-y-10
      justify-center items-center">
        <DisplayVisitorInfo visitorInfo={visitorInfo}/>
        <div className="flex flex-row space-x-10">
          <SelectService setServiceType={setServiceType}
          serviceType={serviceType}/>
          <SelectUseTime setUseTime={setUseTime}
          serviceType={serviceType} useTime={useTime}/>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker label="Día y hora de inicio" 
            value={dateTime} onChange={(newDate)=>setDateTime(newDate)}/>
          </LocalizationProvider>
        </div>
        <div className="flex felx-row space-x-5
        bg-white rounded-md px-7 py-3">
          <p>Precio</p>
          <p>{price? price : "0.00"}</p>
        </div>
        <Button color="gray" onClick={async ()=>{const result = await saveService(serviceType,useTime,
          dateTime.$d, visitorInfo.Cedula)
          if(result === "Inserted") window.location.reload()}}>
          Guardar
        </Button>
      </div>
    </div>
  );
};

function getMontoAndMoneda(nombre, tiempo, data) {
  const item = data.find((item) => item.Nombre === nombre && item.Tiempo === tiempo);
  if (item) {
    return {
      MONTO: item.MONTO,
      MONEDA: item.MONEDA,
    };
  }
  return null;
}
