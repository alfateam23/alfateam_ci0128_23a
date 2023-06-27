import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ComponenteInput from "./ComponenteInput";

// Prueba unitaria para cambiar estado del input

describe("ComponenteInput", () => {
  test("Cambia el estado cuando se escribe en el input", () => {
    const cambiarEstado = jest.fn();
    const expresionRegular = /^[A-Za-z]+$/; // Expresión regular para aceptar solo letras

    const { getByTestId } = render(
      <ComponenteInput
        estado={{ campo: "", valido: "" }}
        cambiarEstado={cambiarEstado}
        tipo="text"
        label="Nombre"
        placeholder="Ingrese su nombre"
        name="nombre"
        leyendaError="El nombre solo debe contener letras"
        expresionRegular={expresionRegular}
      />
    );

    const input = getByTestId("input-nombre");
    fireEvent.change(input, { target: { value: "John" } });

    expect(cambiarEstado).toHaveBeenCalledWith({
      campo: "Allan",
      valido: "true",
    });
  });

  test("debería mostrar un mensaje de error cuando el valor no coincide con la expresión regular", () => {
    const cambiarEstado = jest.fn();
    const expresionRegular = /^[A-Za-z]+$/; // Expresión regular para aceptar solo letras

    const { getByTestId, getByText } = render(
      <ComponenteInput
        estado={{ campo: "", valido: "" }}
        cambiarEstado={cambiarEstado}
        tipo="text"
        label="Nombre"
        placeholder="Ingrese su nombre"
        name="nombre"
        leyendaError="El nombre solo debe contener letras"
        expresionRegular={expresionRegular}
      />
    );

    const input = getByTestId("input-nombre");
    fireEvent.change(input, { target: { value: "John123" } });

    expect(cambiarEstado).toHaveBeenCalledWith({
      campo: "Allan123",
      valido: "false",
    });

    const errorMessage = getByText("El nombre solo debe contener letras");
    expect(errorMessage).toBeInTheDocument();
  });
});

// Prueba unitaria para incrementar o decrementar el contador

describe("ComponenteInputIncDec", () => {
    test("Incrementa el contador al hacer clic en el botón de incremento", () => {
      const cambiarContador = jest.fn();
      const { getByTestId } = render(
        <ComponenteInputIncDec
          label="Cantidad"
          name="cantidad"
          cambiarContador={cambiarContador}
          estadoContador={0}
          controlTotal={10}
          counterTipoEntrada={0}
          setCounterTipoEntrada={jest.fn()}
          setMostrarErrorTotalPersonas={jest.fn()}
        />
      );
  
      const buttonIncrease = getByTestId("button-increase");
      fireEvent.click(buttonIncrease);
  
      expect(cambiarContador).toHaveBeenCalledWith(1);
    });
  
    test("Decrementa el contador al hacer clic en el botón de decremento", () => {
      const cambiarContador = jest.fn();
      const { getByTestId } = render(
        <ComponenteInputIncDec
          label="Cantidad"
          name="cantidad"
          cambiarContador={cambiarContador}
          estadoContador={2}
          controlTotal={10}
          counterTipoEntrada={0}
          setCounterTipoEntrada={jest.fn()}
          setMostrarErrorTotalPersonas={jest.fn()}
        />
      );
  
      const buttonDecrease = getByTestId("button-decrease");
      fireEvent.click(buttonDecrease);
  
      expect(cambiarContador).toHaveBeenCalledWith(1);
    });
  });