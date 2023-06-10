const GeneratorEmailMessage = (UserData, code) => {
  const date = UserData.area === 'Camping' ?
    UserData.start_date.toDateString() + " to " + UserData.end_date.toDateString() :
    UserData.start_date.toDateString();

  const plateLines = UserData.plates.filter(plate => plate !== '').map((plate, index) => `Placa ${index + 1}: ${plate}`);
  const plateText = plateLines.length > 0 ? plateLines.join('\n') : '';

  const visitorLines = [
    UserData.visitors[0] !== 0 ? `Niños de 0 a 6: ${UserData.visitors[0]}` : '',
    UserData.visitors[1] !== 0 ? `Niños de 6 a 12: ${UserData.visitors[1]}` : '',
    UserData.visitors[2] !== 0 ? `Adultos: ${UserData.visitors[2]}` : '',
    UserData.visitors[3] !== 0 ? `Adultos mayores de 65: ${UserData.visitors[3]}` : '',
    UserData.visitors[4] !== 0 ? `Niños extranjeros de 0 a 6: ${UserData.visitors[4]}` : '',
    UserData.visitors[5] !== 0 ? `Niños extranjeros de 6 a 12: ${UserData.visitors[5]}` : '',
    UserData.visitors[6] !== 0 ? `Adultos extranjeros: ${UserData.visitors[6]}` : '',
    UserData.visitors[7] !== 0 ? `Adultos mayores extranjeros de 65: ${UserData.visitors[7]}` : '',
  ];
  const visitorText = visitorLines.filter(line => line !== '').join('\n');
  

  const mensaje = `Confirmación de Reservación
    
    Estimado(a) Visitante
  
    Gracias por reservar con nosotros! A continuación, te mostramos los detalles de tu reservación:
  
    Datos Personales
    
      Nombre: ${UserData.nameUser + " " + UserData.firstSurname + " " + UserData.secondSurname}
      Identificación: ${UserData.id}
      Correo: ${UserData.mail}
      Telefono: ${UserData.phone}
      ${UserData.originCountry !== '' ? `Procedencia: ${UserData.originCountry}` : ''}
      ${UserData.originProvince !== '' ? `Procedencia: ${UserData.originProvince}` : ''}
      Código de reserva: ${code}

  
    Detalles de la Reservación
      Tipo de reservación: ${UserData.area}
      Fecha reservación: ${date}

      Placas de carros:
      ${plateText}

      Total de personas que van a reservar: ${UserData.totalPeople}
      ${visitorText}

      Monto total a pagar: ₡${UserData.totalPrice}

      Los métodos para realizar el pago son sinpe móvil o transferencia bancaria.
  
    Si necesitas realizar alguna modificación en tu reservación, por favor contáctanos lo antes posible.
  
    ¡Esperamos verte pronto!
  
    Atentamente,
    Aso Junquillal`;

  return mensaje;
};

export default GeneratorEmailMessage;
