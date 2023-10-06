import React, { useEffect, useMemo } from "react";
import { addItemToCart } from "../store.js/cart/cartActions";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";

function Products({products }) {


  const dispatch = useDispatch();

  const handleAdd = (itm) => {
    dispatch(addItemToCart(itm))
    alert(`added item is ${itm.title}`)
  }
  
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {products.map((itm) => {
        return (
          <div key={itm.id}>
            <div className="card" style={{ width: " 18rem" }}>
              <p>{itm.category}</p>
              <img src={itm.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{itm.title}</h5>
                <p className="card-text"> {itm.description} </p>
                <h4>${itm.price}</h4>
                <button className="btn btn-warning" onClick={() => handleAdd(itm)}>Add to Cart
                </button>
                <p>Rating-{`${itm.rating.rate}/${itm.rating.count}`}</p>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
