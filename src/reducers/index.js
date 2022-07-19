import { combineReducers } from "redux";
import  productReducer from "./product";
import  userReducer from "./user"
import kategoriReducer from "./kategori";

export default combineReducers({
    productReducer,
    userReducer,
    kategoriReducer
})