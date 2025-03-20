import { combineReducers } from 'redux';

import productReducer from './reducers/home/reducer';
import productDetailReducer from './reducers/productDetails/reducer';
import sortArea from './reducers/sortArea/reducer'

const rootReducer = combineReducers({
    todo: 
    productReducer,
    productDetailReducer,
    sortArea,
  });
  
export default rootReducer;