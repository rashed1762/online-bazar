import React from 'react'
import './Prodetails.css'
import { Link, NavLink, useParams } from 'react-router-dom';
import Productdata from '../../Data/Productdata';

const Prodetails = () => {
    const {productId}=useParams();  
    const value=Productdata.find((value)=>value.id==productId);
    const {img,title,desc,price}=value;
    return (
        <div className='productdetails'>
        <section className=' section-product'>
            <div className='flex style'>
                <div data-aos="flip-up">
                <img className='img-style' src={img} alt={title} />
                </div>
            
            <div className='info' >
            <h4 className='text-4xl font-bold mb-8'>{title}</h4>
                <p className='text-xl mb-5'>{desc}</p>
                <h6 className='font-bold text-2xl'>{price}</h6>
                <NavLink to="/" as={Link}><button className="btn btn-wide btn-outline btn-secondary mt-10 ml-20">Back to home</button></NavLink>
                
            </div>
            </div>

         
        </section>
            
        </div>
    )
}

export default Prodetails;
