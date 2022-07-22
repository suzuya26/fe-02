import { GET_LIST_TERJUAL } from "../../actions/terjualAction";

const initialState = {
    listTerjualResult : false,
    listTerjualLoading : false,
    listTerjualError : false,
}

const terjualReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_TERJUAL:
            console.log("4. Masuk Reducer");
            return {
                ...state,
                listTerjualResult: action.payload.data,
                listTerjualLoading: action.payload.loading,
                listTerjualError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default terjualReducer;