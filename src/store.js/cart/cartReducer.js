import { ADD_ITEM_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY } from "./cartTypes"

const initialState = {
    cart: [],
    cartCount: 0,
 

}
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            let cart = []
            if (state.cart.length === 0) {
                cart = [{ ...action.payload, quantity: 1 }]
            } else {
                const itemFound = state.cart.find(itm => itm.id === action.payload.id)
                if (itemFound) {
                    cart = state.cart.map(itm => (itm.id === action.payload.id) ? { ...itm, quantity: itm.quantity + 1 } : itm)
                } else {
                    cart = [...state.cart, { ...action.payload, quantity: 1 }]
                }
            }
            return {
                ...state, cart, cartCount : state.cartCount+1
            }
        case INCREMENT_QUANTITY:
            

            return {

                ...state, cart: state.cart.map(itm => {
                    if (itm.id === action.payload.id) {
                        
                        return { ...itm, quantity: itm.quantity + 1 }
                    } else {
                        return itm
                    }
                }),cartCount:state.cartCount+1
            }

        case DECREMENT_QUANTITY:
            const itemFound = state.cart.find(itm => (itm.id === action.payload.id && itm.quantity === 1))
            console.log(itemFound)
            if (itemFound) {
                return {
                    ...state, cart: state.cart.filter(itm => itm.id !== action.payload.id), cartCount: state.cartCount - 1
                }
            } else {
                return {
                    ...state, cart: state.cart.map(itm => {
                        if (itm.id === action.payload.id) {
                            return { ...itm, quantity: itm.quantity - 1 }
                        } else {
                            return itm
                        }
                    }), cartCount: state.cartCount - 1
                }
            }


        default:
            return state
    }
}