import React from 'react';
import './Visitors.css';

const VisitorsList = () => {
    var visitorItems;

    // Fetch JSON from API and build table rows of visitors
    fetch('/backend/visitordata')
        .then((response) => response.json())
        .then((data) => {
            visitorItems = data.visitors.map(visitor =>
                <tr>
                    <td>{visitor.id}</td>
                    <td>{visitor.region}</td>
                    <td>{visitor.status}</td>
                </tr>
            );
        })
        .catch(console.error);

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
