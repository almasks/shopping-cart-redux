import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header({searchInput,setSearchInput}) {

  const  {cartCount } = useSelector((state) => state.cart)

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <img
            src={
              "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
            }
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          <input type="text" placeholder="search" 
        value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}
          ></input>

          <p className="ms-5"><Link to="/cart" >Cart {cartCount}</Link></p>
          FAKESHOP
        </div>
      </nav>
    </div>
  );
}

export default Header;
