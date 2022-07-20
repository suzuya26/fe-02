import { GET_CURRENT_NOTIF } from "../../actions/totalnotifAction";

const initialState = {
    listTotalNotifResult : false,
    listTotalNotifLoading : false,
    listTotalNotifError : false,
}

const totalnotifReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CURRENT_NOTIF:
            console.log("4. Masuk Reducer");
            return {
                ...state,
                listTotalNotifResult: action.payload.data,
                listTotalNotifLoading: action.payload.loading,
                listTotalNotifError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default totalnotifReducer;