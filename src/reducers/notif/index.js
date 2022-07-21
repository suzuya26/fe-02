import { GET_USER_NOTIF } from "../../actions/notifikasiAction";

const initialState = {
    listIsiNotifResult : false,
    listIsiNotifLoading : false,
    listIsiNotifError : false,
}

const isinotifReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_NOTIF:
            console.log("4. Masuk Reducer");
            return {
                ...state,
                listIsiNotifResult: action.payload.data,
                listIsiNotifLoading: action.payload.loading,
                listIsiNotifError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default isinotifReducer;