import { Route, Router, Routes } from "react-router";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      



    </Routes>
    </div>
  );
}

export default App;
