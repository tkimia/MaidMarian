import Axios from 'axios';
import { averageWithoutZeros } from '../utils';

const API_ROOT = 'https://cloud.iexapis.com/stable';
const token = process.env.IEX_KEY || '';

export const GET_COMPANIES_FINISHED = 'GET_COMPANIES_FINISHED';
export const GET_PRICES_STARTED = 'GET_PRICES_STARTED';
export const GET_PRICES_FINISHED = 'GET_PRICES_FINISHED';
export const GET_PRICES_ERROR = 'GET_PRICES_ERROR';

export function getCompanyByName(namePrefix) {
    if (!namePrefix) {
        return {
            type: GET_COMPANIES_FINISHED,
            payload: []
        }
    }

    return (dispatch) => {
        Axios.get(`/api/companies?namePrefix=${namePrefix}`)
        .then(response => dispatch({
            type: GET_COMPANIES_FINISHED,
            payload: response.data
        }));
    };
}

export function getPricesForCompany(company) {
    return dispatch => {
        dispatch({ type: GET_PRICES_STARTED });
        Axios.get(`${API_ROOT}/stock/${company.tickerSymbol}/chart/1m?token=${token}`)
        .then(response => dispatch({
            type: GET_PRICES_FINISHED,
            payload: { 
                company, 
                prices: response.data.map(dayPrices => ({
                    ...dayPrices, 
                    // Sometimes IEX returns zeroes for data it doesn't have. Don't want that in the average.
                    avg: averageWithoutZeros(dayPrices.open, dayPrices.close, dayPrices.high, dayPrices.low).toFixed(2)
                }))
            }
        }))
        .catch(err => dispatch({
            type: GET_PRICES_ERROR
        }));
    }
}