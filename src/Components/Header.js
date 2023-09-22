import React from "react";

function Header() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <img
            src={ "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"}
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
       FAKESHOP
        </div>
      </nav>
    </div>
  );
}

export default Header;
