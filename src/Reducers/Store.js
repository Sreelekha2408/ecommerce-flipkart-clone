import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import ProductReducer from "./ProductsReducer";
const reducer = combineReducers({
    products:ProductReducer,
   });
export const reduxStore = createStore(reducer, applyMiddleware(thunk));