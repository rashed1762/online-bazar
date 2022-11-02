import React, { useState } from 'react'
import './home.css';
import data from '../../Data/Categorydata';

const Category = () => {
    const [catdata,setCatdata]=useState(data)
  return (
    <div>
        <div className='text-center border-b-4 '>
        <h2 className='text-3xl font-bold'>Featured Categories</h2>
            <p>Choose your necessary products from this feature categories.</p>
        </div>
        <div className='grid grid-cols-6 gap-6 mt-9'>
            {
                catdata.map((value)=>{
                    const {img,title}=value;
                    return(
                        <div>
                            <div className="card crdstyle card-side bg-base-100 shadow-xl">
  <figure><img className='catimg' src={img} alt="Movie"/></figure>
  <div className="card-body">
    <p className="cattitle">{title}</p>
    
    
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

export default Category;