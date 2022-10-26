import React from 'react'
import './add.css';
import { useForm } from 'react-hook-form';

const AddProductcomp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
     const url=`http://localhost:4000/products`;
     fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
     })
     .then(res=>res.json())
     .then(result=>   
        
        console.log(result)
    )};
  return (
    <div className='body '>

    
    <div >
    <form className='text-center p-5 ' onSubmit={handleSubmit(onSubmit)}>
      <label className='font-bold text-1xl' htmlFor="">Title</label>
      <br />
      <input placeholder='title' type="text" className='input' {...register("name", { required: true, maxLength: 20 })} />
      <br /><br />
      <label className='font-bold text-1xl' htmlFor="">description</label>
      <br />
      <input className='textarea' type="text" placeholder='description' {...register("description")} />
      <br /><br />
      <label className='font-bold text-1xl' htmlFor="">price</label>
      <br />
      <input className='input' placeholder='price' type="number" {...register("price", )} />
      <br /><br />
      <label className='font-bold text-1xl' htmlFor="">category</label>
      <br />
      <input className='input' placeholder='Category' type="text" {...register("category", )} />
      <br /><br />
      <label className='font-bold text-1xl' htmlFor="">image</label>
      <br />
      <input  className='input' placeholder='photo' type="text" {...register("img", )} />
      <br /><br />
      <input  className='bg-error submitbtn' type="submit" value="add service" />
    </form>
    
    </div>
    </div>
  )
}

export default AddProductcomp;
