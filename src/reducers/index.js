import { combineReducers } from "redux";
import  productReducer from "./product";
import  userReducer from "./user"
import kategoriReducer from "./kategori";
import totalnotifReducer from "./totalnotif";
import isinotifReducer from "./notif";

export default combineReducers({
    productReducer,
    userReducer,
    kategoriReducer,
    totalnotifReducer,
    isinotifReducer
})