// Profits report in a range of dates

'use client';

import { React, useEffect, useState } from 'react'
import { Table } from 'flowbite-react';

function Report({ startdate, enddate, type }) {
    const [reportData, setreportData] = useState(null);
    const endpoint = "";

    switch (type) {
        case 'visits':
            endpoint = `/backend/reports/visits/:${startdate}/:${enddate}`
            break;
        case 'profits':
            endpoint = `/backend/reports/profits/:${startdate}/:${enddate}`
            break;
        default:
            break;
    }

    useEffect(() => {
        fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify({
                UserData
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            if (!res.ok) {
                console.log('Network response was not ok');
            }
            console.log(res.json());
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [reportData]);

    const reportItems = reportData.map(item =>
        <tr>
            <td>{visitor.id}</td>
            <td>{visitor.region}</td>
            <td>{visitor.status}</td>
        </tr>
    );

    return (
        <Table>
            <Table.Head>

            </Table.Head>

        </Table>
    );

}

export const VisitsReport = ({ startdate, enddate }) => {
    return (
        <Report startdate={startdate} enddate={enddate} type='visits' />
    );
}

export const ProfitsReport = ({ startdate, enddate }) => {
    return (
        <Report startdate={startdate} enddate={enddate} type='profits' />
    );
}
