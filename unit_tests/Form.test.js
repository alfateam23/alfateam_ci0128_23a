import { render, fireEvent } from "@testing-library/react";
import { FormularioView } from "./form";

// Prueba unitaria para verificar la validación de un formato de correo electrónico válido

test("El campo de correo electrónico muestra un mensaje de error si el formato es inválido", () => {
  const { getByLabelText, getByText } = render(<FormularioView />);
  const emailInput = getByLabelText("Correo electrónico");
  const enviarButton = getByText("Enviar");

  fireEvent.change(emailInput, { target: { value: "correo@invalido" } });
  fireEvent.click(enviarButton);

  const emailError = getByText("Ingrese un correo electrónico válido");
  expect(emailError).toBeInTheDocument();
});

// Prueba unitaria para verificar el campo de entrada de texto de nombre

test("El formulario contiene un campo de entrada de texto", () => {
  const { getByLabelText } = render(<FormularioView />);
  const nombreInput = getByLabelText("Nombre");
  expect(nombreInput).toBeInTheDocument();
  expect(nombreInput.type).toBe("text");
});

// Prueba unitaria para verificar el campo de entrada de texto de apellido

test("El formulario contiene un campo de entrada de texto", () => {
  const { getByLabelText } = render(<FormularioView />);
  const nombreInput = getByLabelText("Apellido");
  expect(nombreInput).toBeInTheDocument();
  expect(nombreInput.type).toBe("text");
});

// Prueba unitaria para verificar el campo de entrada de texto de id

test("El formulario contiene un campo de entrada de texto", () => {
  const { getByLabelText } = render(<FormularioView />);
  const nombreInput = getByLabelText("identificacionUsuario");
  expect(nombreInput).toBeInTheDocument();
  expect(nombreInput.type).toBe("text");
});

// Prueba unitaria para verificar el campo de entrada de texto de telefono

test("El formulario contiene un campo de entrada de texto", () => {
  const { getByLabelText } = render(<FormularioView />);
  const nombreInput = getByLabelText("telefono");
  expect(nombreInput).toBeInTheDocument();
  expect(Number.isInteger(parseInt(telefonoInput.value))).toBe(true)
});

// Prueba unitaria para verificar el campo de entrada de texto de correo

test("El formulario contiene un campo de entrada de texto", () => {
  const { getByLabelText } = render(<FormularioView />);
  const nombreInput = getByLabelText("correo");
  expect(nombreInput).toBeInTheDocument();
  expect(nombreInput.type).toBe("text");
});

// Prueba unitaria para verificar el campo de entrada de texto de placa

test("El formulario contiene un campo de entrada de texto", () => {
  const { getByLabelText } = render(<FormularioView />);
  const nombreInput = getByLabelText("placa");
  expect(nombreInput).toBeInTheDocument();
  expect(nombreInput.type).toBe("text");
});

// Prueba unitaria para verificar el campo de entrada de texto de selectOriginCountry

test("El formulario contiene un campo de entrada de texto", () => {
  const { getByLabelText } = render(<FormularioView />);
  const nombreInput = getByLabelText("selectOriginCountry");
  expect(nombreInput).toBeInTheDocument();
  expect(nombreInput.type).toBe("text");
});


// Prueba unitaria para verificar la validación del campo

test("El campo de nombre muestra un mensaje de error si está vacío al enviar", () => {
  const { getByLabelText, getByText } = render(<FormularioView />);
  const enviarButton = getByText("Enviar");

  fireEvent.click(enviarButton);

  const nombreError = getByText("Este campo es requerido");
  expect(nombreError).toBeInTheDocument();
});


