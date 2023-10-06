import { ADD_ITEM_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY } from "./cartTypes"

export const addItemToCart=(product)=>{
    return{
        type:ADD_ITEM_TO_CART,
        payload:product
    }

}
export const decrementItem=({id,quantity})=>{
    return{
        type:DECREMENT_QUANTITY,
        payload:{
            id,
            quantity
        }
    }
}
export const incrementItem=({id,quantity})=>{
    return{
        type:INCREMENT_QUANTITY,
        payload:{
            id,
            quantity
        }
    }
}