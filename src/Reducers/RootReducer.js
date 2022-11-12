import { combineReducers } from 'redux';
import ProductReducer from './ProductsReducer';
const rootReducer = combineReducers({
  products: ProductReducer,
});

export default rootReducer;
