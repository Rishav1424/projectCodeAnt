import React from 'react'
import { MenuIcon, XIcon, HomeIcon, CodeIcon, CloudIcon, BookOpenIcon, CogIcon, PhoneIcon, LogoutIcon } from '@heroicons/react/outline'
import Logo from './Logo'
import Dropdown from './Dropdown'
import NavTab from './NavTab'


function Topbar({ open, setOpen }) {

    return (
        <div className='md:hidden'>
            <div className='flex p-4 justify-between relative z-30 bg-white'>
                <Logo />
                {open ? <XIcon width={32} onClick={() => setOpen(false)} /> : <MenuIcon width={32} onClick={() => setOpen(true)} />}
            </div>
            <div className={(open? '':'-translate-y-full') + ' absolute transition duration-300 outline-b-2 outline outline-neutral-200 w-full bg-white px-3 z-20'}>
                <Dropdown />
                <div className='flex flex-col gap-3 py-3'>
                    <NavTab text="Repositories" link="repo" ><HomeIcon className='w-6' /></NavTab>
                    <NavTab text="AI Code Review" link="code" ><CodeIcon className='w-6' /></NavTab>
                    <NavTab text="Cloud Security" link="cloud" ><CloudIcon className='w-6' /></NavTab>
                    <NavTab text="How To Use" link="guide" ><BookOpenIcon className='w-6' /></NavTab>
                    <NavTab text="Settings" link="settings" ><CogIcon className='w-6' /></NavTab>
                    <NavTab text="Support" link="support" ><PhoneIcon className='w-6' /></NavTab>
                    <NavTab text="logout" link="logout" ><LogoutIcon className='w-6' /></NavTab>
                </div>
            </div>
        </div>
    )
}

export default Topbar