import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Cart.css"

const Cart = () => {
    const[products, setProducts] = useState([]);
useEffect(() => {
    fetch("http://localhost:9292/carts")
    .then((response) => response.json())
    .then((response) => {
        // console.log(response)
        setProducts(response)
    });
}, []);

    return(
        <div className="cart-container">
            {products.map((product) =>
            {
                return (
                    <>
                    <div className="cart-card"  key={product.id}>
                    <img src={product.image_url} alt={product.name}/>
                    <h2>{product.name}</h2>
                    <h2>{product.description}</h2>
                    <h2>{product.price}</h2>

                    </div>
                    </>
                );
            }
            
            )}
        </div>

    );
}
export default Cart;