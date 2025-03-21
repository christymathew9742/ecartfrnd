import axios from '../../../axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchSortCategorySuccess, fetchSortCategoryFailure } from './actions';
import { 
    FETCH_SORT_CATEGORY_REQUEST
} from './actionTypes';

//fetch data based on categorys
const getSortCategory = () => axios.get(`products/categories`);

//get product sort category
function* fetchSortCategory(action) {
    const {payload} = action
    try {
        const response = yield call(getSortCategory);
        yield put (
            fetchSortCategorySuccess({
                sort: response.data
            })
        );
    } catch (e) {
        yield put(
            fetchSortCategoryFailure({
                error: e.message
            })
        );
        console.log(e,'errorrr')
    }
}

function* sortCategorySaga() {
    yield all([takeLatest(FETCH_SORT_CATEGORY_REQUEST, fetchSortCategory)]);
}

export default sortCategorySaga;



