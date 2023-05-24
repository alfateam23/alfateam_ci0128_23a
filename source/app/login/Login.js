// Login component
// Based on https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

import React, { useState } from 'react';
import './Login.css';

export const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('Sending credentials', username, password);
    };

    return (
        <div className="login">
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
                <div>
                    <button type="submit"> Iniciar sesión </button>
                </div>
            </form>
        </div>
    );
};
