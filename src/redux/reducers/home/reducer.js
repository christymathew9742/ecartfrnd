import {
    FETCH_PRODUCT_FETCH_REQUEST,
    FETCH_PRODUCT_FETCH_SUCCESS,
    FETCH_PRODUCT_FETCH_FAILURE,
} from './actionTypes';
  
const initialState = {
    status: false,
    todos: [],
    error: null,
};
  
export default (state = initialState, action) => {
    switch (action.type) {
        //fetch product
        case FETCH_PRODUCT_FETCH_REQUEST:
        return {
            ...state,
            status: false,
        };
        case FETCH_PRODUCT_FETCH_SUCCESS:
            return {
                ...state,
                status: true,
                todos: action.payload.todos,
                error: null,
            };
        case FETCH_PRODUCT_FETCH_FAILURE:
            return {
                ...state,
                status: false,
                todos: [],
                error: action.payload.error,
            };
        default:
            return {
            ...state,
            };
    }
};
  