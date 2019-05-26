import axios from 'axios';

export const GET_COMPANIES_FINISHED = 'GET_COMPANIES_FINISHED';

export function getCompanyByName(namePrefix) {
    if (!namePrefix) {
        return {
            type: GET_COMPANIES_FINISHED,
            companies: []
        }
    }
    
    return (dispatch) => {
        return axios.get(`/api/companies?namePrefix=${namePrefix}`)
        .then(response => dispatch({
            type: GET_COMPANIES_FINISHED,
            companies: response.data
        }));
    };
}