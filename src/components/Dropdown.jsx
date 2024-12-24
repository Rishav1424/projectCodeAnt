import React from 'react'
import { ChevronDownIcon } from "@heroicons/react/outline";

function Dropdown() {
    return (
        <div className='p-2 md:mt-4 mb-4 rounded border border-neutral-300 text-neutral-700 flex items-center'>
            <div className='overflow-hidden flex-1 whitespace-nowrap text-ellipsis'>UtkarshDhairyaPanwar hbsjh</div>
            <ChevronDownIcon className='w-6 px-1' />
        </div>
    )
}

export default Dropdown