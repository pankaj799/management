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
    PROFILE_DATA_UPDATE,
    NOTIFY,
    TUITORS,
    STUIDENTS,
    PARENTS
} from "./types"

import { base_url, TOKEN_VAR } from "../constants/const"
import { apiCall } from "../api";
import * as FormData from 'form-data';

const token = localStorage.getItem(TOKEN_VAR)

export const changeLoginStatus = () => dispatch => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: false
    })
}
export const setLoginScreen = () => dispatch => {
    dispatch({
        type: LOGIN_SCREEN,
        payload: true
    })
}
export const setSignUpScreen = () => dispatch => {
    dispatch({
        type: SIGNUP_SCREEN,
        payload: true
    })
}
export const setForgotPasswordScreen = () => dispatch => {
    dispatch({
        type: FORGOT_PASSWORD_SCREEN,
        payload: true
    })
}
export const setForgotOtpScreen = () => dispatch => {
    dispatch({
        type: FORGOT_OTP_SCREEN,
        payload: true
    })
}
export const setVerifyEmail = () => dispatch => {
    dispatch({
        type: VERIFY_EMAIL_SCREEN,
        payload: true
    })
}
export const logOut = () => dispatch => {
    localStorage.removeItem("myEdPrePToken", "")
    dispatch({
        type: LOGOUT_RESPONSE,
        payload: false
    })
    window.location.href = "/"
}

export const getUserBasicInfo = (user_id) => async dispatch => {
    let config = {
        method: 'post',
        headers: { Authorization: `Bearer ${token}` },
        url: `${base_url}auth/get_user_basic_info`,
        data: { user_id },
    }
    let response = await apiCall(config, dispatch)
    if (response.data.status) {
        return response.data.data
    } else {
        return null
    }
}

export const getAllTuTors = () => async dispatch => {
    let config = {
        method: 'post',
        headers: { Authorization: `Bearer ${token }` },
        url: `${base_url}auth/get_all_users`,
        data: { role: "tutor" },
    }
    let response = await apiCall(config, dispatch)
    console.log(response, " : response")
    if (response.data.status) {
        dispatch({
            type: TUITORS,
            payload: response.data.data
        });
    } else {
        dispatch({
            type: TUITORS,
            payload: null
        });
    }
}


export const getAllStudents = () => async dispatch => {
    let config = {
        method: 'post',
        headers: { Authorization: `Bearer ${token }` },
        url: `${base_url}auth/get_all_users`,
        data: { role: "student" },
    }
    let response = await apiCall(config, dispatch)
    if (response.data.status) {
        dispatch({
            type: STUIDENTS,
            payload: response.data.data
        });
    } else {
        dispatch({
            type: STUIDENTS,
            payload: null
        });
    }
}

export const getAllParents = () => async dispatch => {
    let config = {
        method: 'post',
        headers: { Authorization: `Bearer ${token }` },
        url: `${base_url}auth/get_my_parents`,
        data: { role: "parent" },
    }
    let response = await apiCall(config, dispatch)
    if (response.data.status) {
        dispatch({
            type: PARENTS,
            payload: response.data.data
        });
    } else {
        dispatch({
            type: PARENTS,
            payload: null
        });
    }
}

// Api Routes

export const loginApi = (data, successCb, failureCb) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/login`,
        data,
    }
    try {
        let response = await apiCall(config, dispatch)
        if (response.data.status) {
            successCb(response.data)
            dispatch({
                type: LOGIN_RESPONSE,
                payload: response?.data
            })
        } else {
            failureCb(response.data)
        }
    } catch (error) {
        if (typeof failureCb === 'function') {
            let response = error.response
            let message = response && response.data && response.data.errors ? response.data.errors[0] : 'Something went wrong'
            failureCb({ status: false, message: message })
        }
    }
}

export const studentSignupApi = (data, successCb, failureCb) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/student_register`,
        data,
    }
    try {
        let response = await apiCall(config, dispatch)
        if (response.data.status) {
            successCb(response.data)
        } else {
            failureCb(response.data)
        }
    } catch (error) {
        if (typeof failureCb === 'function') {
            let response = error.response
            let message = response && response.data && response.data.errors ? response.data.errors[0] : 'Something went wrong'
            failureCb({ status: false, message: message })
        }
    }
}
export const parentSignupApi = (data, successCb, failureCb) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/parent_register`,
        data,
    }
    try {
        let response = await apiCall(config, dispatch)
        if (response.data.status) {
            successCb(response.data)
        } else {
            failureCb(response.data)
        }
    } catch (error) {
        if (typeof failureCb === 'function') {
            let response = error.response
            let message = response && response.data && response.data.errors ? response.data.errors[0] : 'Something went wrong'
            failureCb({ status: false, message: message })
        }
    }
}

export const forgotPasswordApi = (data, successCb, failureCb) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/forgot`,
        data,
    }
    try {
        let response = await apiCall(config, dispatch)
        if (response.data.status) {
            successCb(response.data)
        } else {
            failureCb(response.data)
        }
    } catch (error) {
        if (typeof failureCb === 'function') {
            let response = error.response
            let message = response && response.data && response.data.errors ? response.data.errors[0] : 'Something went wrong'
            failureCb({ status: false, message: message })
        }
    }
}

