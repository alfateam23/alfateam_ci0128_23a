import React, {useState} from "react";
import { GoInfo } from "react-icons/go";
import { Button, Modal } from 'flowbite-react';

export const MyModal = ({title, body, openModal, setOpenModal}) => {
  return (
    <>
      <Modal show={openModal === true} onClose={() => setOpenModal(true)}>
        <Modal.Header>
          {title}
        </Modal.Header>
        <Modal.Body>
          <div>
            {!body ? 'Loading...' : 
            <ReviewModalBody body={body}/>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>
            Actualizar Datos
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Continuar sin actualizar datos
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

function formatKey(key) {
  const formattedKey = key.replace(/([A-Z])/g, ' $1');
  return formattedKey.trim();
}


const ReviewModalBody = ({body}) => {
  if (body.result.userInfo.EmailExists === false) return (<div>Enviando Correo...</div>);
  const userInfo = body.result.userInfo;
  const userPhone = body.result.userPhone;
  return (
    <div className="divide-y">
      <div className="flex flex-row space-x-2">
        <p className="text-lg text-gray-600 font-bold">
          Se han encontrado registros con este usuario
        </p>
        <button onClick={()=>alert('Solo se puede información de una persona con el mismo correo')}>
          <GoInfo size="1.2rem" className="text-gray-600"/>
        </button>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {Object.entries(userInfo).map(([key, value])=>(
            <div>
              <p className="text-gray-500 font-bold">
                {formatKey(key)}
              </p>
              <p className="font-bold">
                {value}
              </p>
            </div>
          ))}
        </div>
        <p className="font-bold text-gray-500">
          Numeros de Telefono
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {userPhone.map((Item)=>(
            <div>
              <p className="font-bold">
                {Item.Numero}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};