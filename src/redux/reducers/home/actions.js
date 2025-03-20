import {
    FETCH_PRODUCT_FETCH_REQUEST,
    FETCH_PRODUCT_FETCH_FAILURE,
    FETCH_PRODUCT_FETCH_SUCCESS,
} from './actionTypes';
  
// fetch product 
export const fetchProductRequest = (
    payload
) => ({
    type: FETCH_PRODUCT_FETCH_REQUEST,
    payload
});
  
export const fetchProductSuccess = (
    payload
) => ({
    type: FETCH_PRODUCT_FETCH_SUCCESS,
    payload
});
  
export const fetchProductFailure = (
    payload
) => ({
    type: FETCH_PRODUCT_FETCH_FAILURE,
    payload
});
  
 