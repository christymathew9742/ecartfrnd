
import { createSelector } from 'reselect';

const getPendingArea = (state) => state.sortArea;

const getSortArea = (state) => state.sortArea;

const getError = (state) => state.sortArea;

export const getSortAreaSelector = createSelector(getSortArea, (sort) => sort);
export const getPendingAreaSelector = createSelector(getPendingArea,(pending) => pending);
export const getErrorSelector = createSelector(getError, (error) => error);

