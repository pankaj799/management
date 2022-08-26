import { PRODUCTS_DATA_GET,
    CATS_DATA_GET,
    CALL_RESPONSE
 } from "./types"

 import { base_url,TOKEN_VAR } from "../constants/const"
 import { apiCall } from "../api";

const token = localStorage.getItem(TOKEN_VAR)

// Api Routes

export const catsgetApi = (failureCb) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}products/get_all_cats`,
    }
    try {
        let response = await apiCall(config, dispatch)
        if(response.data.status){
            dispatch({
                type: CATS_DATA_GET,
                payload: response?.data
            })
        }else{
            failureCb(response.data)
        }
    }catch(error){
        if(typeof failureCb === 'function') {
            let response = error.response
            let message = response && response.data && response.data.errors ?response.data.errors[0]:'Something went wrong'  
            failureCb({status:false,message:message})
        }
    }    
}

export const productsgetApi = (data, failureCb, successCb) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}products/get_cat_products`,
        data
    }
    try {
        let response = await apiCall(config, dispatch)
        if(response.data.status){
            dispatch({
                type: PRODUCTS_DATA_GET,
                payload: response?.data
            })
            console.log(response?.data)
            successCb(response?.data)
        }else{
            dispatch({
                type: PRODUCTS_DATA_GET,
                payload: response?.data
            })
            failureCb(response.data)
        }
    }catch(error){
        if(typeof failureCb === 'function') {
            let response = error.response
            let message = response && response.data && response.data.errors ?response.data.errors[0]:'Something went wrong'  
            failureCb({status:false,message:message})
        }
    }    
}

export const setCallResponse = (data) => async dispatch => {
    dispatch({
        type: CALL_RESPONSE,
        payload: data
    })
}
