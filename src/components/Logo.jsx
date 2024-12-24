import React from 'react'

function Logo() {
    return (
        <div className='flex items-center justify-center gap-2'>
            <img src='/assets/logo.svg' alt='logo' className='w-8' />
            <div className='text-2xl p-2 flex'>CodeAnt AI</div>
        </div>
    )
}

export default Logo