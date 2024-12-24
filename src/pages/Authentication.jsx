import React from 'react'
import Design from '../components/Design'
import Login from '../components/Login'

function Authentication() {
  return (
    <div className='fixed h-full w-full flex font-["Inter"] text-neutral-900'>
      <div className='w-1/2 h-full bg-white hidden md:block'>
        <Design />
      </div>
      <div className='h-full w-full md:w-1/2'>
        <div className='bg-neutral-50 h-full w-full flex flex-col items-center justify-center px-4 md:px-6'>
          <Login/>
          <div className='mt-4 text-center'>
            By Signing up you agree to the
            <a href='/policy' className='font-bold'> Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication