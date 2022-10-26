import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

    
  return (
    
       <div className='login h-screen'>
        
        <div className='flex justify-center  py-36'>
        <div className="card   w-96 ">
          <form > </form>
          <h1 className='text-center text-4xl font-bold'> signup</h1>
  <div className="card-body">
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">name</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</div>
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  
</div>

<div className="flex flex-col w-full border-opacity-50">
<small> <p className='mt-3 '>Already Have An Account? <Link to="/login">Go To Login</Link></p></small>
  <div className="divider">OR</div>
</div>
    
    <button  className="btn btn-secondary">sign up</button>
  </div>
</div>

</div>

       
    </div>

  )
}

export default Register;
