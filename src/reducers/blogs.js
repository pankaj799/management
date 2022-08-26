import { BLOGS_DATA_GET
} from "../actions/types";

const initialState = {
    blogs_data:[],
}

export default (state = initialState, action ) => {
    const { type, payload } = action

    switch (type) {
        case BLOGS_DATA_GET:
            if (payload.status) {
                console.log(payload, " : payload    ")
                return {
                    ...state,
                    blogs_data: payload.data,
                }
            } 
            return {
                ...state,
                call_response: payload
            }
        default: 
            return state
    }
}