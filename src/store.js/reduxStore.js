import { legacy_createStore as createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from "./products/productReducer"
import thunk from 'redux-thunk';
export const store=createStore(
    productReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );