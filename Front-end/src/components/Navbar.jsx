import React, { useState } from 'react'
import { Bone } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [visible, setVisible] = useState(false)



  return (
    <div className='flex items-center justify-between py-5 font-medium'>
           <div className="logo flex gap-1 text-3xl"><Bone className='size-8 pt-1' /><h2 className='tracking-tight'>Leo's House</h2></div>


           <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
           </ul>


           <div className='flex items-center gap-6'>
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

            <div className='group relative'>
                <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-ponter hover:text-black'>My Profile</p>
                        <p className='cursor-ponter hover:text-black'>Orders</p>
                        <p className='cursor-ponter hover:text-black'>Log Out</p>
                    </div>
                </div>
            </div>
            <Link className='relative' to='/cart'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 leading-4 text-center bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer  sm:hidden' alt="" />
           </div>

           {/* Side bar mernu for small screens */}
           <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-[80%] shadow-xl shadow-black rounded-l-2xl duration-500' : 'w-0 duration-500' }`}>
            <div className='flex flex-col text-gray-600 '>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p>Back</p>
                </div>
                <div className='flex flex-col gap-4 mx-5'>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-5 border rounded-2xl font-extralight tracking-tight bg-gray-600 hover:sahdow-black hover:shadow-2xl duration-300 text-white' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-5 border rounded-2xl font-extralight tracking-tight bg-gray-600 hover:sahdow-black hover:shadow-2xl duration-300 text-white' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-5 border rounded-2xl font-extralight tracking-tight bg-gray-600 hover:sahdow-black hover:shadow-2xl duration-300 text-white' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-5 border rounded-2xl font-extralight tracking-tight bg-gray-600 hover:sahdow-black hover:shadow-2xl duration-300 text-white' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
           </div>


    </div>
  )
}

export default Navbar
