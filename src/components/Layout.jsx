import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
function Layout() {
  const [menu, setMenu] = useState(false);
  return (
    <div className='h-screen w-screen fixed flex flex-col md:flex-row font-["Inter"]'>
      <Sidebar />
      <Topbar open={menu} setOpen={setMenu} />
      <div className='h-full w-full'>
        {menu && <div className='absolute size-full bg-neutral-500/30 z-10' onClick={e => {e.stopPropagation(); setMenu(false)}}></div>}
        <Outlet />
        </div>
    </div>
  )
}

export default Layout