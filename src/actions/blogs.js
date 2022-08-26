import { BLOGS_DATA_GET
 } from "./types"

 import { base_url,TOKEN_VAR } from "../constants/const"
 import { apiCall } from "../api";

const token = localStorage.getItem(TOKEN_VAR)

// Api Routes

export const blogsgetApi = (failureCb) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}blog/get_all_blogs`,
    }
    try {
        let response = await apiCall(config, dispatch)
        if(response.data.status){
            console.log("jfdk", response)
            dispatch({
                type: BLOGS_DATA_GET,
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
