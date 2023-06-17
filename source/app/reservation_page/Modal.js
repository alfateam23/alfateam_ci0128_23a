import React, {useState} from "react";
import { GoInfo } from "react-icons/go";
import { Button, Modal } from 'flowbite-react';

export const MyModal = ({title, body, openModal, setOpenModal,
acceptButtonFunc, declineButtonFunc, showFooter}) => {
  return (
    <>
      <Modal show={openModal === true} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          {title}
        </Modal.Header>
        <Modal.Body>
          <div>
            {!body ? 'Loading...' : 
            <ReviewModalBody body={body}/>}
          </div>
        </Modal.Body>
        {!showFooter ? null :
        <div>
          <div>
          <Modal.Footer>
            Desea actualizar con los datos de esta nueva reserva?
          </Modal.Footer>
          </div>
          <Modal.Footer>
            <Button onClick={() => acceptButtonFunc(1)}>
              Actualizar Datos
            </Button>
            <Button color="gray" onClick={() => declineButtonFunc(0)}>
              Continuar sin actualizar datos
            </Button>
          </Modal.Footer>
        </div>
        }
      </Modal>
    </>
  );
};

function formatKey(key) {
  const formattedKey = key.replace(/([A-Z])/g, ' $1');
  return formattedKey.trim();
}


const ReviewModalBody = ({body}) => {
  if (body ===  "Correo Enviado!") {
    return (<div>{body}</div>); 
  }
  else if (body.result.userInfo.EmailExists !== undefined){
    return (<div>Enviando Correo...</div>);
  }
  const userInfo = body.result.userInfo;
  const userPhone = body.result.userPhone;
  return (
    <div className="divide-y">
      <div className="flex flex-row space-x-2">
        <p className="text-lg text-gray-600 font-bold">
          Se han encontrado registros previos con este número de cédula
        </p>
        <button onClick={()=>alert('Esta es la información de nuestros registros\
 para el usuario con el número de cédula dado')}>
          <GoInfo size="1.2rem" className="text-gray-600"/>
        </button>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {Object.entries(userInfo).map(([key, value])=>(
            <div className="whitespace-normal">
              <p className="text-gray-500 font-bold">
                {formatKey(key)}
              </p>
              <p className="font-bold overflow-auto">
                {value ? value : 'Ninguno'}
              </p>
            </div>
          ))}
        </div>
        {userPhone.length > 0 ?
        <div>
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
        : null}
      </div>
    </div>
  );
};