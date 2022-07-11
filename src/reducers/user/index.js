import { GET_CURRENT_USER } from "../../actions/userAction";

const initialState = {
    listUserResult : false,
    listUserLoading : false,
    listUserError : false,
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CURRENT_USER:
            console.log("4. Masuk Reducer");
            return {
                ...state,
                listUserResult: action.payload.data,
                listUserLoading: action.payload.loading,
                listUserError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default userReducer;