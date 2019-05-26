import { GET_COMPANIES_FINISHED } from "./actions";

const defaultState = {
    showCompanyAutocomplete: false,
    companyAutocompleteList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_COMPANIES_FINISHED:
        return {
            ...state,
            companyAutocompleteList: action.companies,
            showCompanyAutocomplete: true,
        }
        default:
        return state;
    }
}