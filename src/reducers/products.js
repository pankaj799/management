import {
    PRODUCTS_DATA_GET,
    CATS_DATA_GET,
    CALL_RESPONSE
} from "../actions/types";

const initialState = {
    products_data: [],
    cats_data: [],
    call_response: null
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case CATS_DATA_GET:
            if (payload.status) {
                return {
                    ...state,
                    cats_data: payload.data,

                }
            }
            return {
                ...state,
                call_response: payload
            }
        case PRODUCTS_DATA_GET:
            console.log(payload, " : payload    ")
            if (payload.status) {
                return {
                    ...state,
                    products_data: payload.data,
                    call_response: payload
                }
            }
            return {
                ...state,
                call_response: payload
            }
        case CALL_RESPONSE:
            return {
                ...state,
                call_response: payload
            };
        default:
            return state
    }
}