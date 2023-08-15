import React, { useState } from 'react'
import {close, logo, menu} from '../assets'
import { navLinks } from '../constants'



export default function Navbar() {

  const [flag,setFlag] = useState(false);

  return (
    <nav className='text-white w-full flex py-6 justify-between items-center navbar'>
      <img className='w-[124px] h-[32px] cursor-pointer' src={logo} />
      <ul className='list-none sm:flex hidden space-x-10'>
        {/* can decstructe the navLinks here as (nav,index) */}
        {navLinks.map(ele => {
          return <li key={ele.id} className='font-poppins cursor-pointer text-[16px]'>
            <a href={`#${ele.id}`}>{ele.title}</a>
          </li>
        })}
      </ul>


      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img className='cursor-pointer' onClick={() => setFlag((prev) => !prev)} src={flag ? close : menu}/>
      </div>

      <div className={`${flag ? 'flex' : 'hidden'} absolute top-16 right-0 bg-black-gradient min-w-[140px] mx-4 p-6 my-2 rounded-xl sidebar`}>
        <ul className='sm:hidden list-none flex flex-col justify-end items-center'>
        {navLinks.map(ele => {
          return <li key={ele.id} className='font-poppins cursor-pointer text-[16px] mb-4'>
            <a href={`#${ele.id}`}>{ele.title}</a>
          </li>
        })}
        </ul>
      </div>
    </nav>
  )
}