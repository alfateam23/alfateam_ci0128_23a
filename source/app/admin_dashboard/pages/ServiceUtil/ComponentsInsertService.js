import React, {useState, useEffect} from "react";
import { Dropdown, Table } from "flowbite-react";

export const DisplayVisitorInfo = ({visitorInfo}) => {
  const header = ["Cédula", "Nombre", "Apellido"];
  const body = [visitorInfo.Cedula, visitorInfo.PrimerNombre,
  visitorInfo.PrimerApellido];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 px-6">
          <thead className="text-xl text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-[#FF8C32]">
                {header.map(heading => {
                        return <th key={heading}
                        scope="col" className="px-6 py-3">{heading}</th>
                        })}
              </tr>
          </thead>
          <tbody>
              <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {body.map((key) => {
                        return <td key={key} className="px-6 py-4">{key}</td>
                  })}
            </tr>
          </tbody>
      </table>
    </div>
  );
};

export const SelectService = ({serviceType,setServiceType}) => {
  const types =  ["Bicicletas","Kayak Individual"
  ,"Kayak Doble"];
  const handleSelect = (value) => {
    setServiceType(value);
  }
  return (
    <Dropdown
      label={serviceType ? serviceType : "Seleccione el servicio"}
      color="gray"
    >
      {types.map((item)=>(
        <Dropdown.Item onClick={()=>handleSelect(item)}>
          {item}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export const SelectUseTime = ({
  useTime, setUseTime, serviceType}) => {
  const [timeShow, setTimeShow] = useState(null);
  const bicycleTime = {"04:00:00" : "4 horas",
  "08:00:00":"8 horas","00:00:00":"24 horas"};
  const kayakTime = {"00:30:00" : "30 minutos",
  "01:00:00": "1 hora"}
  const handleSelect = (value) => {
    setUseTime(value);
  }
  useEffect(()=>{
    serviceType === 'Bicicletas' ? setTimeShow(bicycleTime[useTime]) :
    setTimeShow(kayakTime[useTime]);
  },[useTime]);
  if (serviceType === 'Bicicletas') {
    return (
      <Dropdown
        label={timeShow ? timeShow : "Seleccione el tiempo"}
        color="gray"
      >
        {Object.entries(bicycleTime).map(([key, value])=>(
          <Dropdown.Item onClick={()=>handleSelect(key)}>
            {value}
          </Dropdown.Item>
        ))}
      </Dropdown>
    );
  }
  return (
    <Dropdown
      label={timeShow ? timeShow : "Seleccione el tiempo"}
      color="gray"
    >
      <Dropdown.Item onClick={()=>handleSelect("00:30:00")}>
        30 minutos
      </Dropdown.Item>
      <Dropdown.Item onClick={()=>handleSelect("01:00:00")}>
        1 hora
      </Dropdown.Item>
    </Dropdown>
  );
};

