import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'
import {SignIn} from '@clerk/react'


const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row relative'>
      <img src={assets.bgImage} alt="" className='absolute inset-0 -z-10 w-full h-full object-cover' />

      {/* Left side */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40 relative z-10'>
        <img src={assets.vite} alt="" className='w-43 object-contain' />
        <div>
          <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
            <img src={assets.group_users} alt="" className='h-8 md:h-10' />
            <div className='flex flex-col'>
              <div className='flex'>
                {Array(5).fill(0).map((_, i) => (<Star key={i} className='h-4 w-4 md:h-5 md:w-5 text-transparent fill-amber-500' />))}
              </div>
              <p>Used by 100K+ users <br /> (Made by Harsimran Ahuja)</p>
            </div>
          </div>
          <h1 className='text-3xl md:text-5xl md:pb-2 font-bold bg-gradient-to-r from-indigo-900 to-indigo-800 bg-clip-text text-transparent mt-5 pt-5'>WELCOME EVERYONE!</h1>
          <p className='text-xl md:text-2xl text-indigo-900 max-w-72 md:max-w-md'>We’re here to connect, share, and learn from each other on Zyro</p>
        </div>
        <span className='md:h-10'></span>
      </div>
      {/* Right side */}
      <div className='flex-1 flex item-center justify-center p-5 sm:p-25'>
        <SignIn/>
      </div>
    </div>
  )
}

export default Login