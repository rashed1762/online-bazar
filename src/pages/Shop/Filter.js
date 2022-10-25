import React from 'react' 
import { useState,useEffect } from 'react';


const Filter = () => {
  return (
    <div>
      <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
      <button className="btn btn-accent">Button</button>
    </div>
  )
}

export default Filter;
