import React from 'react';
import './Visitors.css';

const visitorsRawData = [
    { 'id': '20', 'region': 'España', 'status': 'Adulto Regular' },
    { 'id': '30', 'region': 'Alajuela', 'status': 'Niño Exonerado' },
    { 'id': '40', 'region': 'Holanda', 'status': 'Adulto Mayor' },
    { 'id': '50', 'region': 'Alajuela', 'status': 'Adulto Regular' },
]

const VisitorsList = () => {
    const visitorItems = visitorsRawData.map(visitor =>
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
