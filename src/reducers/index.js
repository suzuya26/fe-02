import { combineReducers } from "redux";
import  productReducer from "./product";
import  userReducer from "./user"
import kategoriReducer from "./kategori";
import totalnotifReducer from "./totalnotif";
import dijualReducer from "./dijual";
import favoritReducer from "./favorit";
import terjualReducer from "./terjual";

export default combineReducers({
    productReducer,
    userReducer,
    kategoriReducer,
    totalnotifReducer,
    dijualReducer,
    favoritReducer,
    terjualReducer,
})