import * as Types from "../constant/ActionType";
import callApi from "../utils/apiCaller";


export const actFetchProductsRequest = () =>{
    return (dispatch) =>{
        return callApi('products', 'GET', null).then(res=>{
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actFetchProducts = (products) =>{
    return{
        type : Types.FETCH_PRODUCTS,
        products
    }
} 

export const actDeleteProductsRequest = (id) =>{
    return (dispatch) =>{
        return callApi(`products/${id}`, 'DELETE', null).then(res=>{
            dispatch(actDeleteProducts(id))
            // console.log(res)
        })
    }
}

export const actDeleteProducts = (id) =>{
    return{
        type : Types.DELETE_PRODUCTS,
        id
    }
} 

export const actAddProductsRequest = (product) =>{
    return (dispatch) =>{
        return callApi(`products`, 'POST', product).then(res=>{
            dispatch(actAddProducts(res.data))
            // console.log(res)
        })
    }
}

export const actAddProducts = (product) =>{
    return{
        type : Types.ADD_PRODUCTS,
        product
    }
}
export const actGetProductsRequest = (id) =>{
    return (dispatch) =>{
        return callApi(`products/${id}`, 'GET', null).then(res=>{
            dispatch(actGetProducts(res.data))
            // console.log(res)
        })
    }
}

export const actGetProducts = (product) =>{
    return{
        type : Types.GET_EDIT_PRODUCTS,
        product
    }
}
export const actUpdateProductsRequest = (product,id) =>{
    return (dispatch) =>{
        // console.log(id)
        return callApi(`product/${id}`, 'PUT', product).then(res=>{
            dispatch(actUpdateProducts(res.data))
        })
    }
}
export const actUpdateProducts = (product) =>{
    return{
        type : Types.UPDATE_PRODUCTS,
        product
    }
}