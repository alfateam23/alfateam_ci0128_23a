const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

// middlewar
const bodyParser = require('body-parser');

/* Post for creating an user */
router.post('/generateUser', bodyParser.json(), async (req, res) => {
    try {
        let { Cedula, Email, PrimerNombre, SegundoNombre, 
            PrimerApellido, SegundoApellido, Clave, NombreRol} = req.body
       await setTarifa(TipoProcedencia, TipoVisita, Estatus, CategoriaPago, Monto, Moneda);
       res.status(200).send;
    } catch (error) {
        res.status(500).send('Error while trying to create an user ' + error);
    }
});

/* Post for changing user */
router.post('/changeActive/:cedula', bodyParser.json(), async (req, res) => {
    try {
        let userCedula = req.params.cedula;
        let oppositeEstadoActividad;
        user = await db.executeQuery(
            `SELECT *
            FROM Usuario
            WHERE Cedula = '${userCedula}'; `)
        if (user.EstadoActividad == '0') {
            oppositeEstadoActividad = '1';
        } else {
            oppositeEstadoActividad = '0';
        }
        console.log('OJO')
        console.log('OJO')
        console.log('OJO')
        console.log(user.recordset[0].EstadoActividad)
        oppositeEstadoActividad = !user.recordset[0].EstadoActividad
        console.log(oppositeEstadoActividad)
        console.log(userCedula)
       await changeEstadoActividad(userCedula, oppositeEstadoActividad);
       res.status(200).send;
    } catch (error) {
        res.status(500).send('Error while trying to change an user EstadoActividad' + error);
    }
});


/* Get all admin users */
router.get('/getAdmins', async (req, res) => {
    try {
        let users = await db.executeQuery(`SELECT U.* FROM Usuario U JOIN Administrador A ON U.Cedula = A.Cedula;`)
        res.send(users.recordsets[0]);
    } catch (error) {
        res.status(500).send('Error retrieving visitors');
    }
});

async function changeEstadoActividad (cedula, EstadoActividad) {
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

/* Query for creating an admin user */
async function createUser(Cedula, Email, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, Clave, NombreRol) {
    try {
        const result = await db.executeQuery(`
            UPDATE TipoVisitante
            SET Monto = '${Monto}', Moneda = '${Moneda}'
            WHERE TipoProcedencia = '${TipoProcedencia}'
                AND TipoVisita = '${TipoVisita}'
                AND Estatus = '${Estatus}'
                AND CategoriaPago = '${CategoriaPago}'
        `);
        return result.recordsets[0];
    } catch (error) {
        throw error;
    }
}

/* Retrieve a specific tarifa */
router.get('/editar/:PrimerNombre/:PrimerApellido/:Cedula', async (req, res) => {
    try {
        // console.log(req.params.TipoProcedencia);
        // console.log(req.params.TipoVisita);
         console.log(req.params.Cedula);
        const result = await getTarifa(req.params.Cedula);
        res.send(result);
    } catch (error) {
        res.status(500).send('Error retrieving from tarifa');
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
router.post('/users/editar', bodyParser.json(), async (req, res) => {
    try {
        let { PrimerNombre, PrimerApellido, Cedula} = req.body
       await setUsuario(PrimerNombre, PrimerApellido, Cedula);
       res.status(200).send;
    } catch (error) {
        res.status(500).send('Error saving data from Users' + error);
    }
});


/* Query for updating a specific User */
async function setUsuario(PrimerNombre, PrimerApellido, Cedula) {
    try {
        const result = await db.executeQuery(`
            EXEC UpdateUser
             @PrimerNombre = '${PrimerNombre}', @PrimerApellido = '${PrimerApellido}', @Cedula = '${Cedula}'
        `);
        return result.recordsets[0];
    } catch (error) {
        throw error;
    }
}


module.exports = { router }
