import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED
} from "../actions/types";


const initialState = {
    token: null,
    isAuthenticate: false,
    profile: ""
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isAuthenticate: true
            }
        case SIGN_UP_FAILED:
            return {
                ...state,
                isAuthenticate: false
            }

    }

}
