import React from 'react'
import {assets} from '../../assets/assets.js'

const Navbar = ({setShowLogin}) => {
  return (
    <div className='navbar flex justify-between items-center py-2 px-[4%]'>
         <p className='text-[#FF6347] italic text-[34px] font-[550]'>EasyServe</p>
         <div className='flex gap-5'>
         <button
        onClick={() => setShowLogin(true)}
        className="text-[16px] text-[#49557e] bg-transparent border border-[#48484f] rounded-full px-5 py-1 cursor-pointer hover:bg-[#fff4f2] transition-all duration-300"
      >
        Sign In
       </button>
        <img className='profile w-[40px]' src={assets.profile_image} alt="" />
         </div>
        
        
      
    </div>
  )
}

export default Navbar
