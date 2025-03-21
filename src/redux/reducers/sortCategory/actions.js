import {
  FETCH_SORT_CATEGORY_REQUEST,
  FETCH_SORT_CATEGORY_SUCCESS,
  FETCH_SORT_CATEGORY_FAILURE,
} from './actionTypes';
  

// fetch Category details
export const fetchSortCategoryRequest = (
  payload
) => ({
  type: FETCH_SORT_CATEGORY_REQUEST,
  payload
});
  
export const fetchSortCategorySuccess = (
  payload
) => ({
  type: FETCH_SORT_CATEGORY_SUCCESS,
  payload
});
export const fetchSortCategoryFailure = (
  payload
) => ({
  type: FETCH_SORT_CATEGORY_FAILURE,
  payload
});