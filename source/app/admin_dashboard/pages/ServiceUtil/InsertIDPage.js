import React, {useState} from "react";
import { checkVisitorExistance } from "./ServiceAPI";
import { MyModal } from "../../../reservation_page/Modal";
import {
  TextInput,
  Label,
  Button
} from 'flowbite-react';

export const InsertIDPage = ({setPage, setVisitorInfo}) => {
  const [id,setID] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  function handleChange(event) {
    setID(event.target.value);
  }
  async function validVisitor() {
    const result = await checkVisitorExistance(id);
    if (result[0].EmailExists !== undefined) {
      setOpenModal(true);
    } else {
      setVisitorInfo(result[0]);
      setPage(1);
    }
  }
  return (
    <div className="flex flex-row space-x-14">
      <div>
        <MyModal openModal={openModal} setOpenModal={setOpenModal}
        title={"Error al obtener información del visitante"}
        body={"Cliente no existente"}
        showFooter={null}/>
        <div className="mb-2 block">
          <Label
            htmlFor="getId"
            value="Digite la cédula del visitante"
          />
        </div>
        <TextInput
          id="getId"
          placeholder="123456789"
          required
          type="text"
          onChange={handleChange}
          value={id}
        />
      </div>
      <div className="translate-y-8">
        <Button onClick={validVisitor}>
          Buscar Usuario
        </Button>
      </div>
    </div>
  );
};
