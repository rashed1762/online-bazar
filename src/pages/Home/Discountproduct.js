import React, { useState } from 'react'
import Discountdata from '../../Data/Discountdisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Discountproduct = () => {
    const [discount,setDiscount]=useState(Discountdata)
  return (
    <div>
      <div className='text-center mt-12 '>
        <h1 className='text-3xl font-bold'>Latest Discounted Products</h1>
        <p>See Our latest discounted products below. Choose your daily needs from here and get a special discount with free shipping.</p>
      </div>
      <div className='grid grid-cols-6 gap-6 mt-9 mt-28'>
            {
                discount.map((discountvalue)=>{
                    const {img,title,delprice,price,discount}=discountvalue;
                    return(
                        <div>
<div className="card discountcrd w-96 bg-base-100 shadow-xl">
  <figure><img className='discountimg' src={img} alt="Shoes" /> </figure>
  <div className="card-body">
    <h2 className="text-1xl">
      {title} 
      <br />
      <div className="badge badge-secondary">{discount}</div>
    </h2>
    <p className='font-bold'>{price} <del className='text-slate-400'>{delprice}</del>  </p>
    <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
    <div className="tooltip " data-tip="ADD TO CART">
  <button className="btn iconbtn btn btn-outline btn-success"><FontAwesomeIcon className='carticon' icon={faShoppingCart} /></button>
</div>
<div className="tooltip" data-tip="SEE DETAILS">
  <button className="btn iconbtn btn btn-outline btn-secondary"><FontAwesomeIcon className='eyeicon' icon={faEye} /></button>
</div>
</div>
    
    
  </div>
</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Discountproduct;
