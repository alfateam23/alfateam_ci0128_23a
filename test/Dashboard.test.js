/** @jest-environment jsdom */

import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import Dashboard from '../admin_dashboard/layout/sidebar/Dashboard.js';
import Home from '../source/app/admin_dashboard/pages/Home.jsx';
import Settings from '../source/app/admin_dashboard/pages/Settings.jsx';
import Tarifas from '../source/app/admin_dashboard/pages/Tarifas.jsx';

test('Should render Dashboard title', () =>{
    render(<Dashboard/>);
    const title = screen.getByText('Centro de Control');
    expect(title).toBeInThedocument();
})

test('Should render Dashboard tab home', () =>{
    render(<Dashboard/>);
    const title = screen.getByText('Home');
    expect(title).toBeInThedocument();
})

test('Should render Dashboard tab Reservas', () =>{
    render(<Dashboard/>);
    const title = screen.getByText('Reservas');
    expect(title).toBeInThedocument();
})

test('Should render Dashboard tab Lista de Reservas', () =>{
    render(<Dashboard/>);
    const title = screen.getByText('Lista de Reservas');
    expect(title).toBeInThedocument();
})

test('Should render Dashboard tab Reportes', () =>{
    render(<Dashboard/>);
    const title = screen.getByText('Reportes');
    expect(title).toBeInThedocument();
})

test('Should render Dashboard tab Tarifas', () =>{
    render(<Dashboard/>);
    const title = screen.getByText('Tarifas');
    expect(title).toBeInThedocument();
})

test('Should render Dashboard tab Horarios', () =>{
    render(<Dashboard/>);
    const title = screen.getByText('Horarios');
    expect(title).toBeInThedocument();
})

test('Should render Dashboard tab Servicios', () =>{
    render(<Dashboard/>);
    const title = screen.getByText('Servicios');
    expect(title).toBeInThedocument();
})

test('Should render Dashboard tab Usuarios', () =>{
    render(<Dashboard/>);
    const title = screen.getByText('Usuarios');
    expect(title).toBeInThedocument();
})

test('Should render Dashboard tab Log out', () =>{
    render(<Dashboard/>);
    const title = screen.getByText('Log out');
    expect(title).toBeInThedocument();
})

test('Should render text of home from Dashboard', () =>{
    render(<Home/>);
    const text = screen.getByTestId("title-home");
    expect(text).toBeInThedocument();
})

test('Should render title of settings from Dashboard', () =>{
    render(<Settings/>);
    const text = screen.getByTestId("title-settings");
    expect(text).toBeInThedocument();
})

test('Should render title of tarifas', () =>{
    render(<Tarifas/>);
    const text = screen.getByTestId("title-tarifas");
    expect(text).toBeInThedocument();
})

test('Should render table of tarifas', () =>{
    render(<Tarifas/>);
    const text = screen.getByTestId("title-tarifas");
    expect(text).toBeInThedocument();
})

test('Should render a column in tarifas called procedencia', () =>{
    render(<Tarifas/>);
    const text = screen.getByTestId("column-Procedencia");
    expect(text).toBeInThedocument();
})