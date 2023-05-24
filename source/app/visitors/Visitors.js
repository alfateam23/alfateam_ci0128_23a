import React from 'react';
import './Visitors.css';

// Get list of visitors
function getVisitors() {
    fetch('/backend/visitordata')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Cannot fetch visitors. Status: ${response.status}`);
            }
            return response.JSON();
        })
};

const VisitorsList = () => {
    const visitorItems = getVisitors().map(visitor =>
        <tr>
            <td>{visitor.id}</td>
            <td>{visitor.region}</td>
            <td>{visitor.status}</td>
        </tr>
    );

    return (
        <div>
            <table>
                <thead>
                    <td>ID</td>
                    <td>Procedencia</td>
                    <td>Estatus</td>
                </thead>
                <tbody>
                    {visitorItems}
                </tbody>
            </table>
        </div>
    );
};

export const Visitors = () => {
    return (
        <div>
            <VisitorsList />
        </div>
    );
};
