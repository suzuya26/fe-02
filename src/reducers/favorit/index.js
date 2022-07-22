import { GET_LIST_FAVORIT } from "../../actions/favoritAction";

const initialState = {
    listFavoritResult : false,
    listFavoritLoading : false,
    listFavoritError : false,
}

const favoritReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_FAVORIT:
            console.log("4. Masuk Reducer");
            return {
                ...state,
                listFavoritResult: action.payload.data,
                listFavoritLoading: action.payload.loading,
                listFavoritError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default favoritReducer;