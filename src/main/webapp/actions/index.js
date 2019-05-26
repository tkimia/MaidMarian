import axios from 'axios';

export const GET_COMPANIES_FINISHED = 'GET_COMPANIES_FINISHED';

export function getCompanyByName(namePrefix) {
    return (dispatch) => {
        return axios.get(`/api/companies?namePrefix=${namePrefix}`)
        .then(response => dispatch({
            type: GET_COMPANIES_FINISHED,
            companies: response.data
        }));
    };
}