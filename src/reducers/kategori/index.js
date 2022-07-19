import { GET_LIST_KATEGORI } from "../../actions/kategoriAction";

const initialState = {
    listKategoriResult : false,
    listKategoriLoading : false,
    listKategoriError : false,
}

const kategoriReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_KATEGORI:
            console.log("4. Masuk Reducer kategori");
            return {
                ...state,
                listKategoriResult: action.payload.data,
                listKategoriLoading: action.payload.loading,
                listKategoriError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default kategoriReducer;