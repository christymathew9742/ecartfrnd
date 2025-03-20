import {
  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILURE,
} from './actionTypes';
  

// fetch product details
export const fetchProductDetailsRequest = (
  payload
) => ({
  type: FETCH_PRODUCT_DETAILS_REQUEST,
  payload
});
  
export const fetchProductDetailsSuccess = (
  payload
) => ({
  type: FETCH_PRODUCT_DETAILS_SUCCESS,
  payload
});
export const fetchProductDetailsFailure = (
  payload
) => ({
  type: FETCH_PRODUCT_DETAILS_FAILURE,
  payload
});