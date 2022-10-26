import React from 'react'

const Productdetails = ({prodetails}) => {
    const {name,img,description,price,category}=prodetails;
  return (
    <div>
     <input type="checkbox" id="details-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <div className='flex'>
        <div>
        <figure><img className='image' src={img} alt="Shoes" /></figure>
        
        </div>
        <div>
            <p className='text-3xl font-bold mb-2'>{name}</p>
            <p className='mb-4'>{description}</p>
            <p className='text-2xl font-bold mb-3'>${price}</p>
            <p><span className='font-2xl font-bold mb-8'>Category:</span> {category}</p>
            <button className="btn btn-outline btn-secondary mt-8">ADD TO CART</button>
            
        </div>
    </div>
    <div className="modal-action">
      <label htmlFor="details-modal" className="btn">close</label>
    </div>
  </div>
</div>
    </div>
  )
}

export default Productdetails;
