import React, { useState } from 'react'
import user_icon from '../assets/user_icon.svg'
import { toast } from 'react-toastify'

function Footer() {
  const [input, setInput] = useState('')

  const submitBtn = () => {
    if (input === '') {
      toast.error('Please enter your email first',{pauseOnHover:false});
    } else {
      toast.success('Email Submited !',{pauseOnHover:false})
      setInput('')
    }
  }

  return (
    <div className='min-h-full w-11/12 m-auto text-sm sm:text-base' >
      <div className='upper w-full border-b-2 border-white flex justify-center items-center flex-col sm:flex-row '>
        <div className='upperLeft w-full sm:w-1/2'>
          <h1 className='h-10 sm:w-48 rounded-3xl font-semibold cursor-pointer text-3xl sm:text-4xl text-white transition-transform duration-500 hover:scale-105 w-full text-center ' >SunZ Shop</h1>
          <p className='w-full sm:w-4/5 py-4'>Lorem ipsum dolor sit Inventore officia suscipit earum nemo repudiandae, maxime adipisci eligendi quaerat corrupti.</p>
        </div>
        <div className='upperRight w-full sm:w-1/2 mb-5 flex justify-end items-center '>
          <div className='flex justify-start bg-gray-800 rounded-3xl '>
            <img src={user_icon} alt="" className=' mt-2 ml-3' />
            <img src='' alt="" className=' mt-2 ml-3' />
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter Your Email' className='h-10 w-64 text-sm border-none outline-none rounded-3xl bg-gray-800 pl-4 ' />
          </div>
          <button onClick={submitBtn} className='h-10 w-28 rounded-3xl font-semibold ml-2 bg-gradient-to-tr from-[#DA7C25] to-[#B923E1] text-white border-none transition-transform duration-500 ease-in-out transform hover:scale-105'>Sumite</button>
        </div>
      </div>
      <div className='w-full flex flex-col sm:flex-row mt-4'>
        <div className=' w-full sm:w-1/2 pb-2 sm:pb-0'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='w-full sm:w-1/2 flex flex-row justify-between sm:justify-end text-start sm:pl-10 '>
          <li className='list-none text-gray-300 pb-3 sm:pb-5 sm:pl-7'>Terms of Services</li>
          <li className='list-none text-gray-300 pb-3 sm:pb-5 sm:pl-7'>Privacy Policy</li>
          <li className='list-none text-gray-300 pb-3 sm:pb-5 sm:pl-7'>Contact With me</li>
        </div>
      </div>
    </div>
  )
}

export default Footer