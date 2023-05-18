// Login component
// Based on https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

"use strict";

import React, { useState } from 'react';
import './Login.css';
const bcryptjs = require('bcryptjs');
const salt = bcryptjs.genSaltSync(10);

export const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const checkCredentials = () => {
        console.log(username, password);
    };

    const handleSubmit = () => {
        const hash = bcryptjs.hashSync(password, salt);
        console.log(`Sending password as ${hash}`);
    };

    <div class="login">
        <h1>Inicio de sesión Aso Junquillal</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <p>Ingrese su correo electrónico</p>
                <input type="text" minLength={1} maxLength={60} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                <p>Ingrese su contraseña</p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <input type="submit" minLength={1} maxLength={60} name="Iniciar sesión" onClick={checkCredentials} />
        </form>
    </div>
};
