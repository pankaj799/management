import { base_url,TOKEN_VAR } from "../constants/const"
import { apiCall } from "../api";

const token = localStorage.getItem(TOKEN_VAR)


export const requestForTutor = (data,successCb,failureCb) => async dispatch => {
   
    try {

        let config = {
            method: 'post',
            headers: {Authorization: `Bearer ${token}`},
            url: `${base_url}tutor/request_for_tutor`,
            data
        }

        let response = await apiCall(config, dispatch)
        if(response.data.status){
            successCb(response.data)
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
