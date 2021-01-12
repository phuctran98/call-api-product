import * as Types from "../constant/ActionType";

const initState = {}

const editProduct = (state = initState, action) => {
    switch (action.type) {
        case Types.GET_EDIT_PRODUCTS:
            // console.log(action)
            state = action.product
            // console.log(state)
            return state
        default:
            return state
    }
}


export default editProduct