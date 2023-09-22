import { GET_ALL_PRODUCTS } from "./productTypes";

export const getAllProducts = (products) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: products,
  };
};

export function fetchProducts() {
  return async (dispatch) => {
    const res = await fetch("http://localhost:5000/products").then((response) =>
      response.json()
    );
    dispatch(getAllProducts(res));
  };
}
