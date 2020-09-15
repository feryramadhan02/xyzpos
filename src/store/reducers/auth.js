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
    switch (action.type) {
        default:
            return {
                ...state
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isAuthenticate: true,
                profile: [...state.profile, action.payload]
            }
        case SIGN_UP_FAILED:
            return {
                ...state,
                isAuthenticate: false,
                profile: []
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticate: true,
                profile: []
            }
        case LOGIN_FAILED:
            alert(action.payload)
            return {
                ...state,
                isAuthenticate: false,
                profile: []
            }
    }

}
