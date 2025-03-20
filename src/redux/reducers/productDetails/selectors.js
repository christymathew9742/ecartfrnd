
import { createSelector } from 'reselect';

const getPending = (state) => state.productDetailReducer;

const getProductDetails = (state) => state.productDetailReducer;

const getError = (state) => state.productDetailReducer;

export const getProductDetailsSelector = createSelector(getProductDetails, (details) => details);
export const getPendingSelector = createSelector(getPending,(pending) => pending);
export const getErrorSelector = createSelector(getError, (error) => error);

