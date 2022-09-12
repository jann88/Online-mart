// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Product from "../Product/Product";
// import User from "../Signup/Signup";
// import Reviews from "./Reviews"

// function Review() {
//   const { id } = useParams();
//   const [ review, setReview ] = useState( [] );
//   const [reviewItem, setReviewItem] = useState([])


//   // post review
//   const handleClick = () => {
//     Reviews.push(reviewItem);
//     // console.log(review);
//     const reviewItem = reviewItem ;
//     const name = User.id;
//     const productName = Product.id;
    
   
    

//     axios.post("http://localhost:9292/addreview", {
//         review,
//         name,
//         productName,
//       })
//       .then(() => {
//         alert("review posted");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     fetch(`http://localhost:9292/products/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setReview(data);
//       });
//   }, [id]);

//   return (
//     <div className="review">
     
//       <div>
//         <h2>Name: {User.name}</h2>
//         <p>Product: {Product.name}</p>
    
//         <p>Rating: {review.rating && review.rating.rate && review.rating.count}</p>
//         <button onClick={() => handleClick(review)}>Add</button>
//       </div>
//     </div>
//   );
// }
// export default Review;
import React, { useState } from "react";
const FORM_ENDPOINT = "http://localhost:9292/reviews";
const Review = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We value your feedback.</div>
      </>
    );
  }
  return (
    <div
      className="h-screen flex flex-col
      items-center justify-center"
    >
      <div className="mb-3 pt-0">
        <h3 className="text-center text-gray-400 text-s">Reviews</h3>
      </div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="body"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
};
export default Review;
