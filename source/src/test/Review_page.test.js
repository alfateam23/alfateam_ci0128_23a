import React from "react";
import { render } from "@testing-library/react";
import { Review_info } from "./Review_info";

// Prueba unitaria para verificar si la información del usuario se muestra correctamente en el componente con pais

describe("Review_info", () => {
  const UserData = {
    nameUser: "Allan",
    secondName: "Berrocal",
    firstSurname: "Berrocal",
    secondSurname: "Allan",
    id: "123456789",
    mail: "Allan.Berrocal@gmail.com",
    phone: "1234567890",
    originCountry: "Costa Rica",
    plates: ["ABC123", "DEF456"],
    area: "Camping",
    start_date: new Date("2023-05-01"),
    end_date: new Date("2023-05-05"),
    totalPeople: 4,
    visitors: [1, 1, 2, 0, 0, 0, 0, 0],
    totalPrice: 5000,
  };

  test("Renderiza la información del usuario correctamente", () => {
    const { getByText } = render(<Review_info UserData={UserData} />);

    expect(getByText("Allan Allan Berrocal Berrocal")).toBeInTheDocument();
    expect(getByText("123456789")).toBeInTheDocument();
    expect(getByText("Allan.Berrocal@gmail.com")).toBeInTheDocument();
    expect(getByText("1234567890")).toBeInTheDocument();
    expect(getByText("País de Origen")).toBeInTheDocument();
    expect(getByText("Costa Rica")).toBeInTheDocument();
    expect(getByText("Placas")).toBeInTheDocument();
    expect(getByText("ABC123, DEF456")).toBeInTheDocument();
    expect(getByText("Camping")).toBeInTheDocument();
    expect(getByText("2023-05-01 to 2023-05-05")).toBeInTheDocument();
    expect(getByText("4")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("₡5000")).toBeInTheDocument();
  });
});

// Prueba unitaria para verificar si la información del usuario se muestra correctamente en el componente con provincia

describe("Review_info", () => {
  const UserData = {
    nameUser: "Allan",
    secondName: "Berrocal",
    firstSurname: "Berrocal",
    secondSurname: "Allan",
    id: "123456789",
    mail: "Allan.Berrocal@gmail.com",
    phone: "1234567890",
    originProvince: "San Jose",
    plates: ["ABC123", "DEF456"],
    area: "Camping",
    start_date: new Date("2023-05-01"),
    end_date: new Date("2023-05-05"),
    totalPeople: 4,
    visitors: [1, 1, 2, 0, 0, 0, 0, 0],
    totalPrice: 5000,
  };

  test("Renderiza la información del usuario correctamente", () => {
    const { getByText } = render(<Review_info UserData={UserData} />);

    expect(getByText("Allan Allan Berrocal Berrocal")).toBeInTheDocument();
    expect(getByText("123456789")).toBeInTheDocument();
    expect(getByText("Allan.Berrocal@gmail.com")).toBeInTheDocument();
    expect(getByText("1234567890")).toBeInTheDocument();
    expect(getByText("País de Origen")).toBeInTheDocument();
    expect(getByText("San Jose")).toBeInTheDocument();
    expect(getByText("Placas")).toBeInTheDocument();
    expect(getByText("ABC123, DEF456")).toBeInTheDocument();
    expect(getByText("Camping")).toBeInTheDocument();
    expect(getByText("2023-05-01 to 2023-05-05")).toBeInTheDocument();
    expect(getByText("4")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("₡5000")).toBeInTheDocument();
  });
});

describe("Review_page", () => {
  test("Renderiza el componente correctamente", () => {
    const userData = {
      nameUser: "Allan",
      secondName: "Berrocal",
      firstSurname: "Berrocal",
      secondSurname: "Allan",
      id: "123456789",
      mail: "Allan.Berrocal@gmail.com",
      phone: "1234567890",
      originProvince: "San Jose",
      plates: ["ABC123", "DEF456"],
      area: "Camping",
      start_date: new Date("2023-05-01"),
      end_date: new Date("2023-05-05"),
      totalPeople: 4,
      visitors: [1, 1, 2, 0, 0, 0, 0, 0],
      totalPrice: 5000,
    };
    const { getByText } = render(<Review_page UserData={userData} />);
    const nombrePersonaReserva = getByText(/Nombre persona que reserva/i);

    expect(nombrePersonaReserva.nextSibling.textContent).toBe(
      "Allan Allan Berrocal Berrocal "
    );
  });
});
