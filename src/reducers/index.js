import { combineReducers } from "redux";
import products from "./Products";
import editProduct from "./EditProduct";

const appReducers = combineReducers({
    products,
    editProduct
})

export default appReducers