import React from 'react'
import { ArrowUpIcon } from "@heroicons/react/outline";

function Design() {
    return (
        <div className=' flex items-center justify-center h-full border-r-2 border-neutral-200'>
            <div className='absolute bottom-0 left-0 opacity-25'>
                <img src='/assets/logo.svg' alt='logo' width={256}></img>
            </div>
            <div>
                <div className='rounded-3xl shadow-[0_0_15px_0px_rgba(0,0,0,0.2)] bg-white relative z-10'>
                    <div className='flex items-center border-b border-neutral-300 px-6 py-4 gap-2'>
                        <img src='/assets/logo.svg' alt='logo'></img>
                        <h3 className='font-bold text-lg text-slate-900'>AI to Detect and Autofix Bad Code</h3>
                    </div>
                    <div className='flex items-center justify-evenly py-8 px-6 pr-8 gap-8'>
                        <div className=''>
                            <div className='font-bold text-xl text-center text-slate-900'>30+</div>
                            <div>Language Support</div>
                        </div>
                        <div className=''>
                            <div className='font-bold text-xl text-center text-slate-900'>10K+</div>
                            <div>Developers</div>
                        </div>
                        <div className=''>
                            <div className='font-bold text-xl text-center'>100K+</div>
                            <div>Hours Saved</div>
                        </div>
                    </div>
                </div>
                <div className='rounded-3xl shadow-[0_0_15px_0px_rgba(0,0,0,0.2)] bg-white relative float-right py-4 px-8 -right-5 -top-3 z-20'>
                    <div className='flex gap-20 items-center'>
                        <img src='/assets/pie.svg' alt='pie' />
                        <div>
                            <div className='flex text-blue-600 gap-1 font-bold'>
                                <ArrowUpIcon width={16} strokeWidth={4}/>
                                <div className=''>14% </div>
                            </div>
                            <div className='text-xs'>This Week</div>
                        </div>
                    </div>
                    <div className='font-bold my-2'>Issues Fixed</div>
                    <div className='font-extrabold text-4xl text-slate-900'>500K+</div>
                </div>
            </div>
        </div>
    )
}

export default Design