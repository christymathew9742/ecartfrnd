import {
  FETCH_SORT_AREA_REQUEST,
  FETCH_SORT_AREA_SUCCESS,
  FETCH_SORT_AREA_FAILURE,
} from './actionTypes';
  

// fetch product details
export const fetchSortAreaRequest = (
  payload
) => ({
  type: FETCH_SORT_AREA_REQUEST,
  payload
});
  
export const fetchSortAreaSuccess = (
  payload
) => ({
  type: FETCH_SORT_AREA_SUCCESS,
  payload
});
export const fetchSortAreaFailure = (
  payload
) => ({
  type: FETCH_SORT_AREA_FAILURE,
  payload
});