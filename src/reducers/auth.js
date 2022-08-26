import {
    LOGIN_SUCCESS,
    LOGIN_SCREEN,
    SIGNUP_SCREEN,
    FORGOT_PASSWORD_SCREEN,
    FORGOT_OTP_SCREEN,
    VERIFY_EMAIL_SCREEN,
    AUTH_TOKEN_SET,
    LOGIN_RESPONSE,
    LOGOUT_RESPONSE,
    PROFILE_DATA_SET,
    UPLOAD_PROFILE_PIC,
    NOTIFY,
    TUITORS,
    STUIDENTS,
    PARENTS
} from "../actions/types";

const initialState = {
    is_login: false,
    login_screen: true,
    signup_screen: false,
    forgot_password_screen: false,
    forgot_otp_screen: false,
    verify_email_screen: false,
    profile_pic: null,
    user_data: null,
    notify_data: null,
    allTutors: null,
    allStudents: null,
    allParents: null,
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case LOGIN_RESPONSE:
            if (payload.status) {
                return {
                    ...state,
                    is_login: true,
                    token: payload.data.token,
                    user_data: payload.data.data,
                    call_response: payload
                }
            }
            return {
                ...state,
                call_response: payload
            }
        case LOGOUT_RESPONSE:
            return {
                ...state,
                is_login: false,
                user_data: null,
                call_response: null,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                is_login: true,
            };
        case UPLOAD_PROFILE_PIC:
            return {
                ...state,
                profile_pic: payload,
            };
        case TUITORS:
            return {
                ...state,
                allTutors: payload,
            };
        case STUIDENTS:
            return {
                ...state,
                allStudents: payload,
            };
        case PARENTS:
            return {
                ...state,
                allParents: payload,
            };
        case LOGIN_SCREEN:
            return {
                ...state,
                login_screen: payload,
                signup_screen: false,
                forgot_password_screen: false,
                forgot_otp_screen: false,
                verify_email_screen: false,
            };
        case SIGNUP_SCREEN:
            return {
                ...state,
                login_screen: false,
                signup_screen: payload,
                forgot_password_screen: false,
                forgot_otp_screen: false,
                verify_email_screen: false,
            };
        case FORGOT_PASSWORD_SCREEN:
            return {
                ...state,
                login_screen: false,
                signup_screen: false,
                forgot_password_screen: payload,
                forgot_otp_screen: false,
                verify_email_screen: false,
            };
        case FORGOT_OTP_SCREEN:
            return {
                ...state,
                login_screen: false,
                signup_screen: false,
                forgot_password_screen: false,
                forgot_otp_screen: payload,
                verify_email_screen: false,
            };
        case VERIFY_EMAIL_SCREEN:
            return {
                ...state,
                login_screen: false,
                signup_screen: false,
                forgot_password_screen: false,
                forgot_otp_screen: false,
                verify_email_screen: payload,
            };
        case AUTH_TOKEN_SET:
            return {
                ...state,
                login_screen: true,
                signup_screen: false,
                forgot_password_screen: false,
                forgot_otp_screen: false,
                verify_email_screen: false,
            };

        case PROFILE_DATA_SET:
            if (payload.status) {
                return {
                    ...state,
                    user_data: payload.data,
                }
            }
            return {
                ...state,
                user_data: null
            };
        case NOTIFY:
            console.log(payload.data, " : payload.data")
            return {
                ...state,
                notify_data: payload.data,
            }
        default:
            return state
    }
}