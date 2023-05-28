// Profits report in a range of dates

import { React } from 'react'

export const ProfitsReport = ({ startdate, enddate }) => {
    const reportData = fetch(`'/backend/reports/visits/:${startdate}/:${enddate}`)
        .then((res) => res.json())
        .catch((err) => console.warn(err))

    return (
        <div>
            <table>

            </table>
        </div>
    );
}
