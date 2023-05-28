// Generic components for reports

import { React } from 'react'
import { differenceInDays } from 'date-fns'

export const Report = ({ startDate, endDate, reportType }) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const dayCount = differenceInDays(endDate, startDate)


    switch (reportType) {
        case 'visits':
            const header = ['Tipo de visitante'] + ['']
            break;

        default:
            break;
    }

    return (
        <div>

        </div>
    )
}
