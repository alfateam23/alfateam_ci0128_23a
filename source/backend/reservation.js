const db = require('./DbConfig');

function insertReservation(reservation) {
  
};

async function insertUser(email, id, name, secondName=null,
    lastname1, lastname2=null, status) {
  let result = null;
  try {
      let query = '';
      if (secondName && lastname2) {
          query = `insert into Usuario
          (Email, Cedula, PrimerNombre, SegundoNombre,
              PrimerApellido, SegundoApellido, EstadoActividad)
          values (${email}, ${id}, ${name}, ${secondName},
              ${lastname1}, ${lastname2}, ${status})`;
      } else if (secondName) {
          query = `insert into Usuario
          (Email, Cedula, PrimerNombre, SegundoNombre,
              PrimerApellido, EstadoActividad)
          values (${email}, ${id}, ${name}, ${secondName},
              ${lastname1}, ${status})`;
      } else if (lastname2) {
          query = `insert into Usuario
          (Email, Cedula, PrimerNombre,
              PrimerApellido, SegundoApellido, EstadoActividad)
          values (${email}, ${id}, ${name},
              ${lastname1}, ${lastname2}, ${status})`;
      } else {
          query = `insert into Usuario
          (Email, Cedula, PrimerNombre, PrimerApellido, EstadoActividad)
          values (${email}, ${id}, ${name},
              ${lastname1}, ${status})`;
      }
      console.log(query)
      result = await db.executeQuery(query);
    } catch (error) {
      return error
    }
  return result;
};

async function insertPhone(phone, email) {
  let result = null;
  try {
    const query = `insert into Telefono (Email, Numero) Values
    (${email}, ${phone})`
    result = await db.executeQuery(query);
  } catch (error) {
    return error;
  }
  return result;
};

async function insertClient(email) {
  let result = null;
  try {
    const query = `insert into Cliente (Email) Values
    (${email})`
    result = await db.executeQuery(query);
  } catch (error) {
    return error;
  }
  return result;
};

async function insertVehicle(email, plate) {
  let result = null;
  try {
    const query = `insert into Vehiculo (Email, Placa) Values
    (${email}, ${plate})`
    result = await db.executeQuery(query);
  } catch (error) {
    return error;
  }
  return result;
};

module.exports = {
  insertReservation
};