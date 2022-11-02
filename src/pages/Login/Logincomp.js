import React, { useEffect } from 'react'
import './login.css'
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Logincomp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();


  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);
const [token]=useToken(user || gUser)
const navigate = useNavigate();
const location = useLocation();
let from = location.state?.from?.pathname || "/";
let signInError;


useEffect(()=>{
  if( token){
    navigate(from, { replace: true });
  
  }
},[token,from,navigate])


if (loading || gLoading) {
  return <button className="btn loading">loading</button>
}
if(error || gError){
  signInError= <p className='text-red'><small>{error?.message || gError?.message }</small></p>
}

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
    <span className="label-text"><span className='font-bold'>Email</span></span>
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
    <span className="label-text"><span className='font-bold'>Password</span></span>
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
  {signInError}
  <input className='btn  btn-accent loginbtn' type="submit" value="Login" />
  </form>
 
  <small> <p className='mt-3 '>New to TeleHealth? <Link to="/register"><span className=' text-blue-700 font-bold'>Create New Account</span> </Link></p></small>
  <div className="flex flex-col w-full border-opacity-50">

  <div className="divider">OR</div>
</div>
  <button onClick={()=>signInWithGoogle()} className="btn btn-secondary">Continue With GooGle  </button>
 
</div>

</div>

       
    </div>
  )
}

export default Logincomp