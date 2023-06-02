import { Descriptions } from "antd";

import React, { useState, useEffect } from "react";

import "./style.css";

export const Review_info = ({ UserData }) => {
  const filteredPlates = UserData.plates.filter((plate) => plate.trim() !== "");
  const visitorLabels = [
    "Niños de 0 a 6",
    "Niños de 6 a 12",
    "Adultos",
    "Adultos mayores de 65",
    "Niños extranjeros de 0 a 6",
    "Niños extranjeros de 6 a 12",
    "Adultos extranjeros",
    "Adultos mayores extranjeros de 65",
  ];

  let totalPrice = "";
  const [costData, setCostData] = useState(null);

  const stringCantidadVisitantes =
    UserData.visitors[0].toString() +
    "," +
    UserData.visitors[1].toString() +
    "," +
    UserData.visitors[2].toString() +
    "," +
    UserData.visitors[3].toString() +
    "," +
    UserData.visitors[4].toString() +
    "," +
    UserData.visitors[5].toString() +
    "," +
    UserData.visitors[6].toString() +
    "," +
    UserData.visitors[7].toString();

  const prueba = `/backend/reservationCost/${stringCantidadVisitantes}`;
  useEffect(() => {
    fetch(prueba)
      .then((res) => {
        if (!res.ok) {
          console.log("Network response was not ok");
        }
        const resClone = res.clone();
        return resClone.json();
      })
      .then((data) => setCostData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (costData) {
    console.log("costData: ", costData[0].Total);
    totalPrice = costData[0].Total;
  }
  console.log("Prueba: ", prueba);

  console.log("stringCantidadVisitantes: ", stringCantidadVisitantes);

  return (
    <div>
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Nombre persona que reserva:
              </dt>
              <dd className="text-sm font-semibold">
                {UserData.nameUser +
                  " " +
                  UserData.secondName +
                  " " +
                  UserData.firstSurname +
                  " " +
                  UserData.secondSurname}
              </dd>
            </div>

            <div className="flex flex-col pb-3 ">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Identificación:
              </dt>
              <dd className="text-sm font-semibold">{UserData.id}</dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Correo:
              </dt>
              <dd className="text-sm font-semibold">{UserData.mail}</dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Teléfono:
              </dt>
              <dd className="text-sm font-semibold">{UserData.phone}</dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Procedencia:
              </dt>
              <dd className="text-sm font-semibold">
                {UserData.originCountry === "" ? (
                  <Descriptions.Item label="Provincia de Origen">
                    {UserData.originProvince}
                  </Descriptions.Item>
                ) : (
                  <Descriptions.Item label="País de Origen">
                    {UserData.originCountry}
                  </Descriptions.Item>
                )}
              </dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Placas:
              </dt>
              <dd className="text-sm font-semibold">
                {filteredPlates.length > 0 && (
                  <Descriptions.Item label="Placas">
                    {filteredPlates.join(", ")}
                  </Descriptions.Item>
                )}
              </dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Tipo de reservación:
              </dt>
              <dd className="text-sm font-semibold">{UserData.area}</dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Fecha reservación:
              </dt>
              <dd className="text-sm font-semibold">
                {UserData.start_date.toDateString() +
                  " a " +
                  UserData.end_date.toDateString()}
              </dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Total personas reservadas:
              </dt>
              <dd className="text-sm font-semibold">{UserData.totalPeople}</dd>
            </div>

            <div></div>
            <div></div>
            <div></div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Niños de 0 a 6:
              </dt>
              <dd className="text-sm font-semibold">{UserData.visitors[0]}</dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Niños de 6 a 12:
              </dt>
              <dd className="text-sm font-semibold">{UserData.visitors[1]}</dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Adultos:
              </dt>
              <dd className="text-sm font-semibold">{UserData.visitors[2]}</dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Adultos mayores de 65:
              </dt>
              <dd className="text-sm font-semibold">{UserData.visitors[3]}</dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Niños extranjeros de 0 a 6:
              </dt>
              <dd className="text-sm font-semibold">{UserData.visitors[4]}</dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Niños extranjeros de 6 a 12:
              </dt>
              <dd className="text-sm font-semibold">{UserData.visitors[5]}</dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Adultos extranjeros:
              </dt>
              <dd className="text-sm font-semibold">{UserData.visitors[6]}</dd>
            </div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Adultos mayores extranjeros de 65:
              </dt>
              <dd className="text-sm font-semibold">{UserData.visitors[7]}</dd>
            </div>

            <div></div>
            <div></div>
            <div></div>

            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400">
                Monto total a pagar:
              </dt>
              <dd className="text-sm font-semibold">{totalPrice}</dd>
            </div>
          </dl>
        </a>
      </div>
    </div>
  );
};
