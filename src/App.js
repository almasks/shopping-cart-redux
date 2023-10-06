import { Route, Router, Routes } from "react-router";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  // const [cartQuantity, setCartQuantity] = useState(0)


 
  const [searchInput,setSearchInput]=useState("")



  return (
    <div className="App">
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home  searchInput={searchInput}/>} />
        <Route path="/cart" element={<Cart  />} />




      </Routes>
    </div>
  );
}

export default App;
