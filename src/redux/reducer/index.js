// combine all reducer in this page
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducer = combineReducers({
    allProducts: productReducer,
})