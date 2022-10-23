import React from 'react'
import './home.css'
import Carouselcomp from './Carouselcomp';
import img1 from '../../assests/offer2.webp'
import img2 from '../../assests/offer1.webp'
import { Link } from 'react-router-dom';
import Category from './Category';


const Homecomp = () => {
  
  return (
    <div>
      <Carouselcomp></Carouselcomp>
      <div className='offerpart'>
      
        <h6 className='text-center bg-error rounded-lg text-white'>Latest Super Discount Active Coupon Code</h6>
        
          
            <div >
            <div className="card offercrd bg-base-100  shadow-xl image-full">
  <figure><img src="https://thumbs.dreamstime.com/b/fruits-vegetables-wooden-table-fresh-mix-surface-unpainted-woodgrain-copy-space-above-wide-frame-91657988.jpg" alt="Shoes" /></figure>
  <div className="card-body ">
  <div className="grid justify-center grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":56}}></span>
    </span>
    sec
  </div>
</div>

    <div className="card-actions justify-center mt-8">
      <button className="btn btn-error">GET THE OFFER</button>
    </div>
  </div>
</div>
            </div>

            <div>
          
            </div>
        </div>
<section>
  <Category></Category>
</section>

<section className=' rounded-lg ml-9 mr-7 mt-16 bg-fuchsia-300'>
  <div className=' pt-5 pl-9 pr-7 flex-1'>
    <div >
      <h1  className='text-2xl'><span className='font-bold text-green-900 '>100% Natural Quality</span> Organic Product</h1>
      <p>See Our latest discounted products from here and get a specialdiscount product</p>
    </div>
    <div className='text-end'>
    <button className="btn btn-error">SHop Now</button>
    </div>
  </div>
</section>

    </div>
  )
}

export default Homecomp;