import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './home.css'
import Carouselcomp from './Carouselcomp';
import img1 from '../../assests/offer2.webp'
import img2 from '../../assests/offer1.webp'
import img3 from '../../assests/banner2img.webp'
import { Link } from 'react-router-dom';
import Category from './Category';
import Productdisplay from './Productdisplay';
import Discountproduct from './Discountproduct';
import Fotter from '../Shared/Fotter';
import Slidercard from '../Shared/Slidercard';


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


{/* .............................................................................................................

product

............................................................................................................. */}

<section>
  <div>
    <Productdisplay></Productdisplay>
  </div>
</section>


<section className='bannerpart mr-9 ml-9 mt-12 pt-16 rounded-lg'>
  <div className='banner2 flex mr-14 ml-16 '>
<div className='bannerinfo mr-9 ml-9 mt-12'>
<h4 className='text-2xl'>Organic Products and Food</h4>
   <h2 className='text-3xl font-bold'>Quick Delivery to<span className='text-green-600'> Your Home</span></h2>
   <p>There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer. See Our latest discounted products from here and get a special discount.</p>
   <button className="btn btn-accent mt-3">Download Now</button>
  
</div>
<img src={img3} alt="" />

</div>
   
</section>

<div className="flex flex-col w-full mt-6">
  <div className="divider"></div> 

</div>

<section>
  <Discountproduct></Discountproduct>
</section>


<section className='paypart  pt-28'>
  <div className='grid grid-cols-3 gap-4'>

  
  <div>
    <img src="https://kachabazar-store.vercel.app/_next/image?url=%2Fapp-download-img-left.png&w=640&q=75" alt="" />
  </div>
  <div className='mt-12 text-center'>
  <h1 className='text-3xl font-bold'>Get Your Daily Needs From Our KachaBazar Store</h1>
  <p>There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.</p>
  <div className='flex mt-12 ml-10'>
    <img src="https://kachabazar-store.vercel.app/app/app-store.svg" alt="" />
    <img src="https://kachabazar-store.vercel.app/app/play-store.svg" alt="" />
  </div>
  </div>
  <div >
    <img src="https://kachabazar-store.vercel.app/_next/image?url=%2Fapp-download-img.png&w=640&q=75" alt="" />
  </div>
  </div>
</section>

<div className="flex flex-col w-full">
  <div className="divider"></div> 

</div>




<section>
  <Fotter></Fotter>
</section>

    </div>
  )
}

export default Homecomp;