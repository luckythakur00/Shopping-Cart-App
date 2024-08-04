import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='h-16 w-full m-auto flex justify-between pt-2 px-3 sm:pt-4 sm:mb-2 sm:px-14' >
      <Link to='/' className='font-semibold text-3xl text-gray-300 transition-transform duration-500 hover:scale-105 hover:text-white ' >SunZ Shop</Link>
      <div>
        <Link className='text-lg text-gray-400 font-semibold hover:text-white ml-6' to={'/'} >Home</Link>
        <Link className='text-lg text-gray-400 font-semibold hover:text-white ml-6' to={'/cart'} >Cart</Link>
      </div>
    </div>
  )
}

export default Header