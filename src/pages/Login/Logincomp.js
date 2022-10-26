import React from 'react'
import './login.css'
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Logincomp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();


  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);


  const onSubmit=data=>{
    signInWithEmailAndPassword(data.email, data.password);
  }
  return (
    <div className='login h-screen'>
        
        <div className='flex justify-center  py-36'>
        <div className="card   w-96  ">
          <form onSubmit={handleSubmit(onSubmit)}> 
          <h1 className='text-center text-4xl font-bold'> Login</h1>
  <div className="card-body">
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input
   type="email"
   placeholder="Your Email"
   className="input input-bordered w-full max-w-xs"
   {...register("email", {
       required: {
           value: true,
           message: 'Email is Required'
       },
       pattern: {
           value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
           message: 'Provide a valid Email'
       }
   })}
   
  
   />
  <label className='label text-error'>
          {errors.email?.type === 'required' && <span >{errors.email.message}</span>}
         {errors.email?.type === 'pattern' && <span >{errors.email.message}</span>}</label>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input
  
  type="password"
  placeholder="Enter password" 
  className="input input-bordered w-full max-w-xs"
  {...register("password", {
    required:{
      value:true,
      message:'pasword is required'
    },

    minLength: {
      value: 6,
      message: 'Must be 6 charecter or longer' 
    }

  })} 
  
   />
  <label className='label text-error'>
          {errors.password?.type === 'required' && <span >{errors.password.message}</span>}
         {errors.password?.type === 'minLength' && <span >{errors.password.message}</span>}</label>
</div>
  </div>
  </form>
  <input className='btn btn-info w-100' type="submit" value="Login" />
  <small> <p className='mt-3 '>New to TeleHealth? <Link to="/register">Create New Account</Link></p></small>
  <div className="flex flex-col w-full border-opacity-50">

  <div className="divider">OR</div>
</div>
  <button onClick={()=>signInWithGoogle()} className="btn btn-secondary">login</button>
 
</div>

</div>

       
    </div>
  )
}

export default Logincomp