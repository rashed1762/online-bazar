import React from 'react'
import './home.css'
import img1 from '../../assests/offer2.webp'
import img2 from '../../assests/offer1.webp'
import img3 from '../../assests/car1.jpg'
import img4 from '../../assests/car2.jpg'
import img5 from '../../assests/car3.jpg'
import img6 from '../../assests/car4.jpg'



const Carouselcomp = () => {
  return (
    <div>
       <div className="car ">
        <div>
        <div className="carousel ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img4}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img5} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img6} className="img w-full" />
    
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
      
    </div>
  </div>
</div>
        </div>


       </div>
    </div>
  )
}

export default Carouselcomp;