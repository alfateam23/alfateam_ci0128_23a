import { Descriptions } from "antd";
import classNames from "classnames";
import React, { useState, useEffect } from "react";
import {
  ContenedorBotonCentrado,
  Boton,
} from "./Elementos/ElementosFormulario";
import "./style.css";
import CalculateCost from "./CalculateVisitors";

export const Review_info = ({ UserData }) => {
  const filteredPlates = UserData.plates.filter((plate) => plate.trim() !== "");
  const flexCol = classNames("flex", "flex-col", "pb-3");
  const textGray = classNames(
    "text-gray-500",
    "md:text-sm",
    "dark:text-gray-400"
  );
  const fontSemiBold = "text-sm font-semibold";
  let date = UserData.start_date.toDateString();
  date += UserData.end_date instanceof Date ? 
  " to " + UserData.end_date.toDateString() :
  '';
  CalculateCost(UserData);
  return (
    <div>
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Nombre persona que reserva:
              </dt>
              <dd className={fontSemiBold}>
                {UserData.nameUser +
                  " " +
                  UserData.secondName +
                  " " +
                  UserData.firstSurname +
                  " " +
                  UserData.secondSurname}
              </dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Identificación:
              </dt>
              <dd className={fontSemiBold}>{UserData.id}</dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>Correo:</dt>
              <dd
                className={fontSemiBold}
                style={{
                  wordWrap: "break-word",
                  maxHeight: "5em",
                  overflow: "hidden",
                }}
              >
                {UserData.mail}
              </dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>Teléfono:</dt>
              <dd className={fontSemiBold}>{UserData.phone}</dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Procedencia:
              </dt>
              <dd className={fontSemiBold}>
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

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>Placas:</dt>
              <dd className={fontSemiBold}>
                {filteredPlates.length > 0 && (
                  <Descriptions.Item label="Placas">
                    {filteredPlates.join(", ")}
                  </Descriptions.Item>
                )}
              </dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Tipo de reservación:
              </dt>
              <dd className={fontSemiBold}>{UserData.area}</dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Fecha reservación:
              </dt>
              <dd className={fontSemiBold}>
                {date}
              </dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Total personas reservadas:
              </dt>
              <dd className={fontSemiBold}>{UserData.totalPeople}</dd>
            </div>

            <div></div>
            <div></div>
            <div></div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Niños de 0 a 6:
              </dt>
              <dd className={fontSemiBold}>{UserData.visitors[0]}</dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Niños de 6 a 12:
              </dt>
              <dd className={fontSemiBold}>{UserData.visitors[1]}</dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>Adultos:</dt>
              <dd className={fontSemiBold}>{UserData.visitors[2]}</dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Adultos mayores de 65:
              </dt>
              <dd className={fontSemiBold}>{UserData.visitors[3]}</dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Niños extranjeros de 0 a 6:
              </dt>
              <dd className={fontSemiBold}>{UserData.visitors[4]}</dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Niños extranjeros de 6 a 12:
              </dt>
              <dd className={fontSemiBold}>{UserData.visitors[5]}</dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Adultos extranjeros:
              </dt>
              <dd className={fontSemiBold}>{UserData.visitors[6]}</dd>
            </div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Adultos mayores extranjeros de 65:
              </dt>
              <dd className={fontSemiBold}>{UserData.visitors[7]}</dd>
            </div>

            <div></div>
            <div></div>
            <div></div>

            <div className={flexCol}>
              <dt className={classNames(textGray, fontSemiBold)}>
                Monto total a pagar:
              </dt>
              <dd className={fontSemiBold}>{UserData.totalPrice}</dd>
            </div>
          </dl>
        </a>
      </div>
    </div>
  );
};
