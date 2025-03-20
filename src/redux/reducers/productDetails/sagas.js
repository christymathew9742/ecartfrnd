import axios from '../../../axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchProductDetailsSuccess, fetchProductDetailsFailure } from './actions';
import { 
    FETCH_PRODUCT_DETAILS_REQUEST
} from './actionTypes';

const getProductDetails = (payload) => axios.get(`/products/${payload}`);

//get product details
function* fetchProductDetails(action) {
    const {payload} = action
    try {
        const response = yield call(getProductDetails,payload);
        yield put (
            fetchProductDetailsSuccess({
                details: response.data
            })
        );
    } catch (e) {
        yield put(
            fetchProductDetailsFailure({
                error: e.message
            })
        );
        console.log(e,'errorrr')
    }
}

function* productDetailSaga() {
    yield all([takeLatest(FETCH_PRODUCT_DETAILS_REQUEST, fetchProductDetails)]);
}

export default productDetailSaga;



