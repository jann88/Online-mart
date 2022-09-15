import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./Cart.css"

const Carts = () => {
    const[products, setProducts] = useState([]);
    // const { showCart, setShowCart, totalQuantities } = useStateContext();
useEffect(() => {
    fetch("https://my-shop-mart.herokuapp.com/carts")
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
                    <div className="cart-card" >
                    <Cart key={product.id}>
                     
                    <img src={product.image_url} alt={product.name}/>
                    <h2>{product.name}</h2>
                    <h2>{product.description}</h2>
                    <h2>{product.price}</h2>

                    </Cart>

                    </div>
                    
                    </>
                );
            }
            
            )}
        </div>

    );
}
export default Carts;