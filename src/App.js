import React from "react";
import "./App.css";
// import components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//imports pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Cart from "./components/Cart/Cart";
import SignUp from "./pages/Signup/Signup.jsx";
function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="/carts/" element={<Cart />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;