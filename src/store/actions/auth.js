import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from "./types";


export const Login = (data) => {
    return ({
        type: LOGIN_SUCCESS,
        payload: data
    })
}
