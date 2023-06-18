import React, { useState, useEffect } from "react";
import {
  ComponenteInput,
  ComponenteInputIncDec,
  ComponentDropDown,
  ComponentCheckBox,
} from "./Input";
import { RegularExpresions } from "./RegularExpresions";
import "./style.css";
import {
  Formulario,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
} from "./Elementos/ElementosFormulario";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { GeographicDataFetcher } from "./GeographicDataFetcher";
export const FormularioView = ({ UserData }) => {
  /* Estados para cada tipo de dato que use para poder hacer comprobacion de datos */
  const regularExpresions = new RegularExpresions();
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [secondName, setSecondName] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [apellido2, cambiarApellido2] = useState({ campo: "", valido: null });
  const [identificacionUsuario, cambiarIdentificacionUsuario] = useState({
    campo: "",
    valido: null,
  });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [placa, cambiarPlaca] = useState({ campo: "", valido: null });
  const [placa2, cambiarPlaca2] = useState({ campo: "", valido: null });
  const [placa3, cambiarPlaca3] = useState({ campo: "", valido: null });
  const [placa4, cambiarPlaca4] = useState({ campo: "", valido: null });
  const [placa5, cambiarPlaca5] = useState({ campo: "", valido: null });
  const [placa6, cambiarPlaca6] = useState({ campo: "", valido: null });
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [counterFuera, setCounter] = useState(0); //variable para llevar el total de personas
  const [counterPlacas, setCounterPlacas] = useState(0); // variable para llevar cantidad de placas ingresadas
  const [mostrarPlacas, setMostrarPlacas] = useState(0);
  const [totalPersonas, setTotalPersonas] = useState(UserData.totalPeople);
  const [totalPlacas, setTotalPlacas] = useState(6); //totalPlacas = 6;
  const [counterNinos0a6Nac, setCounterNinos0a6Nac] = useState(0);
  const [counterNinos6a12Nac, setCounterNinos6a12Nac] = useState(0);
  const [counterAdultosNac, setCounterAdultosNac] = useState(0);
  const [counterAdultosMayorNac, setCounterAdultosMayorNac] = useState(0);
  const [counterNinos0a6Ext, setCounterNinos0a6Ext] = useState(0);
  const [counterNinos6a12Ext, setCounterNinos6a12Ext] = useState(0);
  const [counterAdultosExt, setCounterAdultosExt] = useState(0);
  const [counterAdultosMayorExt, setCounterAdultosMayorExt] = useState(0);
  const [mostrarErrorTotalPersonas, setMostrarErrorTotalPersonas] =
    useState(null);
  const [selectOriginCountry, setSelectOriginCountry] = useState(""); // se usa para establecer el pais
  const [selectOriginProvince, setSelectOriginProvince] = useState(""); // se usa para establecer provincia
  const [selectedOption, setSelectedOption] = useState(null); // se usa para selecionar entre nacional o extranjero
  const nationalityOptions = ["Nacional", "Extranjero"];
  const navigate = useNavigate();
  const { pais, provincias } = GeographicDataFetcher();
  const onChangeTerminos = (e) => {
    // cambia que cuando de click de false a true
    cambiarTerminos(e.target.checked);
  };
  const onSubmit = (e) => {
    //intercepta los datos que va a enviar del formulario
    e.preventDefault();
    if (
      //comprueba que la validacion de datos este en true
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true" &&
      terminos &&
      counterFuera === totalPersonas &&
      selectedOption !== null
    ) {
      UserData.nameUser = e.target.nombre.value;
      UserData.secondName = e.target.secondName.value;
      UserData.firstSurname = e.target.apellido.value;
      UserData.secondSurname = e.target.apellido2.value;
      UserData.id = e.target.identificacionUsuario.value;
      UserData.phone = e.target.telefono.value;
      UserData.mail = e.target.correo.value;
      if (selectOriginCountry !== "") {
        const { Nombre } = selectOriginCountry || {};
        UserData.originCountry = Nombre;
      }
      if (selectOriginProvince !== "") {
        const { Nombre } = selectOriginProvince || {};
        UserData.originProvince = Nombre;
      }
      //UserData.originCountry = selectOriginCountry;
      //UserData.originProvince = selectOriginProvince;
      UserData.totalPeople = totalPersonas;
      UserData.plates = [
        placa.campo,
        placa2.campo,
        placa3.campo,
        placa4.campo,
        placa5.campo,
        placa6.campo,
      ];
      UserData.visitors = [
        counterNinos0a6Nac,
        counterNinos6a12Nac,
        counterAdultosNac,
        counterAdultosMayorNac,
        counterNinos0a6Ext,
        counterNinos6a12Ext,
        counterAdultosExt,
        counterAdultosMayorExt,
      ];
      /*console.log("Name User:", UserData.nameUser);
      console.log("Second Name:", UserData.secondName);
      console.log("First Surname:", UserData.firstSurname);
      console.log("Second Surname:", UserData.secondSurname);
      console.log("ID:", UserData.id);
      console.log("Phone:", UserData.phone);
      console.log("Email:", UserData.mail);
      console.log("Origin Country:", UserData.originCountry);
      console.log("Origin Province:", UserData.originProvince);
      console.log("Plates:", UserData.plates);
      console.log("Visitors:", UserData.visitors);*/
      //reinicio los campos
      cambiarFormularioValido(true);
      cambiarNombre({ campo: "", valido: null });
      setSecondName({ campo: "", valido: null });
      cambiarApellido({ campo: "", valido: null });
      cambiarApellido2({ campo: "", valido: null });
      cambiarIdentificacionUsuario({ campo: "", valido: null });
      cambiarTelefono({ campo: "", valido: null });
      cambiarCorreo({ campo: "", valido: null });
      // reinicio inputs placas
      cambiarPlaca({ campo: "", valido: null });
      cambiarPlaca2({ campo: "", valido: null });
      cambiarPlaca3({ campo: "", valido: null });
      cambiarPlaca4({ campo: "", valido: null });
      cambiarPlaca5({ campo: "", valido: null });
      cambiarPlaca6({ campo: "", valido: null });
      setSelectOriginCountry("");
      setSelectOriginProvince("");
      setSelectedOption(null);
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
      navigate("/reservation/review");
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
          expresionRegular={regularExpresions.expresiones.nombre}
        />

        <ComponenteInput
          estado={secondName}
          cambiarEstado={setSecondName}
          tipo="text"
          label="Segundo nombre"
          name="secondName"
          leyendaError="El nombre solo puede contener letras y espacios."
        />

        <ComponenteInput
          estado={apellido}
          cambiarEstado={cambiarApellido}
          tipo="text"
          label="Apellido"
          name="apellido"
          leyendaError="El apellido solo puede contener letras y espacios."
          expresionRegular={regularExpresions.expresiones.apellido}
        />

        <ComponenteInput
          estado={apellido2}
          cambiarEstado={cambiarApellido2}
          tipo="text"
          label="Segundo Apellido"
          name="apellido2"
          leyendaError="El apellido solo puede contener letras y espacios."
        />

        <ComponenteInput
          estado={identificacionUsuario}
          cambiarEstado={cambiarIdentificacionUsuario}
          tipo="text"
          label="Identificación"
          placeholder=""
          name="identificacionUsuario"
          leyendaError="Acepta cualquier caracter, hasta 60 caracteres."
          expresionRegular={regularExpresions.expresiones.identificacionUsuario}
        />

        <ComponenteInput
          estado={telefono}
          cambiarEstado={cambiarTelefono}
          tipo="text"
          label="Telefono"
          placeholder="85952345"
          name="telefono"
          leyendaError="Número de teléfono de 8 dígitos o el código de país y 8 dígitos. Por ejemplo 89745265 o 50689745265."
          expresionRegular={regularExpresions.expresiones.telefono}
        />

        <ComponenteInput
          estado={correo}
          cambiarEstado={cambiarCorreo}
          tipo="email"
          label="Correo Electrónico"
          placeholder="john@correo.com"
          name="correo"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={regularExpresions.expresiones.correo}
        />
        <ComponentCheckBox
          label="Nacionalidad de la persona que reserva: "
          name="CheckBoxNacionality"
          nationalityOptions={nationalityOptions}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        ></ComponentCheckBox>

        {selectedOption === null ? null : selectedOption === "Extranjero" ? (
          <ComponentDropDown
            label="Procedecia"
            name="procedeciaPais"
            leyenda="Seleccione país"
            items={pais}
            selectedItem={selectOriginCountry}
            setSelectedItem={setSelectOriginCountry}
          ></ComponentDropDown>
        ) : (
          <ComponentDropDown
            label="Procedecia"
            name="procedeciaProvincia"
            leyenda="Seleccione provincia"
            items={provincias}
            selectedItem={selectOriginProvince}
            setSelectedItem={setSelectOriginProvince}
          ></ComponentDropDown>
        )}

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
            expresionRegular={regularExpresions.expresiones.placa}
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
            expresionRegular={regularExpresions.expresiones.placa}
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
            expresionRegular={regularExpresions.expresiones.placa}
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
            expresionRegular={regularExpresions.expresiones.placa}
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
            expresionRegular={regularExpresions.expresiones.placa}
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
            expresionRegular={regularExpresions.expresiones.placa}
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
        <div className="linea"></div>
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
              name="verificacion"
              id="terminos"
              checked={terminos}
              onChange={onChangeTerminos}
            />
            He revisado que la información es correcta
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
