import React from 'react'
import img1 from '../../assests/offer2.webp'
import img2 from '../../assests/offer1.webp'

const Offercomp = () => {
  return (
    <div>
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={img2} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title"><span className='text-red-500'>15%</span> off <div className="badge badge-accent badge-outline">Active</div></h2>
    <h5 className='font-bold text-xl'>Winter Gift Voucher</h5>
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-secondary rounded-box text-neutral-content">
    <span className="countdown  font-mono text-1xl">
      <span style={{"--value":15}}></span>
    </span>
    
  </div> 
  <div className="flex  flex-col p-2 bg-error rounded-box text-neutral-content">
    <span className="countdown font-mono text-1xl">
      <span style={{"--value":10}}></span>
    </span>
    
  </div> 
  <div className="flex flex-col p-2 bg-error rounded-box text-neutral-content">
    <span className="countdown font-mono text-1xl">
      <span style={{"--value":24}}></span>
    </span>
    
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-1xl">
      <span style={{"--value":51}}></span>
    </span>
    
  </div>
</div>
    <div className="card-actions justify-end">
        
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>


<div className='offerpart'>
          <h6 className='text-center bg-error rounded-lg text-white'>Latest Super Discount Active Coupon Code</h6>
            <div >
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={img1} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title"><span className='text-red-500'>10% </span>Off <div className="badge badge-secondary badge-outline">Inactive</div></h2>
    <h5 className='font-bold text-xl'>October Gift Voucher</h5>
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-1xl">
      <span style={{"--value":15}}></span>
    </span>
    {/* days */}
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-1xl">
      <span style={{"--value":10}}></span>
    </span>
  
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-1xl">
      <span style={{"--value":24}}></span>
    </span>
  
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-1xl">
      <span style={{"--value":54}}></span>
    </span>
    {/* sec */}
  </div>
</div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
            </div>

            <div>
          
            </div>
            
        

        </div>
    </div>
  )
}

export default Offercomp;