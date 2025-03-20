
import { createSelector } from 'reselect';

const getPending = (state) => state.todo.status;

const getProduct = (state) => state.todo.todos;

const getError = (state) => state.todo.error;

export const getProductSelector = createSelector(getProduct, (todos) => todos);
export const getPendingSelector = createSelector(getPending,(pending) => pending);
export const getErrorSelector = createSelector(getError, (error) => error);

