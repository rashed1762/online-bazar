import React, { useState } from 'react'
import Productdata from '../../Data/Productdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons'

const Productdisplay = () => {
    const [prodata,setProdata]=useState(Productdata)
  return (
    <div>
            <div className='text-center mt-9 '>
                <h1 className='text-3xl font-bold'>Popular Products for Daily Shopping</h1>
                <p>See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping.</p>
            </div>
        <div className='grid grid-cols-6 gap-6 mt-9'>
            {
                prodata.map((productvalue)=>{
                    const {img,title,price}=productvalue;
                    return(
                        <div>
                                <div className="card procrd w-96 bg-base-100 shadow-xl">
  <figure><img className='proimg' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-1xl font-bold">{title}</h2>
    <div  className='flex'>
    <p className='text-2xl'>{price}</p>
    <div className="tooltip" data-tip="see details">
    <FontAwesomeIcon className='details' icon={faEye} />
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

export default Productdisplay;