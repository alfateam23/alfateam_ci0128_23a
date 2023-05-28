// importo los estilos para los diferentes elementos
import {
    Input,
    Label,
    GrupoInput,
    LeyendaError,
    IconoValidacion,
    ButtonIncDec
  } from "./Elementos/ElementosFormulario";
  
  // importo iconos para verificación y error
  import {
    faCircleCheck,
    faTimesCircle
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
    expresionRegular
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
    setCounterTipoEntrada
  }) => {
    // incrementa el valor
    const handleIncrease = () => {
      cambiarContador(estadoContador + 1);
      setCounterTipoEntrada(counterTipoEntrada + 1);
    };
  
    // decrementa el valor
    const handleDecrease = () => {
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
  
  export { ComponenteInput, ComponenteInputIncDec };
  