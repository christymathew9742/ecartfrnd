
import { createSelector } from 'reselect';

const getPendingCategory = (state) => state.sortCategory;

const getSortCategory = (state) => state.sortCategory;

const getError = (state) => state.sortCategory;

export const getSortCategorySelector = createSelector(getSortCategory, (sort) => sort);
export const getPendingCategorySelector = createSelector(getPendingCategory,(pending) => pending);
export const getErrorSelector = createSelector(getError, (error) => error);

