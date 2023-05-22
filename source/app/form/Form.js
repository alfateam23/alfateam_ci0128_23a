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

export const FormularioView = ({ UserData }) => {
  /* Estados para cada tipo de dato que use para poder hacer comprobacion de datos */

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [apellido2, cambiarApellido2] = useState({ campo: "", valido: null });
  const [identificacionUsuario, cambiarIdentificacionUsuario] = useState({
    campo: "",
    valido: null
  });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  //const [edad, cambiarEdad] = useState({ campo: "", valido: null });
  const [placa, cambiarPlaca] = useState({ campo: "", valido: null });
  const [placa2, cambiarPlaca2] = useState({ campo: "", valido: null });
  const [placa3, cambiarPlaca3] = useState({ campo: "", valido: null });
  const [placa4, cambiarPlaca4] = useState({ campo: "", valido: null });
  const [placa5, cambiarPlaca5] = useState({ campo: "", valido: null });
  const [placa6, cambiarPlaca6] = useState({ campo: "", valido: null });
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [counterFuera, setCounter] = useState(0); //variable para llevar el total de personas
  const [counterPlacas, setCounterPlacas] = useState(0);   // variable para llevar cantidad de placas ingresadas
  const [mostrarPlacas, setMostrarPlacas] = useState(0);
  const [totalPersonas, setTotalPersonas] = useState(UserData.num_guests + 1);
  const [totalPlacas, setTotalPlacas] = useState(6); //totalPlacas = 6;
  const [counterNinos0a6Nac, setCounterNinos0a6Nac] = useState(0);
  const [counterNinos6a12Nac, setCounterNinos6a12Nac] = useState(0);
  const [counterAdultosNac, setCounterAdultosNac] = useState(0);
  const [counterAdultosMayorNac, setCounterAdultosMayorNac] = useState(0);
  const [counterNinos0a6Ext, setCounterNinos0a6Ext] = useState(0);
  const [counterNinos6a12Ext, setCounterNinos6a12Ext] = useState(0);
  const [counterAdultosExt, setCounterAdultosExt] = useState(0);
  const [counterAdultosMayorExt, setCounterAdultosMayorExt] = useState(0);
  const [mostrarErrorTotalPersonas, setMostrarErrorTotalPersonas] = useState(
    null
  );
  //expresiones regulares para combrobar contenido
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido2: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^(?:\+\d{1,3})?\d{8}$/, //verifica que solo ponga numeros de 8 digitos o el formato con codigo de pais +50689562145 por ejemplo
    identificacionUsuario: /^.{0,60}$/ // coincide con cualquier carácter (excepto saltos de línea), hasta 60 caracteres.
  };
  // cambia que cuando de click de false a true
  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  };
  //intercepta los datos que va a enviar del formulario
  const onSubmit = (e) => {
    e.preventDefault();
    //comprueba que la validacion de datos este en true
    if (
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      apellido2.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true" &&
      identificacionUsuario.valido === "true" &&
      terminos
    ) {
      //Imprime los datos que va enviar al backend
      console.log("Nombre enviado: ", e.target.nombre.value);
      console.log("Apellido enviado: ", e.target.apellido.value);
      console.log("Apellido 2 enviado: ", e.target.apellido2.value);
      console.log(
        "Numero de identificación enviado: ",
        e.target.identificacionUsuario.value
      );
      console.log("Telefono enviado: ", e.target.telefono.value);
      console.log("Correo enviado: ", e.target.correo.value);
      console.log("Total Placas: ", counterPlacas);
      console.log("Placa enviada: ", placa.campo);
      console.log("Placa enviada: ", placa2.campo);
      console.log("Placa enviada: ", placa3.campo);
      console.log("Placa enviada: ", placa4.campo);
      console.log("Placa enviada: ", placa5.campo);
      console.log("Placa enviada: ", placa6.campo);
      console.log("Total Personas: ", counterFuera);
      console.log("totalNinos0a6Nac: ", counterNinos0a6Nac);
      console.log("totalNinos6a12Nac: ", counterNinos6a12Nac);
      console.log("totalAdultosNacionales: ", counterAdultosNac);
      console.log("totalAdultosMayorNac: ", counterAdultosMayorNac);
      console.log("totalNinos0a6Ext: ", counterNinos0a6Ext);
      console.log("totalNinos6a12Ext: ", counterNinos6a12Ext);
      console.log("totalAdultosExtranjeros: ", counterAdultosExt);
      console.log("totalAdultosMayorExt: ", counterAdultosMayorExt);
      /*
      UserData.nameUser = e.target.nombre.value;
      UserData.firstSurname = e.target.apellido.value;
      UserData.secondSurname = e.target.apellido2.value;
      UserData.mail = e.target.correo.value;
      UserData.totalPlates = counterPlacas;
      UserData.plate1 = placa.campo;
      UserData.plate2 = placa2.campo;
      UserData.plate3 = placa3.campo;
      UserData.plate4 = placa4.campo;
      UserData.plate5 = placa5.campo;
      UserData.plate6 = placa6.campo;
      UserData.TotalPeople = counterFuera;
      UserData.countAdultNac = counterAdultosNac;
      UserData.countAdultKidsNac = counterMayorNiniosNac;
      UserData.countAdultFor = counterAdultosExt;
      UserData.countAdultKidsFor = counterMayorNiniosExt;
      console.log("UserData.nameUser: ", UserData.nameUser);
      console.log("UserData.countAdultKidsFor: ", counterMayorNiniosExt);*/
      cambiarFormularioValido(true);
      //reinicio los campos
      cambiarNombre({ campo: "", valido: null });
      cambiarApellido({ campo: "", valido: null });
      cambiarApellido2({ campo: "", valido: null });
      cambiarCorreo({ campo: "", valido: null });
      //cambiarEdad({ campo: "", valido: null });
      // reinicio inputs placas
      cambiarPlaca({ campo: "", valido: null });
      cambiarPlaca2({ campo: "", valido: null });
      cambiarPlaca3({ campo: "", valido: null });
      cambiarPlaca4({ campo: "", valido: null });
      cambiarPlaca5({ campo: "", valido: null });
      cambiarPlaca6({ campo: "", valido: null });
      //reinicio cantidad de personas que reservan
      setCounterNinos0a6Nac(0);
      setCounterNinos6a12Nac(0);
      setCounterAdultosNac(0);
      setCounterAdultosMayorNac(0);
      setCounterNinos0a6Ext(0);
      setCounterNinos6a12Ext(0);
      setCounterAdultosExt(0);
      setCounterAdultosMayorExt(0);
      setCounter(0);
      setCounterPlacas(0);
      setMostrarPlacas(0);
      cambiarTerminos(false);
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
          estado={identificacionUsuario}
          cambiarEstado={cambiarIdentificacionUsuario}
          tipo="text"
          label="Identificación"
          placeholder=""
          name="identificacionUsuario"
          leyendaError="Acepta cualquier caracter, hasta 60 caracteres."
          expresionRegular={expresiones.telefono}
        />

        <ComponenteInput
          estado={telefono}
          cambiarEstado={cambiarTelefono}
          tipo="text"
          label="Telefono"
          placeholder="+50685952345"
          name="telefono"
          leyendaError="Número de teléfono de 8 dígitos o el símbolo '+', el código de país y 8 dígitos. Por ejemplo +50689745265."
          expresionRegular={expresiones.telefono}
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

        <div className="linea"></div>
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
        ) : null}

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
        ) : null}

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
        ) : null}
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
        ) : null}

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
        ) : null}

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
        ) : null}

        <div className="linea"></div>

        <h2>
          Seleccione {totalPersonas} personas para reservar:
          <br />
          <br />
          Nacionales
        </h2>
        <div></div>

        <ComponenteInputIncDec
          tipo="number"
          label="Niños de 0 a 6"
          name="incrementoNinos0a6Nac"
          estadoContador={counterFuera}
          cambiarContador={setCounter}
          controlTotal={totalPersonas}
          counterTipoEntrada={counterNinos0a6Nac}
          setCounterTipoEntrada={setCounterNinos0a6Nac}
          setMostrarErrorTotalPersonas={setMostrarErrorTotalPersonas}
        ></ComponenteInputIncDec>

        <ComponenteInputIncDec
          tipo="number"
          label="Niños de 6 a 12"
          name="incrementoNinos6a12Nac"
          estadoContador={counterFuera}
          cambiarContador={setCounter}
          controlTotal={totalPersonas}
          counterTipoEntrada={counterNinos6a12Nac}
          setCounterTipoEntrada={setCounterNinos6a12Nac}
          setMostrarErrorTotalPersonas={setMostrarErrorTotalPersonas}
        ></ComponenteInputIncDec>

        <ComponenteInputIncDec
          tipo="number"
          label="Adultos"
          name="incrementoAdulNac"
          estadoContador={counterFuera}
          cambiarContador={setCounter}
          controlTotal={totalPersonas}
          counterTipoEntrada={counterAdultosNac}
          setCounterTipoEntrada={setCounterAdultosNac}
          setMostrarErrorTotalPersonas={setMostrarErrorTotalPersonas}
        ></ComponenteInputIncDec>

        <ComponenteInputIncDec
          tipo="number"
          label="Adultos mayores de 65"
          name="incrementoAdulMayoresNac"
          estadoContador={counterFuera}
          cambiarContador={setCounter}
          controlTotal={totalPersonas}
          counterTipoEntrada={counterAdultosMayorNac}
          setCounterTipoEntrada={setCounterAdultosMayorNac}
          setMostrarErrorTotalPersonas={setMostrarErrorTotalPersonas}
        ></ComponenteInputIncDec>

        <div
          style={{
            height: "1px",
            backgroundColor: "black",
            width: "100%",
            margin: "10px 0",
            margintop: "0px",
            marginbottom: "0px",
            gridColumn: "span 2"
          }}
        ></div>

        <h2>Extranjeros</h2>
        <div></div>

        <ComponenteInputIncDec
          tipo="number"
          label="Niños de 0 a 6"
          name="incrementoNinos0a6Ext"
          estadoContador={counterFuera}
          cambiarContador={setCounter}
          controlTotal={totalPersonas}
          counterTipoEntrada={counterNinos0a6Ext}
          setCounterTipoEntrada={setCounterNinos0a6Ext}
          setMostrarErrorTotalPersonas={setMostrarErrorTotalPersonas}
        ></ComponenteInputIncDec>

        <ComponenteInputIncDec
          tipo="number"
          label="Niños de 6 a 12"
          name="incrementoAdultosMayorExt"
          estadoContador={counterFuera}
          cambiarContador={setCounter}
          controlTotal={totalPersonas}
          counterTipoEntrada={counterNinos6a12Ext}
          setCounterTipoEntrada={setCounterNinos6a12Ext}
          setMostrarErrorTotalPersonas={setMostrarErrorTotalPersonas}
        ></ComponenteInputIncDec>

        <ComponenteInputIncDec
          tipo="number"
          label="Adultos"
          name="incrementoAdulExt"
          estadoContador={counterFuera}
          cambiarContador={setCounter}
          controlTotal={totalPersonas}
          counterTipoEntrada={counterAdultosExt}
          setCounterTipoEntrada={setCounterAdultosExt}
          setMostrarErrorTotalPersonas={setMostrarErrorTotalPersonas}
        ></ComponenteInputIncDec>

        <ComponenteInputIncDec
          tipo="number"
          label="Adultos mayores de 65"
          name="incrementoAdultosMayoresExt"
          estadoContador={counterFuera}
          cambiarContador={setCounter}
          controlTotal={totalPersonas}
          counterTipoEntrada={counterAdultosMayorExt}
          setCounterTipoEntrada={setCounterAdultosMayorExt}
          setMostrarErrorTotalPersonas={setMostrarErrorTotalPersonas}
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

        {mostrarErrorTotalPersonas === true ? (
          <MensajeError>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            !Por favor, seleccione el numero de personas correspondiente!
          </MensajeError>
        ) : null}

        <div></div>
        <ContenedorBotonCentrado>
          <Boton type="submit">Siguiente</Boton>
          {formularioValido === true ? (
            <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
          ) : null}
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
};