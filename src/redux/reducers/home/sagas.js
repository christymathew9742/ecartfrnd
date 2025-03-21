import axios from '../../../axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchProductFailure, fetchProductSuccess } from './actions';
import { 
    FETCH_PRODUCT_FETCH_REQUEST,
} from './actionTypes';

const getTodos = (payload) => axios.get(`/products/${payload}`);

//product data
function* fetchProductSaga(action) {
    const {payload} = action
    
    try {
        const response = yield call(getTodos,payload);
        yield put (
            fetchProductSuccess({
                todos: response.data
            })
        );
    } catch (e) {
        yield put(
            fetchProductFailure({
                error: e.message
            })
        );
        console.log(e,'errorrr')
    }
}

function* productSaga() {
    yield all([takeLatest(FETCH_PRODUCT_FETCH_REQUEST, fetchProductSaga)]); 
}

export default productSaga;



