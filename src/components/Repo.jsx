import React from 'react';
import { DatabaseIcon } from '@heroicons/react/outline';

function Repo({ name, isPublic, lang, size, lastUpdate }) {
    return (
      <div className='px-4 md:px-6 py-4 flex flex-col gap-2 border-b-2 border-neutral-300 hover:bg-neutral-100 transition'>
        <div className='flex items-center gap-4'>
          <h2 className='text-lg md:text-xl font-medium'>{name}</h2>
          <div className='text-sm md:text-base rounded-full border px-3 bg-blue-50 border-blue-300 text-blue-500'>{isPublic ? "Public" : "Private"}</div>
        </div>
        <div className='flex items-center gap-6 md:gap-10 text-sm md:text-base'>
          <div className='flex gap-2 md:gap-4 items-center'>
            <div>{lang}</div>
            <div className='border-4 border-blue-500 rounded-full'></div>
          </div>
          <div className='flex gap-2 md:gap-4 items-center'>
            <DatabaseIcon className='w-4'/>
            <div>{size}</div>
          </div>
          <div>Updated {lastUpdate} ago</div>
        </div>
      </div>
    )
  }

export default Repo