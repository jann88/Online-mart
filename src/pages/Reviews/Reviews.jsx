import React from "react";
import { useState, useEffect } from "react";
      
const Reviews = () => {
    const [isReview, setIsReview] = useState([""]);
    // const [search, setSearch] = useState([]);

    useEffect(() => {

        fetch("https://my-shop-mart.herokuapp.com/reviews")
        .then((response) => response.json())
        .then((response) => {
        
        setProducts(response)
        console.log(isReview)
    });




    }, []);

    
    // useEffect(() => {
    //     setSearch(review)
    // }, [reviews]);
    

    return(
        <>
        <div className="review" >
            <h2>Feedback</h2>
            <Link to={isreview} onClick={() => <Reviews/>}>
    

    
                
            </Link>
        </div>
        
   
    
    <div className="card-container" >
        {isReview?.map((isReview, i) => {
            return <Reviews isReview={isReview} 
            key={isReview?.id}
            name={isReview?.name}
            // image_url={imageUrl?.image_url}
            // description={product?.description}
            // price={price?.price}

            id={isReview?.id || i}
            setIsReview={setIsReview}
             />;
        })}
    </div>
        </>

    );
}
export default Reviews;