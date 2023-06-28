// importo los estilos para los diferentes elementos
import {
  Input,
  Label,
  GrupoInput,
  LeyendaError,
  IconoValidacion,
  ButtonIncDec,
  ButtonDropDown,
  DropDown,
  CheckBox,
} from "./Elementos/ElementosFormulario";
import { Space, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
// importo iconos para verificación y error
// importo iconos para verificación y error
import {
  faCircleCheck,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

// ComponenteInput para reutilizar en los diferentes inputs
const ComponenteInput = ({
  estado,
  cambiarEstado,
  tipo,
  label,
  placeholder,
  name,
  leyendaError,
  expresionRegular,
}) => {
  const onChange = (e) => {
    // ca,bia el estado de la propiedad, haciendola igual a lo que entra en el input
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  //valida si se cumple la expresion regular correspondiente
  const validacion = () => {
    if (expresionRegular) {
      //comprabando lo que se escribio en el input con la expresion regular
      if (expresionRegular.test(estado.campo)) {
        //si la expresion es correcta, entonces  cambia el estado
        // si es true es que lo que ingresa es un valor correcto, de lo contrario es false
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }
  };
  return (
    <div>
      <Label htmlFor={name} valido={estado.valido}>
        {label}
      </Label>
      <GrupoInput>
        <Input
          type={tipo}
          placeholder={placeholder}
          id={name}
          value={estado.campo}
          onChange={onChange}
          // cuando presiona y levanta el dedo
          onKeyUp={validacion}
          onBlur={validacion}
          //valida y obtiene el estado
          valido={estado.valido}
        />
        {/*Si el estado es valido pone el icono de correcto, de lo contrario incorrecto*/}
        <IconoValidacion
          icon={estado.valido === "true" ? faCircleCheck : faTimesCircle}
          valido={estado.valido}
        />
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
};

// componente para reutilizar en inputs de incremnete y decremento
const ComponenteInputIncDec = ({
  label,
  name,
  cambiarContador,
  estadoContador,
  controlTotal,
  counterTipoEntrada,
  setCounterTipoEntrada,
  setMostrarErrorTotalPersonas,
}) => {
  const errorControl = () => {
    if (name !== "cantidadPlacas") {
      if (estadoContador + 1 === controlTotal) {
        setMostrarErrorTotalPersonas(false);
      } else {
        setMostrarErrorTotalPersonas(true);
      }
    }
  };
  // incrementa el valor
  const handleIncrease = () => {
    errorControl();
    cambiarContador(estadoContador + 1);
    setCounterTipoEntrada(counterTipoEntrada + 1);
  };

  // decrementa el valor
  const handleDecrease = () => {
    errorControl();
    cambiarContador(estadoContador - 1);
    setCounterTipoEntrada(counterTipoEntrada - 1);
  };

  return (
    <div>
      <Label htmlFor={name}> {label}</Label>
      <GrupoInput>
        <ButtonIncDec
          name="ButtonPlacas"
          disabled={counterTipoEntrada <= 0}
          onClick={handleDecrease}
        >
          -
        </ButtonIncDec>
        <span> {counterTipoEntrada} </span>
        <ButtonIncDec
          name="buttonIncDec"
          disabled={estadoContador >= controlTotal}
          onClick={handleIncrease}
        >
          +
        </ButtonIncDec>
      </GrupoInput>
    </div>
  );
};

// componente para desplegar paises y provincias
const ComponentDropDown = ({
  label,
  name,
  items,
  leyenda,
  selectedItem,
  setSelectedItem,
}) => {
  const handleMenuClick = (e) => {
    const selected = items.find((item) => item.Nombre === e.key);
    setSelectedItem(selected);
  };

  const handleDropDownVisibleChange = (visible) => {
    if (visible && selectedItem) {
      const selectedItemName = selectedItem.Nombre;
      const currentSelectedItemName = items.find(
        (item) => item.Nombre === selectedItemName
      )?.Nombre;
      if (selectedItemName !== currentSelectedItemName) {
        setSelectedItem(null);
      }
    }
  };

  const shouldDisplayLeyenda =
    !selectedItem || !items.some((item) => item.Nombre === selectedItem.Nombre);

  const menu = (
    <Menu onClick={handleMenuClick} className="h-52 overflow-y-scroll">
      {items.map((items) => (
        <Menu.Item key={items.Nombre}>{items.Nombre}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    // className="overflow-y-scroll"
    <div style={{ maxHeight: "70px" }}>
      <label htmlFor={name}>{label}</label>
      <div>
        <DropDown
          overlay={menu}
          trigger={["click"]}
          onVisibleChange={handleDropDownVisibleChange}
        >
          <ButtonDropDown>
            <Space>
              {shouldDisplayLeyenda ? leyenda : selectedItem.Nombre}
              <DownOutlined />
            </Space>
          </ButtonDropDown>
        </DropDown>
      </div>
    </div>
  );
};

const ComponentCheckBox = ({
  label,
  name,
  nationalityOptions,
  selectedOption,
  setSelectedOption,
}) => {
  const onChangeCheckValues = (checkedValues) => {
    let value = null;
    if (checkedValues.length > 0) {
      value = checkedValues[checkedValues.length - 1];
    }
    setSelectedOption(value);
  };
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <GrupoInput>
        <CheckBox
          options={nationalityOptions}
          value={selectedOption ? [selectedOption] : []}
          onChange={onChangeCheckValues}
        />
      </GrupoInput>
    </div>
  );
};

export {
  ComponenteInput,
  ComponenteInputIncDec,
  ComponentDropDown,
  ComponentCheckBox,
};
