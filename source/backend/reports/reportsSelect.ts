// Endpoints for report datasets

const db = require('../DbConfig')
import { differenceInDays } from 'date-fns'

export async function selectVisitsInDateRange(startdate: Date, enddate: Date) {
    if (differenceInDays(startdate, enddate) >= 0) {
        try {
            const query = ``

        }
        catch (error) {
            throw error;
        }
    }
}

export async function selectProfitsInDateRange(startdate: Date, enddate: Date) {
    if (differenceInDays(startdate, enddate) >= 0) {
        try {
            const query = ``

        }
        catch (error) {
            throw error;
        }
    }
}
