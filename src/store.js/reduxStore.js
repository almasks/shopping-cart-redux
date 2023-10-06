import { legacy_createStore as createStore,applyMiddleware} from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension';
import {combineReducers} from 'redux'
import { productReducer } from "./products/productReducer"
import { cartReducer } from "./cart/cartReducer"
import thunk from 'redux-thunk';
const reducers=combineReducers({product:productReducer,cart:cartReducer})

export const store=createStore(
   reducers,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );