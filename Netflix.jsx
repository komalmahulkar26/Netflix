import React from 'react'

function Netflix() {
  return (
    <div> 
    <div className='bg-slate-700 h-[600px]'>
         <div className='flex justify-end'>
        <div className='mr-auto pl-28'>
             <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                  className="w-full h-11 mt-4 object-contain "/> </div>
                 <div className='flex justify-end pr-8 gap-3'> <button className='bg-slate-200  mt-3 rounded-md w-36 h-10'> 🌐 English</button>
                  <button className='bg-red-700 w-28 mt-3 h-10 rounded-md '>Sign In</button></div></div>
               <h1 className='font-bold  ml-96  mt-48 text-4xl'>Unlimited movies, TV shows and more</h1>
<p className=' text-2xl ml-[500px]'> Watch anywhere. Cancel anytime.</p>

<p className='   ml-72 text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>
<input type='email' placeholder='Email Adress' className='w-72  text-black h-10 rounded-md ml-96 pl-2'/>
<button className='w-48 text-2xl mt-5 ml-2 h-10 rounded-md bg-red-500 pl-2'> GET STARTED</button>
        </div>
        </div>
    
  )
}

export default Netflix