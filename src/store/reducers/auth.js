import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from "../actions/types";


const initialState = {
    profile: [],
    isAuthenticate: false
}

export const authReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
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
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticate: true,
                profile: [...state.profile, payload]
            }
        case LOGIN_FAILED:
            return {
                ...state,
                isAuthenticate: false,
                profile: ""
            }
    }

}
