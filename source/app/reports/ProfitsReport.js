// Profits report in a range of dates

'use client';

import { React, useEffect } from 'react'
import {Table } from 'flowbite-react';

export const ProfitsReport = ({ startdate, enddate }) => {
    const reportData = fetch(`'/backend/reports/visits/:${startdate}/:${enddate}`)
        .then((res) => res.json())
        .catch((err) => console.warn(err))

    return (
        <Table>
            <Table.Head>

            </Table.Head>
        </Table>
    );
}
