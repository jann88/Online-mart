import React, { useState } from "react";


const Cart = () => {
const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleChange = (product, d) => {

    
    const ind = cart.indexOf(product);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }

return (
    <>
     <Cart   setShow={setShow} size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange}/>
    </>
)
  }

  export default Cart;
