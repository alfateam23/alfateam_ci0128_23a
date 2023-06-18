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

/* Get all admin users */
router.get('/getAdmins', async (req, res) => {
    try {
        let users = await db.executeQuery('SELECT U.* FROM Usuario U JOIN Administrador A ON U.Cedula = A.Cedula;')
        res.send(users.recordsets[0]);
    } catch (error) {
        res.status(500).send('Error retrieving visitors');
    }
});

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