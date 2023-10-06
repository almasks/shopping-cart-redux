import React, { useEffect, useMemo } from "react";
import Products from "../Components/Products";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store.js/products/productActions";

function Home({ searchInput }) {
  const products = useSelector((state) => state.product.productList);

  const searchByTitle = useMemo(() => {
    if (searchInput) {
      return products.filter(product => product.title.toLowerCase().startsWith(searchInput))
    }
    else {
      return products
    }

  }, [searchInput])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      {products.length > 0 && (
        <Products products={searchByTitle} dispatch={dispatch} searchInput={searchInput} />
      )}
    </div>
  );
}

export default Home;
