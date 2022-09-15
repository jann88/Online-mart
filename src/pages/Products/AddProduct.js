import React, { useState } from "react";
// import React from 'react'
const productAPI = "https://my-shop-mart.herokuapp.com/products";

   

function AddProduct({addProduct}) {
  const [products, setProducts] = useState([]);
  const[name, setName] = useState([]);
  const[image, setImage] = useState([]);
  const[price, setPrice] = useState([]);
 
  function handleSubmit(e) {
    e.preventDefault();
    fetch(productAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products,
        name,
        image,
        price,
        user,
      }),
    })
      .then((r) => r.json())
      .then((newProduct) => addProoduct(newProduct));

    setName("");
    setProducts("");
    setImage("");
    setPrice("");
   
   
    
    
  }

 
  return (
    <div>
    <form className="new-product-form" onSubmit={handleSubmit} >
      <input 
        placeholder="Name" 
        value={title}
        onChange={(e) => setName(e.target.value)}
      />

      <input 
        placeholder="Products" 
        value={products}
        onChange={(e) => setProducts(e.target.value)}
      />

      <input 
        placeholder="Name" 
        value={product}
        onChange={(e) => setName(e.target.value)}
      />

      <input 
        placeholder="image" 
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <input 
        placeholder="Price" 
        value={user}
        onChange={(e) => setPrice(e.target.value)}
      />

      
      <input 
        type="submit" 
        value="Add Product to products" 
      />
    </form>
    </div>

  
  )
};

export default AddProduct
