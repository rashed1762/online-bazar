import React, { Component, useState } from "react";
import './Nav.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import data from "../../Data/Categorydata";

const Slidercard = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 12,
        slidesToScroll: 12,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="slider ">
       
    <Slider {...settings}>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Fresh & Meat</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRZ275n3f%2Fcabbage.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Fresh Seafood</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FpfscwF4%2Fshrimp.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Cooking Essentials</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhBv30Rt%2Ffrying-pan.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Breakfast</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FdgPzSt7%2Fbagel.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Drinks</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FDz8LKDX%2Fsoft-drink.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Milk & Dairy</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F181Qpm8%2Fmilk.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Sptors & Fitness</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FxmGhNRF%2Fapple.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Sptors & Fitness</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Sptors & Fitness</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Sptors & Fitness</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Sptors & Fitness</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FHT7c6VT%2Fchips.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Sptors & Fitness</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jVF5Cmc%2Fcookie.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Sptors & Fitness</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FrdY6zL0%2Fcleaner.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Sptors & Fitness</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQNqrnQBB%2Fbaby.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Sptors & Fitness</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRVVzrWfg%2Fcat.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Sptors & Fitness</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fgjz1P7wx%2Fbeauty.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Sptors & Fitness</h2>
    
  </div>
</div>
      </div>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl cardslider ">
  <figure><img src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FqNCvxT0%2Fdumbbell.png&w=48&q=75" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-error-natural" >Sptors & Fitness</h2>
    
  </div>
</div>
      </div>

    </Slider>
  </div>
  )
}

export default Slidercard;