export const forgotPasswordReset = (data, successCb, failureCb) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/reset_password`,
        data,
    }
    try {
        let response = await apiCall(config, dispatch)
        if (response.data.status) {
            successCb(response.data)
        } else {
            failureCb(response.data)
        }
    } catch (error) {
        if (typeof failureCb === 'function') {
            let response = error.response
            let message = response && response.data && response.data.errors ? response.data.errors[0] : 'Something went wrong'
            failureCb({ status: false, message: message })
        }
    }
}


export const getUserDetail = (tokenn) => async dispatch => {
    let config = {
        method: 'post',
        headers: { Authorization: `Bearer ${token || tokenn}` },
        url: `${base_url}auth/get`,
    }
    try {
        let response = await apiCall(config, dispatch)
        if (response.data.status) {
            dispatch({
                type: PROFILE_DATA_SET,
                payload: response?.data
            })
        } else {
            dispatch(logOut)
        }
    } catch (error) {

        localStorage.removeItem("myEdPrePToken", "")
        dispatch({
            type: LOGOUT_RESPONSE,
            payload: false
        })
        window.location.href = "/"
    }
}
export const updateUserDetail = (data, successCb, failureCb) => async dispatch => {
    let config = {
        method: 'post',
        headers: { Authorization: `Bearer ${token}` },
        url: `${base_url}auth/update_details`,
        data
    }
    try {

        let response = await apiCall(config, dispatch)
        if (response.data.status) {
            dispatch(getUserDetail(token))
            successCb(response.data)
        } else {
            failureCb(response.data)
        }
    } catch (error) {
        if (typeof failureCb === 'function') {
            let response = error.response
            let message = response && response.data && response.data.errors ? response.data.errors[0] : 'Something went wrong'
            failureCb({ status: false, message: message })
        }
    }
}
export const sendEmailOnOtp = (data, successCb, failureCb) => async dispatch => {
    let config = {
        method: 'post',
        headers: { Authorization: `Bearer ${token}` },
        url: `${base_url}auth/send_otp`,
        data
    }
    try {

        let response = await apiCall(config, dispatch)
        if (response.data.status) {
            successCb(response.data)
        } else {
            failureCb(response.data)
        }
    } catch (error) {
        if (typeof failureCb === 'function') {
            let response = error.response
            let message = response && response.data && response.data.errors ? response.data.errors[0] : 'Something went wrong'
            failureCb({ status: false, message: message })
        }
    }
}

export const addImage = (data) => async dispatch => {
    const form = new FormData();
    form.append(`user_profile`, data);
    let config = {
        method: 'post',
        headers: { Authorization: `Bearer ${token}` },
        url: `${base_url}auth/update_profile_pic`,
        'Content-Type': 'multipart/form-data',
        data: form
    }
    let response = await apiCall(config, dispatch)
    console.log(response)
    if (response?.data.status) {
        dispatch({
            type: UPLOAD_PROFILE_PIC,
            payload: response?.data
        })
    }
}

export const notifyApi = (data, successCb, failureCb) => async dispatch => {
    let config = {
        method: 'post',
        headers: { Authorization: `Bearer ${token}` },
        url: `${base_url}auth/get_my_notifications`,
        data,
    }
    let response = await apiCall(config, dispatch)
    console.log(response, " : response")
    dispatch({
        type: NOTIFY,
        payload: response?.data
    })
}

export const markNotifAsRead = (data, successCb, failureCb) => async dispatch => {
    let config = {
        method: 'post',
        headers: { Authorization: `Bearer ${token}` },
        url: `${base_url}auth/mark_notif_as_read`,
        data
    }
    try {

        let response = await apiCall(config, dispatch)
        console.log(response)
        if (response.data.status) {
            successCb(response.data)
        } else {
            failureCb(response.data)
        }
    } catch (error) {
        if (typeof failureCb === 'function') {
            let response = error.response
            let message = response && response.data && response.data.errors ? response.data.errors[0] : 'Something went wrong'
            failureCb({ status: false, message: message })
        }
    }
}
export const driveFileUpload = (data, successCb, failureCb) => async dispatch => {
    console.log("file-detail :::::::::: ",data.file[0])
    const directName = "ed_prep";

    var contentType =   data.file[0].type
    var fileName    =   data.file[0].name;
    var mimeType    =   data.file[0].type;

    // var request = await window.gapi.client.request({
    //     'path': '/drive/v2/files/',
    //     'method': 'POST',
    //     'headers': {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + window.gapi.auth.getToken().access_token,             
    //     },
    //     'body':{
    //         "title" : directName,
    //         "mimeType" : "application/vnd.google-apps.folder",
    //     }
    // });
 
    // console.log("folder ::::::::::: ",request); 

    var metadata = {
        'title': fileName,
        'name': fileName,
        'mimeType': mimeType,
    };

    const fd = new FormData();
    fd.append("file", data.file[0]);
    fd.append("parents", ['1MhqKDwohCXoMOAdfhJguXkMkJNjW4XiS']);
    fd.append('metadata', new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
    
    const options = {
        method: 'POST',
        headers: { Authorization: "Bearer" + " " + window.gapi.auth.getToken().access_token },
        body: fd,
    };
    await fetch("https://www.googleapis.com/upload/drive/v3/files", options)
    .then(response => response.json())
    .then(jsonResp => { 
        console.log(jsonResp) 
        successCb({ status: true, message: "File uploaded successfully.",data:jsonResp})
    }).catch(error => {
        failureCb({ status: false, message: "Unable to upload file",data:error})
    });
}
