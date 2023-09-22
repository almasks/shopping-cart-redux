import { GET_ALL_PRODUCTS } from "./productTypes";

const initialState = {
  productList: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return state;
  }
};
