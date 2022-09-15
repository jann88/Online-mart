import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


function NavBar() {
  // const [navbar, setNavbar] = useState(false);

  return (

   <navbar>
  <div class="container-fluid">
    <div className="header">
    <h1>Online Mart</h1>
    </div>
   
  <div className="nav-bar">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="products">Products</Link>
        </li>
        <li className="nav-item">
        {/* <Link to="carts">Carts</Link> */}
        </li>
        <li className="nav-item">
        <Link to="signup">Signup</Link>
        </li>
    
        <li> 
            <Link to="reviews">Reviews</Link>
  
        </li>

          </ul>
  </div>
    
          
          </div>
        </div>
        
        <div>
        <a href="/carts">
         <button className="cartbtn">Cart</button>
        </a>

        </div>
        
      
          
  
  </navbar>

  


   
  );
  }
export default NavBar;