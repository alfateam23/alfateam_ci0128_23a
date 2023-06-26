const db = require("../DbConfig");
const express = require("express");
const router = express.Router();

// middlewar
const bodyParser = require("body-parser");

/* Post for creating an user */
router.post("/generateUser", bodyParser.json(), async (req, res) => {
  try {
    let {
      Cedula,
      Email,
      PrimerNombre,
      SegundoNombre,
      PrimerApellido,
      SegundoApellido,
      Clave,
      NombreRol,
    } = req.body;
    await setTarifa(
      TipoProcedencia,
      TipoVisita,
      Estatus,
      CategoriaPago,
      Monto,
      Moneda
    );
    res.status(200).send;
  } catch (error) {
    res.status(500).send("Error while trying to create an user " + error);
  }
});

/* Post for changing user */
router.post("/changeActive/:cedula", bodyParser.json(), async (req, res) => {
  try {
    let userCedula = req.params.cedula;
    let oppositeEstadoActividad;
    user = await db.executeQuery(
      `SELECT *
            FROM Usuario
            WHERE Cedula = '${userCedula}'; `
    );
    if (user.EstadoActividad == "0") {
      oppositeEstadoActividad = "1";
    } else {
      oppositeEstadoActividad = "0";
    }
    console.log("OJO");
    console.log("OJO");
    console.log("OJO");
    console.log(user.recordset[0].EstadoActividad);
    oppositeEstadoActividad = !user.recordset[0].EstadoActividad;
    console.log(oppositeEstadoActividad);
    console.log(userCedula);
    await changeEstadoActividad(userCedula, oppositeEstadoActividad);
    res.status(200).send;
  } catch (error) {
    res
      .status(500)
      .send("Error while trying to change an user EstadoActividad" + error);
  }
});

/* Get all admin users */
router.get("/getAdmins", async (req, res) => {
  try {
    let users = await db.executeQuery(
      `SELECT U.* FROM Usuario U JOIN Administrador A ON U.Cedula = A.Cedula;`
    );
    res.send(users.recordsets[0]);
  } catch (error) {
    res.status(500).send("Error retrieving visitors");
  }
});

async function changeEstadoActividad(cedula, EstadoActividad) {
  try {
    const result = await db.executeQuery(`
            UPDATE Usuario
            SET EstadoActividad = '${EstadoActividad}'
            WHERE Cedula = '${cedula}'
        `);
  } catch (error) {
    throw error;
  }
}

/* Retrieve a specific tarifa */
router.get("/editar/:Cedula", async (req, res) => {
  try {
    // console.log(req.params.TipoProcedencia);
    // console.log(req.params.TipoVisita);
    console.log(req.params.Cedula);
    const result = await getTarifa(req.params.Cedula);
    res.send(result);
  } catch (error) {
    res.status(500).send("Error retrieving from tarifa");
  }
});

/* Query for getting a specific tarifa */
async function getTarifa(Cedula) {
  try {
    const result = await db.executeQuery(`
        SELECT *
        FROM Usuario
        WHERE Cedula = '${Cedula}'   
      `);
    return result.recordsets[0];
  } catch (error) {
    throw error;
  }
}

/* Post for editing a specific User */
router.post("/editar", bodyParser.json(), async (req, res) => {
  try {
    let { PrimerNombre, PrimerApellido, SegundoApellido, Email, Cedula } =
      req.body;
    await setUsuario(
      PrimerNombre,
      PrimerApellido,
      SegundoApellido,
      Email,
      Cedula
    );
    res.status(200).send("Usuario actualizado correctamente");
  } catch (error) {
    res.status(500).send("Error saving data from Users" + error);
  }
});

/* Query for updating a specific User */
async function setUsuario(
  PrimerNombre,
  PrimerApellido,
  SegundoApellido,
  Email,
  Cedula
) {
  try {
    const result = await db.executeQuery(`
            EXEC UpdateUser
             @PrimerNombre = '${PrimerNombre}',
             @PrimerApellido = '${PrimerApellido}', 
             @SegundoApellido = '${SegundoApellido}', 
             @Email = '${Email}', 
             @Cedula = '${Cedula}'
        `);
    return result.recordsets[0];
  } catch (error) {
    throw error;
  }
}

// Post for creating an admin user
router.post("/create", bodyParser.json(), async (req, res) => {
  try {
    let {
      PrimerNombre,
      SegundoNombre,
      PrimerApellido,
      SegundoApellido,
      Email,
      Cedula,
      Clave,
      NombreRol,
    } = req.body;
    //console.log("Desde el backend PrimerNombre: "+ PrimerNombre);
    await createUser(
      PrimerNombre,
      SegundoNombre,
      PrimerApellido,
      SegundoApellido,
      Email,
      Cedula,
      Clave,
      NombreRol
    );
    res.status(200).send("Usuario actualizado correctamente");
  } catch (error) {
    console.log(error)
    res.status(500).send("Error saving data from Users" + error);
  }
});

// Query for creating an admin user
async function createUser(
  PrimerNombre,
  SegundoNombre,
  PrimerApellido,
  SegundoApellido,
  Email,
  Cedula,
  Clave,
  NombreRol
) {
  try {
    //console.log("Desde el create User: "+ PrimerNombre);
    const result = await db.executeQuery(`
            EXEC InsertAdmin
             @PrimerNombre = '${PrimerNombre}',
             @SegundoNombre = '${SegundoNombre}',
             @PrimerApellido = '${PrimerApellido}', 
             @SegundoApellido = '${SegundoApellido}', 
             @Email = '${Email}', 
             @Cedula = '${Cedula}',
             @Clave = '${Clave}', 
             @NombreRol = '${NombreRol}' 
        `);
    return result.recordsets[0];
  } catch (error) {
    throw error;
  }
}
module.exports = { router };
