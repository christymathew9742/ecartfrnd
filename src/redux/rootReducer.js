import { combineReducers } from 'redux';

import productReducer from './reducers/home/reducer';
import productDetailReducer from './reducers/productDetails/reducer';
import sortCategory from './reducers/sortCategory/reducer'

const rootReducer = combineReducers({
    todo: 
    productReducer,
    productDetailReducer,
    sortCategory,
  });
  
export default rootReducer;