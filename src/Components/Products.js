import React from "react";
import { Link } from 'react-router-dom'

function Products({ products }) {
  return (
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
      {products.map((itm ) => {
        return (
          <div key={itm.id}>
            <div className="card" style={{ width: " 18rem" }}>
              <p>{itm.category}</p>
              <img src={itm.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{itm.title}</h5>
                <p className="card-text"> {itm.description} </p>
                <h4>${itm.price}</h4>
                <button className="btn btn-warning"><Link to="/cart">Add to Cart</Link></button>
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
