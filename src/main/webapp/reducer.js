import { GET_COMPANIES_FINISHED, GET_PRICES_FINISHED, GET_PRICES_STARTED } from "./actions";

const defaultState = {
    showCompanyList: false,
    companiesFound: [],
    stockData: null,
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
                loadingStockData: true
            }
        case GET_PRICES_FINISHED:
            return {
                ...state,
                showCompanyList: false,
                stockData: action.payload,
                loadingStockData: false
            }
        default:
            return state;
    }
}