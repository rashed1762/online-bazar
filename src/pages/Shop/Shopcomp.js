import React from 'react'
import Slidercard from '../Shared/Slidercard';
import Productcomp from './Productcomp';

const Shopcomp = () => {
  return (
    <div>
      <div className='grid grid-cols-3 gap-4 pl-8 '>
        <div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fcta-bg-1.jpg&w=1920&q=75" alt="Shoes" /></figure>
  <div className="card-body text-center">
  <h1 className='font-bold'>Taste of</h1>
    <h2 className='text-3xl font-bold' >Fresh & Natural</h2>
    <p>Weekend Discount Offer</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Shop Now</button>
    </div>
  </div>
</div>
        </div>
        <div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fcta-bg-2.jpg&w=1920&q=75" alt="Shoes" /></figure>
  <div className="card-body text-center">
  <h1 className='font-bold'>Taste of</h1>
    <h2 className='text-3xl font-bold'>Fish & Meat</h2>
    <p>Weekend Discount Offer</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        <div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fcta-bg-3.jpg&w=1920&q=75" alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h1 className='font-bold'>Taste of</h1>
    <h2 className='text-3xl font-bold' >Bread & Bakery</h2>
    <p>Weekend Discount Offer</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Shop Now</button>
    </div>
  </div>
</div>
        </div>
      </div>


<section className='mt-28'>
    <Slidercard></Slidercard>
</section>




<section>
  <Productcomp></Productcomp>
</section>

    </div>
  )
}

export default Shopcomp;
