import styled from "styled-components";
import { Dropdown } from "antd";

//Se utiliza para tener colores predefinidos para toda la app
const colores = {
  borde: "#0075ff",
  error: "#bb2929",
  exito: "#1ed12d",
};

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
  height: 35px;
  width: 26%;
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

export { ButtonDropDown, DropDown };
