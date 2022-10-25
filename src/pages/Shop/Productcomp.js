import React, { useEffect, useState } from 'react'
import data from '../../Data/Categorydata';
import './shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Filter from './Filter';
import Productdetails from './Productdetails';

const Productcomp = () => {
  const [prodetails,setProdetails]=useState(null);
    const [products,setProducts]=useState([]);

    useEffect(()=>{
      fetch('http://localhost:4000/products')
      .then(res=>res.json())
      .then(data=>setProducts(data));
  },[]);
  return (
    <div>
      <div className='bg-error h-20 mt-16 ml-8 mr-9 rounded-lg'>
<h1 className='text-center text-2xl pt-4'>Total  <span className='text-secondary-content font-bold'>{products.length}</span> items Found</h1>
</div>
     <Filter></Filter>
        <div className='grid grid-cols-6 gap-6 mt-9 mt-28'>

         
      {
      products.map(productvalue=>{
            const {img,name,price}=productvalue;
            console.log(productvalue);
            return(
                <div className="card productcrd w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-1xl font-bold">{name}</h2>
    <p>${price}</p>
    <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
    <div className="tooltip " data-tip="ADD TO CART">
  <button className="btn iconbtn btn btn-outline btn-success"><FontAwesomeIcon className='carticon' icon={faShoppingCart} /></button>
</div>
<div className="tooltip" data-tip="SEE DETAILS">
 
  <label onClick={()=>setProdetails(productvalue)} htmlFor="details-modal" className="btn iconbtn btn btn-outline btn-secondary"><FontAwesomeIcon className='eyeicon' icon={faEye} /></label>
</div>
</div>
  </div>
</div>
            )
        })
      }

      {prodetails && <Productdetails prodetails={prodetails}></Productdetails>}
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Productcomp
