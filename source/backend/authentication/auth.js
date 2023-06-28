const db = require('../DbConfig');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// middlewar
const bodyParser = require('body-parser');
const withAuth = require('./middleware');

/* Secret Key */
const secret = 'mysecretsshhh';


/* For checking if user has valid token */
router.get('/checkToken', withAuth, function(req, res) {
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
                    expiresIn: '2m' // expiration of cookie
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
        // const result = await db.executeQuery(`username = '${username}'`);
        return true;
    } catch (error) {
        throw 'Error while trying to login an user, in function query' + error;
    }
}

/* Checks if the user ID matches with password */
async function checkPassword(username, password) {
    try {
        // hace query y retorna si la contraseña coincide o no
        // const result = await db.executeQuery(`username = '${username}' password = '${password}'`);
        return true;
    } catch (error) {
        throw 'Error while trying to login an user, in function query' + error;
    }
}

module.exports = { router }
