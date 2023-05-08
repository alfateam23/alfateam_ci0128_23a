//npm install react-modal

import React, { useState } from "react";

import { ComponenteInput, ComponenteInputIncDec } from "./Input";
import "./style.css";
import {
  Formulario,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError
} from "./Elementos/ElementosFormulario";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export const FormularioView = () => {
  /* Estados para cada tipo de dato que use para poder hacer comprobacion de datos */

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [apellido2, cambiarApellido2] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [edad, cambiarEdad] = useState({ campo: "", valido: null });
  const [placa, cambiarPlaca] = useState({ campo: "", valido: null });
  const [placa2, cambiarPlaca2] = useState({ campo: "", valido: null });
  const [placa3, cambiarPlaca3] = useState({ campo: "", valido: null });
  const [placa4, cambiarPlaca4] = useState({ campo: "", valido: null });
  const [placa5, cambiarPlaca5] = useState({ campo: "", valido: null });
  const [placa6, cambiarPlaca6] = useState({ campo: "", valido: null });

  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);
  //variable para llevar el total de personas
  const [counterFuera, setCounter] = useState(0);
  // variable para llevar cantidad de placas ingresadas
  const [counterPlacas, setCounterPlacas] = useState(0);
  const [mostrarPlacas, setMostrarPlacas] = useState(0);

  const [totalPersonas, setTotalPersonas] = useState(10);
  const [totalPlacas, setTotalPlacas] = useState(6); //totalPlacas = 6;

  const [counterAdultosNac, setCounterAdultosNac] = useState(0);
  const [counterMayorNiniosNac, setCounterMayorNiniosNac] = useState(0);
  const [counterAdultosExt, setCounterAdultosExt] = useState(0);
  const [counterMayorNiniosExt, setCounterMayorNiniosExt] = useState(0);

  //expresiones regulares para combrobar contenido
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido2: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    // alfanuméricos, puntos, guiones bajos, signos de más y signos de punto,
    edad: /\b([1-9]|[1-9][0-9]|1[01][0-9]|120)\b/,
    // verifica si una cadena representa una edad válida en el rango de 1 a 120 años.
    placa: /^(([A-Za-z]{2}-)?([A-Za-z]{1,3}-)?([0-9A-Za-z]{2,6}))?$/
  };

  // cambia que cuando de click de false a true
  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  };
  /*const verVariable = () => {
    console.log("Total Placas: ", counterFuera);
    console.log("totalAdultosNacionales: ", counterAdultosNac);
    console.log("totalNinnosNacionales: ", counterMayorNiniosNac);
    console.log("totalAdultosExtranjeros: ", counterAdultosExt);

    console.log("totalNinnosExtranjeros: ", counterMayorNiniosExt);
  };*/
  //intercepta los datos que va a enviar del formulario
  const onSubmit = (e) => {
    e.preventDefault();
    //comprueba que la validacion de datos este en true
    if (
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      apellido2.valido === "true" &&
      correo.valido === "true" &&
      edad.valido === "true" &&
      //placa.valido === "true" &&
      terminos
    ) {
      //Imprime los datos que va enviar al backend
      console.log("Nombre enviado: ", e.target.nombre.value);
      console.log("Apellido enviado: ", e.target.apellido.value);
      console.log("Apellido 2 enviado: ", e.target.apellido2.value);
      console.log("Correo enviado: ", e.target.correo.value);
      console.log("Edad enviada: ", e.target.edad.value);

      console.log("Total Placas: ", counterPlacas);
      console.log("Placa enviada: ", placa.campo);
      console.log("Placa enviada: ", placa2.campo);
      console.log("Placa enviada: ", placa3.campo);
      console.log("Placa enviada: ", placa4.campo);
      console.log("Placa enviada: ", placa5.campo);
      console.log("Placa enviada: ", placa6.campo);

      console.log("Total Personas: ", counterFuera);

      console.log("totalAdultosNacionales: ", counterAdultosNac);
      console.log("totalNinnosNacionales: ", counterMayorNiniosNac);
      console.log("totalAdultosExtranjeros: ", counterAdultosExt);
      console.log("totalNinnosExtranjeros: ", counterMayorNiniosExt);

      cambiarFormularioValido(true);
      //reinicio los campos
      cambiarNombre({ campo: "", valido: null });
      cambiarApellido({ campo: "", valido: null });
      cambiarApellido2({ campo: "", valido: null });
      cambiarCorreo({ campo: "", valido: null });
      cambiarEdad({ campo: "", valido: null });
      // reinicio inputs placas
      cambiarPlaca({ campo: "", valido: null });
      cambiarPlaca2({ campo: "", valido: null });
      cambiarPlaca3({ campo: "", valido: null });
      cambiarPlaca4({ campo: "", valido: null });
      cambiarPlaca5({ campo: "", valido: null });
      cambiarPlaca6({ campo: "", valido: null });
      //reinicio cantidad de personas que reservan
      setCounterAdultosNac(0);
      setCounterMayorNiniosNac(0);
      setCounterAdultosExt(0);
      setCounterMayorNiniosExt(0);

      setCounter(0);
      setCounterPlacas(0);
      setMostrarPlacas(0);
      cambiarTerminos(false);

      // aqui podria hacerse la conexion con la base de datos
    } else {
      cambiarFormularioValido(false);
    }
  };
  return (
    <main>
      {/* Utilizo compones para cada input del formulario */}
      <h1>Información de reserva</h1>
      <Formulario action="" onSubmit={onSubmit}>
        <ComponenteInput
          estado={nombre}
          cambiarEstado={cambiarNombre}
          tipo="text"
          label="Nombre"
          name="nombre"
          leyendaError="El nombre solo puede contener letras y espacios."
          expresionRegular={expresiones.nombre}
        />

        <ComponenteInput
          estado={apellido}
          cambiarEstado={cambiarApellido}
          tipo="text"
          label="Apellido"
          name="apellido"
          leyendaError="El apellido solo puede contener letras y espacios."
          expresionRegular={expresiones.apellido}
        />

        <ComponenteInput
          estado={apellido2}
          cambiarEstado={cambiarApellido2}
          tipo="text"
          label="Segundo Apellido"
          name="apellido2"
          leyendaError="El apellido solo puede contener letras y espacios."
          expresionRegular={expresiones.apellido2}
        />

        <ComponenteInput
          estado={correo}
          cambiarEstado={cambiarCorreo}
          tipo="email"
          label="Correo Electrónico"
          placeholder="john@correo.com"
          name="correo"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={expresiones.correo}
        />
        <ComponenteInput
          estado={edad}
          cambiarEstado={cambiarEdad}
          tipo="text"
          label="Edad"
          name="edad"
          leyendaError="La edad es válida entre 1-120."
          expresionRegular={expresiones.edad}
        />

        <div></div>
        <div
          style={{
            height: "1px",
            backgroundColor: "black",
            width: "200%",
            margin: "10px 0"
          }}
        ></div>
        <div></div>
        {/* Botones para incrementar y decrementar */}
        <ComponenteInputIncDec
          tipo="number"
          label="Cantidad de vehículos"
          name="cantidadPlacas"
          estadoContador={counterPlacas}
          cambiarContador={setCounterPlacas}
          controlTotal={totalPlacas}
          counterTipoEntrada={mostrarPlacas}
          setCounterTipoEntrada={setMostrarPlacas}
          //mostrarValor={mostrarValor}
          //setMostrar={setMostrar}
        ></ComponenteInputIncDec>
        <div></div>

        {/*Si el contador es mayor que un numero entonces muestro el boton, de lo contrario un espacio vacio */}
        {counterPlacas >= 1 ? (
          <ComponenteInput
            estado={placa}
            cambiarEstado={cambiarPlaca}
            tipo="text"
            label="Placa 1"
            placeholder="placa"
            name="placa"
            leyendaError="La placa debe tener como mínimo 2 dígitos numéricos o alfanuméricos y como máximo 6."
            expresionRegular={expresiones.placa}
          />
        ) : (
          <div></div>
        )}

        {counterPlacas >= 2 ? (
          <ComponenteInput
            estado={placa2}
            cambiarEstado={cambiarPlaca2}
            tipo="text"
            label="Placa 2"
            placeholder="placa"
            name="placa2"
            leyendaError="La placa debe tener como mínimo 2 dígitos numéricos o alfanuméricos y como máximo 6."
            expresionRegular={expresiones.placa}
          />
        ) : (
          <div></div>
        )}

        {counterPlacas >= 3 ? (
          <ComponenteInput
            estado={placa3}
            cambiarEstado={cambiarPlaca3}
            tipo="text"
            label="Placa 3"
            placeholder="placa"
            name="placa3"
            leyendaError="La placa debe tener como mínimo 2 dígitos numéricos o alfanuméricos y como máximo 6."
            expresionRegular={expresiones.placa}
          />
        ) : (
          <div></div>
        )}
        {counterPlacas >= 4 ? (
          <ComponenteInput
            estado={placa4}
            cambiarEstado={cambiarPlaca4}
            tipo="text"
            label="Placa"
            placeholder="placa 4"
            name="placa4"
            leyendaError="La placa debe tener como mínimo 2 dígitos numéricos o alfanuméricos y como máximo 6."
            expresionRegular={expresiones.placa}
          />
        ) : (
          <div></div>
        )}

        {counterPlacas >= 5 ? (
          <ComponenteInput
            estado={placa5}
            cambiarEstado={cambiarPlaca5}
            tipo="text"
            label="Placa 5"
            placeholder="placa"
            name="placa5"
            leyendaError="La placa debe tener como mínimo 2 dígitos numéricos o alfanuméricos y como máximo 6."
            expresionRegular={expresiones.placa}
          />
        ) : (
          <div></div>
        )}

        {counterPlacas >= 6 ? (
          <ComponenteInput
            estado={placa6}
            cambiarEstado={cambiarPlaca6}
            tipo="text"
            label="Placa 6"
            placeholder="placa"
            name="placa6"
            leyendaError="La placa debe tener como mínimo 2 dígitos numéricos o alfanuméricos y como máximo 6."
            expresionRegular={expresiones.placa}
          />
        ) : (
          <div></div>
        )}

        <div
          style={{
            height: "1px",
            backgroundColor: "black",
            width: "200%",
            margin: "10px 0",
            margintop: "0px",
            marginbottom: "0px"
          }}
        ></div>
        <div></div>

        <h2>
          Seleccione las {totalPersonas} personas para reservar:
          <br />
          <br />
          Nacionales
        </h2>
        <div></div>

        <ComponenteInputIncDec
          tipo="number"
          label="Adultos"
          name="incrementoAdulNac"
          estadoContador={counterFuera}
          cambiarContador={setCounter}
          controlTotal={totalPersonas}
          counterTipoEntrada={counterAdultosNac}
          setCounterTipoEntrada={setCounterAdultosNac}
        ></ComponenteInputIncDec>

        <ComponenteInputIncDec
          tipo="number"
          label="Menores de 6 años o adultos mayores de 65"
          name="incrementoAdulNinNac"
          estadoContador={counterFuera}
          cambiarContador={setCounter}
          controlTotal={totalPersonas}
          counterTipoEntrada={counterMayorNiniosNac}
          setCounterTipoEntrada={setCounterMayorNiniosNac}
        ></ComponenteInputIncDec>

        <div
          style={{
            height: "1px",
            backgroundColor: "black",
            width: "200%",
            margin: "10px 0",
            margintop: "0px",
            marginbottom: "0px"
          }}
        ></div>
        <div></div>
        <h2>Extranjeros</h2>
        <div></div>

        <ComponenteInputIncDec
          tipo="number"
          label="Adultos"
          name="incrementoAdulExt"
          estadoContador={counterFuera}
          cambiarContador={setCounter}
          controlTotal={totalPersonas}
          counterTipoEntrada={counterAdultosExt}
          setCounterTipoEntrada={setCounterAdultosExt}
        ></ComponenteInputIncDec>

        <ComponenteInputIncDec
          tipo="number"
          label="Menores de 6 años o adultos mayores de 65"
          name="incrementoAdultosNinExt"
          estadoContador={counterFuera}
          cambiarContador={setCounter}
          controlTotal={totalPersonas}
          counterTipoEntrada={counterMayorNiniosExt}
          setCounterTipoEntrada={setCounterMayorNiniosExt}
        ></ComponenteInputIncDec>

        <ContenedorTerminos>
          <label>
            <input
              type="checkbox"
              name="terminos"
              id="terminos"
              checked={terminos}
              onChange={onChangeTerminos}
            />
            Acepto Términos y Condiciones
          </label>
        </ContenedorTerminos>

        {formularioValido === false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellena el formulario correctamente.
            </p>
          </MensajeError>
        )}
        <div></div>
        <ContenedorBotonCentrado>
          <Boton
            type="submit"
            /*onClick={() => {
              verVariable();
            }}*/
          >
            Siguiente
          </Boton>
          {formularioValido === true && (
            <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
          )}
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
};
