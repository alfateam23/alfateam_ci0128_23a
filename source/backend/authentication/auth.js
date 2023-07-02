const db = require('../DbConfig');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcryptjs = require("bcryptjs");

// middlewar
const bodyParser = require('body-parser');
const withAuth = require('./middleware');

/* Secret Key */
const secret = 'mysecretsshhh';


/* For checking if user has valid token */
router.get('/checkToken', withAuth, function (req, res) {
    res.sendStatus(200);
});

/* Post for login an user */
router.post('/login', bodyParser.json(), async (req, res) => {
    try {
        const { username, password } = req.body
        // Aquí se compara la password que ingresó el usuario con la hasheada de la db
        userExist = await checkUser(username);
        if (!userExist) {
            res.status(401)
                .json({
                    error: 'Incorrect email or password'
                });
        } else {
            userMatches = await checkPassword(username, password);
            if (!userMatches) {
                res.status(401)
                    .json({
                        error: 'Incorrect username or password'
                    });
            } else {
                // Generates token
                const payload = { username };
                const token = jwt.sign(payload, secret, {
                    expiresIn: '30m' // expiration of cookie
                });
                res.cookie('token', token, { httpOnly: true })
                    .sendStatus(200);
            }
        }
        res.status(200).send;
    } catch (error) {
        res.status(500).send('Error while trying to login an user ' + error);
    }
});

/* Checks if the user exist */
async function checkUser(username) {
    try {
        // hace query y retorna si hay un usuario con ese username
        const result = await db.executeQuery(`
        SELECT Cedula
        FROM Administrador
        WHERE Cedula = '${username}'
        `);
        if (result.recordsets[0].length === 0) {
            // console.log('No user found');
            return false;
        } else {
            // console.log('User found');
            return true;
        }
    } catch (error) {
        throw 'Error while trying to login an user, in function query' + error;
    }
}

/* Checks if the user ID matches with password */
async function checkPassword(username, password) {
    try {
        const result = await db.executeQuery(`
        SELECT Clave
        FROM Administrador
        WHERE Cedula = '${username}'
        `);

        const recordset = result.recordsets[0];
        const { Clave } = recordset[0];
        let isEqual = await compareHash(password, Clave);

        if (!Clave) {
            // console.log('No password found in DB');
            return false;
        } else {
            if (isEqual) {
                // console.log('Correct username & password');
                return true;
            } else {
                // console.log('Password not matching username');
                return false;
            }
        }
    } catch (error) {
        throw 'Error while trying to login an user, in function query' + error;
    }
}

async function compareHash(password,Clave) {
    return bcryptjs.compare(password, Clave)
}


module.exports = { router }
