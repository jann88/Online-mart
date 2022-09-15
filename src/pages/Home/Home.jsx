import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import Products from "../Products/Products";


const Home = () => {
    const [products, setProducts] = useState([""]);
    const [search, setSearch] = useState([]);

    useEffect(() => {

        fetch("https://my-shop-mart.herokuapp.com/products")
        .then((response) => response.json())
        .then((response) => {
        
        setProducts(response)
        console.log(products)
    });




    }, []);

    
    useEffect(() => {
        setSearch(products)
    }, [products]);
    

    return(
        <>
        <div className="order" >
            <h2>Hello</h2>
            <Link to={products} onClick={() => <Products/>}>
    

    <button>Place Orders</button>
                
            </Link>
        </div>
        <form className="input">
           <input className="form-control me-2"
            id="search-input"
            type="text"
            placeholder="search..."
            onChange={(e) => {
            let query = products.filter((product) =>
              product.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            console.log("search", query);
            setSearch(query);
          }}
        />
   
    </form>
    <div className="card-container" >
        {search?.map((product, i) => {
            return <Products product={product} 
            key={product?.id}
            name={product?.name}
            // image_url={imageUrl?.image_url}
            description={product?.description}
            // price={price?.price}

            id={product?.id || i}
            setSearch={setSearch}
             />;
        })}
    </div>
        </>

    );
}
export default Home;