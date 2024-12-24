import React from 'react'
import { HomeIcon, CodeIcon, CloudIcon, BookOpenIcon, CogIcon, PhoneIcon, LogoutIcon } from "@heroicons/react/outline";
import Logo from './Logo';
import Dropdown from './Dropdown';
import NavTab from './NavTab';
function Sidebar() {
    return (
        <div className='hidden md:flex w-64 h-full bg-white border-r-2 border-neutral-200 flex-col px-4 py-4'>
            <div>
                <Logo/>
                <Dropdown/>
            </div>
            <nav className='flex-1 h-full w-full flex flex-col justify-between'>
                <div>
                   <NavTab text="Repositories" link="repo" ><HomeIcon className='w-6'/></NavTab>
                   <NavTab text="AI Code Review" link="code" ><CodeIcon className='w-6'/></NavTab>
                   <NavTab text="Cloud Security" link="cloud" ><CloudIcon className='w-6'/></NavTab>
                   <NavTab text="How To Use" link="guide" ><BookOpenIcon className='w-6'/></NavTab>
                   <NavTab text="Settings" link="settings" ><CogIcon className='w-6'/></NavTab>
                </div>
                <div>
                    <NavTab text="Support" link="support" ><PhoneIcon className='w-6'/></NavTab>
                    <NavTab text="logout" link="logout" ><LogoutIcon className='w-6'/></NavTab>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar