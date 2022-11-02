import React, { useEffect, useState } from 'react'

  import './cart.css';


const Cartcomp = () => {
  const [cartProducts,setCartProducts]=useState([]);
  const handleDelete=id=>{
    const url=`http://localhost:4000/cart/${id}`;
    fetch(url,{
       method:'DELETE',
      
    })
    .then(res=>res.json())
    .then(result=>   
       
       console.log(result)
   )};
  useEffect(()=>{
    fetch('http://localhost:4000/cart')
    .then(res=>res.json())
    .then(data=>setCartProducts(data));

},[]);
    
  return (
    <div>
        {
          cartProducts.map(value=>{
            const {img,price}=value;
            console.log(value);

            return(
              <div className='grid grid-cols-4 gap-4 mt-9 mt-28'>
                <img src={img} alt="" />
                  <p>{price}</p>
                  <button className="btn btn-primary" onClick={handleDelete}>Delete</button>
              </div>
            )
          })
        }
    </div>
  )
}
    
        

export default Cartcomp;
