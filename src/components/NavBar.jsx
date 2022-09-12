import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


function NavBar() {
  // const [navbar, setNavbar] = useState(false);

  return (
   <navbar>
  <div class="container-fluid">
    <h1>Online Mart</h1>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/">HOME</Link>
        </li>
        <li className="nav-item">
        <Link to="reviews">REVIEWS</Link>
        </li>
    
        <li> 
            <Link to="signup">SIGNUP</Link>
  
        </li>

          </ul>
       
      
    </div>
  </div>
  </navbar>

  


   
  );
  }
export default NavBar;