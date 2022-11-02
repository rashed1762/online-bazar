import React from 'react' 
import Fotter from '../Shared/Fotter';
import './about.css'

const Aboutcomp = () => {
  return (
    <div>
      <div className='aboutbanner'>
      <h1 className='ml-96 about pt-28 text- text-5xl font-bold'>About Us</h1>
      </div>
      <div className='grid grid-cols-2 gap-2 mb-16'>

        <div className='mt-16 ml-8'>
        <h1 className='text-3xl mb-5 font-bold'>
        Welcome to our KachaBazar
        </h1>
        <p className='mb-4 font-bold'>Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal.</p>
        <p className='font-bold mb-16'>
        Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.
        </p>



        <div className='grid grid-cols-2 gap-2'>

        <div className="card w-80 cardabout shadow-xl">
  <div className="card-body">
    <h2 className="text-5xl font-bold">10K</h2>
    <h1 className='text-2xl font-bold'>Listed Products</h1>
    <p>Dynamically morph team driven partnerships after vertical.</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
<div className="card w-80 cardabout2 shadow-xl">
  <div className="card-body">
    <h2 className="text-5xl font-bold">8K</h2>
    <h1 className='text-2xl font-bold'>Lovely Customer</h1>
    <p>Competently productize virtual models without performance.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>

        </div>
        <div className='mr-8'>
        <img className='mt-16' src="https://kachabazar-store.vercel.app/_next/image?url=%2Fabout-us.jpg&w=1080&q=75" alt="" />
          
         
        </div>
      </div>


      <div className='mr-8 ml-8 ' >
      <p className='mb-8'>Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal. Energistically reconceptualize global leadership for high-quality networks. Credibly restore an expanded array of systems rather than accurate results. Collaboratively synergize backend bandwidth without 24/7 functionalities. Credibly utilize proactive ideas whereas cross-media core competencies. Uniquely maximize professional best practices through resource maximizing services. Conveniently architect cross-unit web services for e-business imperatives.</p>
      <p className='mb-28'>Appropriately visualize market-driven data before one-to-one scenarios. Collaboratively productize multifunctional ROI through intuitive supply chains. Enthusiastically seize revolutionary value and process-centric services. Competently harness intuitive information after interoperable markets. Interactively revolutionize future-proof value before granular sources. Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.</p>
      
      <img src="https://kachabazar-store.vercel.app/_next/image?url=%2Fabout-banner.jpg&w=1920&q=75" alt="" />
      </div>

      <div className='mt-16 mr-8 ml-8'>
        <h1 className='text-4xl mb-8'>our founder</h1>
        <p>We’re impartial and independent, and every day we create distinctive, world-class reintermediate backend supply programmes.</p>
        <div className='grid grid-cols-5 gap-5 mr-8 ml-8'>
          <div>
            <img src="https://kachabazar-store.vercel.app/_next/image?url=%2Fteam%2Fteam-1.jpg&w=640&q=75" alt="" />
            <h1>Niam Shea</h1>
            <p>co-founder & Executive</p>
          </div>
          <div>
          <img src="https://kachabazar-store.vercel.app/_next/image?url=%2Fteam%2Fteam-2.jpg&w=640&q=75" alt="" />
            <h1>Niam Shea</h1>
            <p>co-founder & Executive</p>
          </div>
          <div>
          <img src="https://kachabazar-store.vercel.app/_next/image?url=%2Fteam%2Fteam-3.jpg&w=640&q=75" alt="" />
            <h1>Dara Frazier</h1>
            <p>Chief Strategy Officer</p>
          </div>
          <div>
          <img src="https://kachabazar-store.vercel.app/_next/image?url=%2Fteam%2Fteam-4.jpg&w=640&q=75" alt="" />
            <h1>Glenda Arvidson</h1>
            <p>HR Officer</p>
          </div>
          <div>
          <img src="https://kachabazar-store.vercel.app/_next/image?url=%2Fteam%2Fteam-5.jpg&w=640&q=75" alt="" />
            <h1>Melvin Davis</h1>
            <p>Lead Developer</p>
          </div>
          
        </div>
      </div>
      <div className='mt-28'>
      <Fotter></Fotter>
      </div>
     
      

    </div>
  )
}

export default Aboutcomp;