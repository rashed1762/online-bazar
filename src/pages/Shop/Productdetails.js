import React from 'react'

const Productdetails = ({prodetails}) => {
    const {_id,name,img,description,price,category}=prodetails;

    const handleBooking=event=>{
      event.preventDefault();
      const booking={
        valueId:_id,
        img:img,
        price:price,
      
          
      }
      console.log(booking)
      fetch('http://localhost:4000/cart', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(booking)
          })
          .then(res => res.json())
          .then(data => {
              
        
          });
  
      
      
    }

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
            <button onClick={handleBooking} className="btn btn-outline btn-secondary mt-8">ADD TO CART</button>
            
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
