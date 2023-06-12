import React,{useState} from 'react'

function Frequently({Questions,Ans}) {
const [isOpen,Setisopen]=useState(false)
const handleclick=()=>{
(Setisopen(!isOpen))
}
  return (
  
      <div className="bg-black ">
        <div className='  bg-slate-500 ml-[500px] p-2 mt-5 w-[600px] '>
     <div className='flex justify-between  bg-slate-500  '>
       <h2 className=' text-2xl'>{Questions}</h2>
         <p onClick={handleclick}>➕</p></div>
         {isOpen?<p >{Ans}</p>:null}</div>

</div>
  )
}


export default Frequently