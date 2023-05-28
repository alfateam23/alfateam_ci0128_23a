// Profits report in a range of dates

import { React } from 'react'

export const ProfitsReport = ({ startDate, endDate }) => {
    const reportData = fetch(`/api/report/profits?start=${startDate}&end=${endDate}`)
        .then((res) => res.json())
        .catch((err) => console.warn(err))

    return (
        <div>
            <table>

            </table>
        </div>
    );
}
