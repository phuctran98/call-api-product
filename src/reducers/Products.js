import * as Types from "../constant/ActionType";

const initState = []
var findIndex = (products, id) => {
    var result = -1
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index
        }
    }
    );
    return result 
}
const products = (state = initState, action) => {
    var {product} = action
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products
            // console.log(action)
            return [...state]
        case Types.DELETE_PRODUCTS:
            var index = findIndex(state,action.id)
            state.splice(index,1)
            // console.log(action)
            return [...state]
        case Types.ADD_PRODUCTS :
            state.push(action.product)
            return [...state]
        case Types.UPDATE_PRODUCTS:
            index = findIndex(state,product.id)
            state[index] = product
            return [...state]
        default:
            return [...state]
    }
}


export default products