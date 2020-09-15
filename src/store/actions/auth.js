import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from "./types";


export const Login = (data) => async dispatch => {
    try {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
    }
    catch {
        dispatch({
            type: LOGIN_FAILED,
            payload: "FAILED"
        })
    }

}

export const Regis = (input) => async dispatch => {
    try {
        dispatch({
            type: SIGN_UP_SUCCESS,
            payload: input
        })
    }
    catch {
        dispatch({
            type: SIGN_UP_FAILED,
            payload: "FAILED SIGNUP"
        })
    }
}


