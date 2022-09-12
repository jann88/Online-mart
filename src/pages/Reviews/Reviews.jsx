// import React from "react";
// import User from "../Signup/Signup.jsx";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// // import Review from "./Review.js";
// // import AddReview from "./AddReview.jsx";
// import { useParams } from "react-router-dom";




// function Reviews({reviews, id }) {
//     // const {id} = useParams();
//     const [List, setList] = useState([]);
//     // const [search, setSearch] = useState([]);

    
    

//     useEffect(() => {
//         fetch("http://localhost:9292/reviews")
//         .then((response) => response.json())
//         .then((response) => {
        
//         setList(response)
//         console.log(List)
//     });




//     }, [List]);

//     // useEffect(() => {
//     //     setSearch(reviews)
//     // }, [reviews]);
    

//     function deleteElem(e){

//         fetch(`http://localhost:9292/reviews${id}`,{
//             method: 'DELETE',
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then(r=>r.json())
//         .then(data=>console.log(List))
//         .catch(err=>console.log(err))
//         alert('You\'re delete has been successful')

//     }
//     return (
//       <div className="reviews"  key={review.id}>
        
           
            
//                 <h3>{User.name}</h3>
//                 <p>{Review.name}</p>
                
//                 <Link
//                     to={`/reviews/${review.id}`}
//                     onClick={() => <Review key={review.id}/>}>
                    
//                 </Link>
//                 <div>
//                     <div>
//                         <AddReview/>
//                     </div>
//                 <button id={id} onClick={deleteElem} type="button display in-line padding: 0 20px" className=" btn-danger btn-xsm">🗑</button>
              
                  
//                 </div>
//               </div>
            
     
//     );
//   }
//   export default Reviews;