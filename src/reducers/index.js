import { combineReducers } from "redux"
import auth from "../reducers/auth"
import blogs from "../reducers/blogs"
import products from "../reducers/products"

const appReducers = combineReducers({
    auth,
    blogs,
    products
})

const rootReducer = (state, action) => {
    return appReducers(state, action)
}
export default rootReducer;