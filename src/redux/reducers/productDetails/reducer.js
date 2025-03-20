import {
    FETCH_PRODUCT_DETAILS_REQUEST,
    FETCH_PRODUCT_DETAILS_SUCCESS,
    FETCH_PRODUCT_DETAILS_FAILURE,
} from './actionTypes';
  
const initialState = {
    status: false,
    details: [],
    error: null,
};
  
export default (state = initialState, action) => {
    switch (action.type) {

        //fetch product details
        case FETCH_PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                status: true,
            };
        case FETCH_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                status: false,
                details: action.payload.details,
                error: null,
            };
        case FETCH_PRODUCT_DETAILS_FAILURE:
            return {
                ...state,
                status: false,
                details: [],
                error: action.payload.error,
            };
        default:
            return {
                ...state,
            };
    }
};
  