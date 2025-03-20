import axios from '../../../axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchSortAreaSuccess, fetchSortAreaFailure } from './actions';
import { 
    FETCH_SORT_AREA_REQUEST
} from './actionTypes';

//fetch data based on letters
const getSortArea = (payload) => axios.get(`/v1/1/search.php?f=${payload}`);

//get product sort areas
function* fetchSortArea(action) {
    const {payload} = action
    try {
        const response = yield call(getSortArea,payload);
        yield put (
            fetchSortAreaSuccess({
                sort: response.data
            })
        );
    } catch (e) {
        yield put(
            fetchSortAreaFailure({
                error: e.message
            })
        );
        console.log(e,'errorrr')
    }
}

function* sortAreaSaga() {
    yield all([takeLatest(FETCH_SORT_AREA_REQUEST, fetchSortArea)]);
}

export default sortAreaSaga;



