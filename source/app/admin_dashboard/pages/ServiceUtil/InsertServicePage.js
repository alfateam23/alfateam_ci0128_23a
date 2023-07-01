import React, {useState} from "react";
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

export const ServicePage = ({visitorInfo}) => {
  const [dateTime, setDateTime] = useState(null);
  const [serviceType, setServiceType] = useState(null);
  const [useTime, setUseTime] = useState(null);

  return (
    <div>
      <Button onClick={()=>window.location.reload()}>
        Regresar a ingresar usuario
      </Button>
      <div className="flex felx-col space-y-52
      justify-center items-center">
        <div className="">
          <DisplayVisitorInfo visitorInfo={visitorInfo}/>
        </div>
        <div className="flex flex-row space-x-20">
          <SelectService setServiceType={setServiceType}/>
          <SelectUseTime setUseTime={setUseTime}
          serviceType={serviceType}/>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker label="Basic date time picker" />
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

const DisplayVisitorInfo = ({visitorInfo}) => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>
          Cédula
        </Table.HeadCell>
        <Table.HeadCell>
          Nombre
        </Table.HeadCell>
        <Table.HeadCell>
          Apellido
        </Table.HeadCell>
      </Table.Head>
      <Table.Body>
        <Table.Row className="bg-white
        dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>
            {visitorInfo.Cedula}
          </Table.Cell>
          <Table.Cell>
            {visitorInfo.PrimerNombre}
          </Table.Cell>
          <Table.Cell>
            {visitorInfo.PrimerApellido}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

const SelectService = ({setServiceType}) => {
  return (
    <Dropdown
      label="Seleccione el servicio"
      onChange={(e) => setServiceType(e.target.value)}
    >
      <Dropdown.Item value="Bicicletas">
        Bicicletas
      </Dropdown.Item>
      <Dropdown.Item value="Kayak Individual">
        Kayak Individual
      </Dropdown.Item>
      <Dropdown.Item value="Kayak Doble">
        Kayak Doble
      </Dropdown.Item>
    </Dropdown>
  );
};

const SelectUseTime = ({setUseTime, serviceType}) => {
  if (serviceType === 'Bicicletas') {
    return (
      <Dropdown
        label="Seleccione el tiempo"
        onChange={(e) => setUseTime(e.target.value)}
      >
        <Dropdown.Item value="04:00:00">
          4 horas
        </Dropdown.Item>
        <Dropdown.Item value="08:00:00">
          8 horas
        </Dropdown.Item>
        <Dropdown.Item value="00:00:00">
          24 horas
        </Dropdown.Item>
      </Dropdown>
    );
  }
  return (
    <Dropdown
      label="Seleccione el tiempo"
      onChange={(e) => setUseTime(e.target.value)}
    >
      <Dropdown.Item value="00:30:00">
        30 minutos
      </Dropdown.Item>
      <Dropdown.Item value="01:00:00">
        1 hora
      </Dropdown.Item>
    </Dropdown>
  );
};
