import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import imagen from "./imagenMapa/Map.JPG";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Mapa() {
  function Imagen() {
    return (
      <div>
        <img src={imagen} alt="Mapa de orientación" />
      </div>
    );
  }

  const registros = [
    {
      id: 1,
      titulo: "Parcela 1",
      limite: 10,
      disponibles: 10,
    },
    {
      id: 2,
      titulo: "Parcela 2",
      limite: 10,
      disponibles: 10,
    },
    {
      id: 3,
      titulo: "Parcela 3",
      limite: 15,
      disponibles: 15,
    },
    {
      id: 4,
      titulo: "Parcela 4",
      limite: 5,
      disponibles: 5,
    },
    {
      id: 5,
      titulo: "Parcela 5",
      limite: 10,
      disponibles: 10,
    },
    {
      id: 6,
      titulo: "Parcela 6",
      limite: 10,
      disponibles: 10,
    },
    {
      id: 7,
      titulo: "Parcela 7",
      limite: 10,
      disponibles: 10,
    },
    {
      id: 8,
      titulo: "Parcela 8",
      limite: 10,
      disponibles: 10,
    },
    {
      id: 9,
      titulo: "Parcela 9",
      limite: 5,
      disponibles: 5,
    },
    {
      id: 10,
      titulo: "Parcela 10",
      limite: 10,
      disponibles: 10,
    },
    {
      id: 11,
      titulo: "Parcela 11",
      limite: 15,
      disponibles: 15,
    },
    {
      id: 12,
      titulo: "Parcela 12",
      limite: 15,
      disponibles: 15,
    },
    {
      id: 13,
      titulo: "Parcela 13",
      limite: 15,
      disponibles: 15,
    },
    {
      id: 14,
      titulo: "Parcela 14",
      limite: 10,
      disponibles: 10,
    },
    {
      id: 15,
      titulo: "Parcela 15",
      limite: 5,
      disponibles: 5,
    },
    {
      id: 16,
      titulo: "Parcela 16",
      limite: 10,
      disponibles: 10,
    },
    {
      id: 17,
      titulo: "Parcela 17",
      limite: 10,
      disponibles: 10,
    },
    {
      id: 18,
      titulo: "Parcela 18",
      limite: 10,
      disponibles: 10,
    },
    {
      id: 19,
      titulo: "Parcela 19",
      limite: 10,
      disponibles: 10,
    },
    {
      id: 20,
      titulo: "Parcela 20",
      limite: 5,
      disponibles: 5,
    },
    {
      id: 21,
      titulo: "Parcela 21",
      limite: 5,
      disponibles: 5,
    },
    {
      id: 22,
      titulo: "Parcela 22",
      limite: 10,
      disponibles: 10,
    },
    {
      id: 23,
      titulo: "Parcela 23",
      limite: 5,
      disponibles: 5,
    },
    {
      id: 24,
      titulo: "Parcela 10",
      limite: 10,
      disponibles: 10,
    },
  ];

  return (
    <div>
      <Imagen />
      Digite la Parcela que desea <input></input>
    </div>
  );
}

root.render(<Mapa />);

