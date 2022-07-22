import { GET_LIST_DIJUAL } from "../../actions/dijualAction";

const initialState = {
    listDijualResult : false,
    listDijualLoading : false,
    listDijualError : false,
}

const dijualReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_DIJUAL:
            console.log("4. Masuk Reducer");
            return {
                ...state,
                listDijualResult: action.payload.data,
                listDijualLoading: action.payload.loading,
                listDijualError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default dijualReducer;