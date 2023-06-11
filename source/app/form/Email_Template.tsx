import React from "react";
import { Head } from "@react-email/head";
import { Html } from "@react-email/html";
import { Container } from "@react-email/container";
import { Column } from "@react-email/column";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Img } from "@react-email/img";
import { Preview } from "@react-email/preview";
import { Body } from "@react-email/body";
import { Heading } from "@react-email/heading";
import { Row } from "@react-email/row";

export const Template = ({ UserData }) => {
  const date =
    UserData.area === "Camping"
      ? `${UserData.start_date.toDateString()} to ${UserData.end_date.toDateString()}`
      : UserData.start_date.toDateString();

  const originText =
    UserData.originCountry !== ""
      ? `${UserData.originCountry}`
      : UserData.originProvince !== ""
      ? ` ${UserData.originProvince}`
      : "";

  const plateLines = UserData.plates
    .filter((plate) => plate !== "")
    .map((plate, index) => (
      <Text style={paragraph} key={index}>
        <b>Placa {index + 1}: </b>
        {plate}
      </Text>
    ));

  const visitorLines = [
    UserData.visitors[0] !== 0 ? (
      <Text style={paragraph} key="visitor1">
        <b>Niños de 0 a 6: </b>
        {UserData.visitors[0]}
      </Text>
    ) : null,
    UserData.visitors[1] !== 0 ? (
      <Text style={paragraph} key="visitor2">
        <b>Niños de 6 a 12: </b>
        {UserData.visitors[1]}
      </Text>
    ) : null,
    UserData.visitors[2] !== 0 ? (
      <Text style={paragraph} key="visitor3">
        <b>Adultos: </b>
        {UserData.visitors[2]}
      </Text>
    ) : null,
    UserData.visitors[3] !== 0 ? (
      <Text style={paragraph} key="visitor4">
        <b>Adultos mayores de 65: </b>
        {UserData.visitors[3]}
      </Text>
    ) : null,
    UserData.visitors[4] !== 0 ? (
      <Text style={paragraph} key="visitor5">
        <b>Niños extranjeros de 0 a 6: </b>
        {UserData.visitors[4]}
      </Text>
    ) : null,
    UserData.visitors[5] !== 0 ? (
      <Text style={paragraph} key="visitor6">
        <b>Niños extranjeros de 6 a 12: </b>
        {UserData.visitors[5]}
      </Text>
    ) : null,
    UserData.visitors[6] !== 0 ? (
      <Text style={paragraph} key="visitor7">
        <b>Adultos extranjeros: </b>
        {UserData.visitors[6]}
      </Text>
    ) : null,
    UserData.visitors[7] !== 0 ? (
      <Text style={paragraph} key="visitor8">
        <b>Adultos mayores extranjeros de 65: </b>
        {UserData.visitors[7]}
      </Text>
    ) : null,
  ];

  const visitorText = visitorLines.filter((line) => line !== null);

  return (
    <Html>
      <Head />
      <Preview>Reservación Reserva Junquillal</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Estimado(a) Visitante
                </Heading>
                <Heading
                  as="h3"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Gracias por reservar con nosotros! A continuación, te
                  mostramos los detalles de tu reservación:
                </Heading>

                <Heading
                  as="h4"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Datos Personales
                </Heading>

                <Text style={paragraph}>
                  <b>Nombre: </b>
                  {UserData.nameUser +
                    " " +
                    UserData.firstSurname +
                    " " +
                    UserData.secondSurname}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Correo: </b>
                  {UserData.mail}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Telefono: </b>
                  {UserData.phone}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Procedencia: </b>
                  {originText}
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Código de reservación: </b>
                </Text>

                <Heading
                  as="h4"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Detalles de la reservación
                </Heading>
                <Text style={paragraph}>
                  <b>Tipo de reservación: </b>
                  {UserData.area}
                </Text>

                <Text style={paragraph}>
                  <b>Fecha reservación: </b>
                  {date}
                </Text>
                {plateLines.length > 0 ? (
                  <React.Fragment>
                    <Text style={paragraph}>
                      <b>Placas de carros: </b>
                    </Text>
                    {plateLines}
                  </React.Fragment>
                ) : null}
                <Text style={paragraph}>
                  <b>Total de personas que van a reservar: </b>
                  {UserData.totalPeople}
                </Text>
                {visitorText}
                <Text style={paragraph}>
                  <b>Monto total a pagar: ₡</b>
                  {UserData.totalPrice}
                </Text>
                <Text style={paragraph}>
                  <b>
                    Los métodos para realizar el pago son sinpe móvil o
                    transferencia bancaria.
                  </b>
                </Text>
                <Text style={paragraph}>
                  <b>
                    Si necesitas realizar alguna modificación en tu reservación,
                    por favor contáctanos lo antes posible.
                  </b>
                </Text>
              </Column>
            </Row>
          </Section>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2023 | Refugio Junquillal, Guanacaste, Costa Rica |
            www.RefugioJunquillal.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default Template;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  padding: "12px 30px",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px 40px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
