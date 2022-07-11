import { GET_LIST_PRODUCT } from "../../actions/productAction.js";

const initialState = {
    listProductResult : false,
    listProductLoading : false,
    listProductError : false,
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_PRODUCT:
            console.log("4. Masuk Reducer");
            return {
                ...state,
                listProductResult: action.payload.data,
                listProductLoading: action.payload.loading,
                listProductError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default productReducer;