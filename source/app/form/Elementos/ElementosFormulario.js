/*
npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core
npm install react-fontawesome
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
npm install styled-components

si no funciona, entonces
npm install babel-plugin-styled-components --save-dev

*/

import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "antd";
import { Checkbox } from "antd";
// aqui van los estilos de los elementos del formulario

//Se utiliza para tener colores predefinidos para toda la app
const colores = {
  borde: "#0075ff",
  error: "#bb2929",
  exito: "#1ed12d",
};

//estilo para etiqueta formulario
const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  /*Para que sea resposive y se adapte a diferentes tamanos de pantallas*/
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

// estilo para los label
const Label = styled.label`
  display: block; /*Abarque el 100% del espacio disponible*/
  font-weight: 700; /*Negritas*/
  padding: 10px;
  min-height: 40px;
  cursor: pointer;

  ${(props) =>
    props.valido === "false" &&
    css`
      color: ${colores.error};
    `}
`;

// estilo para el GrupoInput
const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;
/*Esto configura los valores de Input */
const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;
  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  //valida si es verdadero y muestra al usuario
  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid transparent;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.div`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colores.error}; /*Hago referencia a los colores predeterminados*/
  display: none;

  ${(props) =>
    props.valido === "true" &&
    css`
      display: none;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
    `}
`;

// componente importado

const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${(props) =>
    props.valido === "false" &&
    css`
      opacity: 1;
      color: ${colores.error};
    `}
  ${(props) =>
    props.valido === "true" &&
    css`
      opacity: 1;
      color: ${colores.exito};
    `}
`;

const ContenedorTerminos = styled.div`
  grid-column: span 2;
  input {
    margin-right: 10px;
  }
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  grid-column: span 1;
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const Boton = styled.button`
  background: rgba(255, 175, 0, 0.7);
  margin-right: 20%;
  margin-bottom: 5%;
  padding: 8px;
  width: 100px;
  height: 40px;
  /*
  height: 45px;
  line-height: 45px;
  width: 30%;
  background: #000;
  color: #fff;
  ;*/
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;

  &:hover {
    box-shadow: 0px 3.2px 3.2px rgba(0, 0, 0, 0.25);
  }
  &:disabled {
    pointer-events: none; /* Desactiva los eventos del puntero */
  }
`;

const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
`;

const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  background: ${colores.error};
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;

const ButtonIncDec = styled.button`
  background-color: #fff;
  color: black;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  height: 35px;
  width: 35px;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    background-color: #007bff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    transform: translateY(0px);
  }

  &:disabled {
    pointer-events: none; /* Desactiva los eventos del puntero */
  }
`;

const ButtonDropDown = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background-color: ${colores.borde};
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 45px;
  width: 100%;
  white-space: nowrap; /* Evita el salto de línea del texto */
  overflow: hidden; /* Oculta el texto que excede el ancho del botón */
  text-overflow: ellipsis; /* Muestra puntos suspensivos (...) cuando el texto excede el ancho del botón */

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #007bff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.3);
  }
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const DropDown = styled(Dropdown)`
  .ant-dropdown-trigger {
    height: 45px;
  }

  .ant-dropdown-menu {
    background-color: #fff;
    color: #000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
  }

  .ant-dropdown-menu-item {
    padding: 8px 20px;
    font-size: 16px;
  }

  .ant-dropdown-menu-item:hover {
    background-color: ${colores.borde};
    color: #fff;
  }
`;

const CheckBox = styled(Checkbox.Group)`
  .ant-checkbox-wrapper {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
  }
  .ant-checkbox {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 2px solid #0075ff;
    transition: 0.3s ease all;
  }
`;

export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconoValidacion,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
  ButtonIncDec,
  ButtonDropDown,
  DropDown,
  CheckBox,
};