import React from "react";
import { Link } from "react-router-dom";



// import { FaCartArrowDown } from "react-icons/fa";
import "./NavBar.css"
import Cart from "./Cart/Cart";

function NavBar() {
  // const [navbar, setNavbar] = useState(false);

  return (
    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <h1>Online Mart</h1>
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
      {/* <span class="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="usersdetails">Users</Link>
        </li>
        <li> 
          
        </li>
        <li> 
            <Link to="usersdetails">signup</Link>
        </li>
        <li className="nav-item dropdown">
        <Link to="cart">Cart</Link>
        </li>
        <div>
        {/* <a href="/" className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">Sign Out</a> */}
        {/* <a href="/" className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">Sign Out</a> */}
        </div>

          </ul>
       
      
    </div>
  </div>


    /* // <nav className="w-full bg-white shadow">
    //   <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
    //     <div>
    //       <div className="flex items-center justify-between py-3 md:py-5 md:block">
    //         {/* <a href="javascript:void(0)"> */
    //           <h2 className="text-2xl font-bold">
    //            Online Mart
    //           </h2>
    //         {/* </a> */}
    //         <div className="md:hidden">
    //           <button */}
    //             className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
    //             onClick={() => setNavbar(!navbar)}
    //           >
    //             {navbar ? (
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="w-6 h-6"
    //                 viewBox="0 0 20 20"
    //                 fill="currentColor"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             ) : (
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="w-6 h-6"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth={2}
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M4 6h16M4 12h16M4 18h16"
    //                 />
    //               </svg>
    //             )}
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <div
  //   //         className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
  //   //           navbar ? "block" : "hidden"
  //   //         }`}
  //   //       >
  //   //         <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
  //   //           <li className="text-gray-600 hover:text-blue-600">
  //   //             <Link to="/">Home</Link>
  //   //           </li>
  //   //           <li className="text-gray-600 hover:text-blue-600">
  //   //             <Link to="/">Home</Link>
  //   //           </li>
    //           {/* <li className="text-gray-600 hover:text-blue-600">
    //             <Link to="cart">Cart</Link>
    //           </li> */}
    //           {/* <li className="text-gray-600 hover:text-blue-600">
    //             <Link to="usersdetails">Users</Link>
    //           </li> */}
  //   //         </ul>
  //   //         <div className="mt-3 space-y-2 lg:hidden md:inline-block">
  //   //           <a
  //   //             href="/"
  //   //             className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
  //   //           >
  //   //             Sign Out
  //   //           </a>
  //   //         </div>
  //   //       </div>
  //   //     </div>
  //   //     <div className="hidden space-x-2 md:inline-block">
  //   //       <a
  //   //         href="/"
  //   //         className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
  //   //       >
  //   //         Sign Out
  //   //       </a>
  //   //     </div>
  //   //     <a href="/carts">
  //   //       <FaCartArrowDown />
  //   //     </a>
  //   //   </div>
  //   // </nav>
  );
  }
export default NavBar;