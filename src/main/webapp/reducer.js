import { GET_COMPANIES_FINISHED, GET_PRICES_FINISHED, GET_PRICES_STARTED, GET_PRICES_ERROR } from "./actions";

const defaultState = {
    showCompanyList: false,
    companiesFound: [],
    stockData: null,
    errorMessage: null,
    loadingStockData: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_COMPANIES_FINISHED:
            return {
                ...state,
                companiesFound: action.payload,
                showCompanyList: true,
            }
        case GET_PRICES_STARTED:
            return {
                ...state,
                showCompanyList: false,
                loadingStockData: true
            }
        case GET_PRICES_FINISHED:
            return {
                ...state,
                stockData: action.payload,
                loadingStockData: false,
                errorMessage: null
            }
        case GET_PRICES_ERROR:
            return {
                ...state,
                errorMessage: 'Could not retrieve stock prices.',
                stockData: null,
                loadingStockData: false
            }
        default:
            return state;
    }
}