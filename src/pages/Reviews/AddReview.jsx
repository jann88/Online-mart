// import React, {useState } from 'react';


// const AddReview = () => {
    
//     const [char, setChar] = useState({
//         review: '',
//         userId: '',
//         productId: '',
        
//     })


  
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         fetch(`http://localhost:9292/reviews`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json'
//             },
//             body: JSON.stringify({
//                 review: char.review,
//                 userId: char.userId,
//                 productId: char.productId,
                
    
//             })
//         })
//         .then(r=>r.json())
//         .then(d=>console.log(d))
//         .catch(error=>console.log(error));
//         document.querySelector('.form').reset()
//     };

//     const handleChange = (e)=>{
//         setChar({...char, [e.target.name]: e.target.value})
     
       
//     }
//     return (
        
//         <>
//             <h3>Add Review</h3>
//             <form onSubmit={handleSubmit} className='form'>
//             <div className='name'>
//             </div>
//             <input type="text" className='form-control' placeholder = "Review" name="review" onChange={handleChange} value={char.review}/>
//             <input type="text" className='form-control' placeholder = "User" name="username" onChange={handleChange} value={char.name.id.name}/>
//             <input type="text" className='form-control' placeholder = "Product" name="productname" onChange={handleChange} value={char.product.id}/>
        
//             <button type="button" className="btn btn-success primary btn-sm" onClick={handleSubmit}>Add</button>
//             <hr/>
//             </form>
            
//         </>
//     )
    
//     }

// export default AddReview;

