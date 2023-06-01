// Visits report in a range of dates

import { React, useEffect } from 'react'

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

const visitorItems = getVisitors().map(visitor =>
    <tr>
        <td>{visitor.id}</td>
        <td>{visitor.region}</td>
        <td>{visitor.status}</td>
    </tr>
);


export const VisitsReport = ({ startdate, enddate }) => {
    const visits = []

    fetch(`'/backend/reports/visits/:${startdate}/:${enddate}`)
    .then((res) => res.json())
        .catch((err) => console.warn(err))

    reportData.map

    return (
        <div>
            <table>
            {reportData}
            </table>
        </div>
    );
}
