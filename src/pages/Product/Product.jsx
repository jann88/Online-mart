import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const [ product, setProduct ] = useState( [] );
  const [cart, addCart] = useState([])

  // post product
  const handleClick = (product) => {
    cart.push(addCart);
    console.log(product);
    const name = product.name;
    const image_url = product.image_url;
    const description = product.description;
    const price = product.price;
   
    

    axios.post("http://localhost:9292/carts", {
        name,
        description,
        price,
        image_url,
      })
      .then(() => {
        alert("product posted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:9292/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [id]);

  return (
    <div className="card-info">
      <img src={product.image_url} alt={product.name}></img>
      <div>
        <h2>Name: {product.name}</h2>
        <p>Description: {product.description}</p>
        <p>
          <em>$ {product.price}</em>
        </p>
        <p>Rating: {product.rating && product.rating.rate && product.rating.count}</p>
        <button onClick={() => handleClick(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
export default Product;