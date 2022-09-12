import React from "react";
import Product from "../Product/Product";
import "../Products/Products.css";
import { Link } from "react-router-dom";

function Products({product}) {

  return (
    <div className="card-container">
      
          <div className="container" key={product.id}>
            <div className="card ">
              <img src={product.image_url} alt={product.name}></img>
              <h2>{product.name}</h2>
              <div>
            <h3>Ksh { product.price }</h3>
                <Link
                  to={`/products/${product.id}`}
                  onClick={() => <Product key={product.id} />}
                >
                  <button>Order</button>
                </Link>
              </div>
            </div>
          </div>
    </div>
  );
}
export default Products;

// function Products({product}) {

//   return (
//     <div className="card-container">
      
//           <div className="container" key={product.id}>
//             <div className="card ">
//               <img src={product.image_url} alt={product.name}></img>
//               <h2>{product.name}</h2>
//               <h3>Ksh { product.price }</h3>
//               <Link
//                   to={`/products/${product.id}`}
//                   onClick={() => <Product key={product.id} />}>
//                   <button onClick={() => setShowCart(true)}>Order
//                   <span className="cart-item-qty">{totalQuantities}</span>
//                   </button>
                  
//                   {showCart && <Cart />}
                  
//               </Link>
//               <div>
            
                
//               </div>
//             </div>
//           </div>
//     </div>
//   );
// }
// export default Products;