import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import Fotter from '../Shared/Fotter';

const Contactcomp = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e0upac7', 'template_3v6hllz', form.current, 'oYs0fZ-tmSmHuYr2P')
      .then((result) => {
          console.log(result.text);
          console.log("massage sent")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div>
       <div className='box mt-5'>
               
                        <form ref={form} onSubmit={sendEmail}>
                     <label>Name</label>
                     <br />
                     <input type="text" name="user_name" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    
                    <br />
                    <br />
                    <label>Email</label>
                    <br />
                    <input type="email" name="user_email" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    
                    <br />
                    <br />
                    <label>Message</label>
                    <br />
                    <textarea className='massage' name="message" placeholder="Bio"></textarea>
                    
                    <br />
                    <br />
                    <button type="submit" className="btn btn-outline btn-primary">send</button>
                    
                    
                   
    </form>
                        </div>
                        <div className='mt-28'>
                          <Fotter></Fotter>
                        </div>
                        
                    </div>
                
          
  )
}

export default Contactcomp;