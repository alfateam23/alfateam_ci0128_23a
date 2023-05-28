// Visits report in a range of dates

import { React } from 'react'

export const VisitsReport = ({ startDate, endDate }) => {
    const reportData = fetch(`/api/report/visits?start=${startDate}&end=${endDate}`)
        .then((res) => res.json())
        .catch((err) => console.warn(err))

    return (
        <div>
            <table>

            </table>
        </div>
    );
}
