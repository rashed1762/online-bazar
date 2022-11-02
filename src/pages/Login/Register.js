import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import './login.css'
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();


  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token]=useToken(user || gUser);
  const navigate=useNavigate();

  let signInError;
  
if (loading || gLoading || updating) {
  return <button className="btn loading">loading</button>
}

if(error || gError ||updateError){
  signInError= <p className='text-red'><small>{error?.message || gError?.message ||updateError?.message }</small></p>
}

if(token){
  console.log(user || gUser);
  navigate('/shop');
  
  }





  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
          console.log('update done');
          navigate('/shop');
  }

    
  return (
    
       <div className='login h-screen'>
        
        <div className='flex justify-center  py-36'>
        <div className="card   w-96 ">
          <form  onSubmit={handleSubmit(onSubmit)} > 
          <h1 className='text-center text-4xl font-bold'> signup</h1>
  <div className="card-body">
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text"><span className='font-bold'>Name</span></span>
  </label>
  <input
  type="name"
  placeholder="Your name"
  className="input input-bordered w-full max-w-xs"
  {...register("name", {
      required: {
          value: true,
          message: 'Name is Required'
      },
   
  })}
  
  
  />
  <label className='label text-error'>
     
     {errors.name?.type === 'required' && <span >{errors.name.message}</span>}</label>
 
</div>
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text"><span className='font-bold'>Eamil</span></span>
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

<div className="flex flex-col w-full border-opacity-50">

</div>
{signInError}
<input className='btn  btn-accent register' type="submit" value="SignUp" />
<small> <p className='mt-3 '>Already Have An Account? <Link to="/login"><span className='text-blue-700 font-bold'>Go To Login</span> </Link></p></small>


  </div>
  
  </form>
  <div className="divider">OR</div>
<button onClick={()=>signInWithGoogle()} className="btn btn-secondary">Sign Up With Google</button>
</div>


</div>

       
    </div>

  )
}

export default Register;
