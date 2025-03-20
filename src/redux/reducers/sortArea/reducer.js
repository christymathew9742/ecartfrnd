import {
    FETCH_SORT_AREA_REQUEST,
    FETCH_SORT_AREA_SUCCESS,
    FETCH_SORT_AREA_FAILURE,
} from './actionTypes';
  
const initialState = {
    status: false,
    sort: [],
    error: null,
};
  
export default (state = initialState, action) => {
    switch (action.type) {

        //fetch product details
        case FETCH_SORT_AREA_REQUEST:
            return {
                ...state,
                status: false,
            };
        case FETCH_SORT_AREA_SUCCESS:
            return {
                ...state,
                status: true,
                sort: action.payload.sort,
                error: null,
            };
        case FETCH_SORT_AREA_FAILURE:
            return {
                ...state,
                status: false,
                sort: [],
                error: action.payload.error,
            };
        default:
            return {
                ...state,
            };
    }
};
  