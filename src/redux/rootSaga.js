import { all, fork } from 'redux-saga/effects';
import productSaga from './reducers/home/sagas';
import productDetailSaga from './reducers/productDetails/sagas';
import sortCategorySaga from './reducers/sortCategory/sagas';

export function* rootSaga() {
    yield all([fork(productSaga)]);
    yield all([fork(productDetailSaga)]); 
    yield all([fork(sortCategorySaga)]);
}