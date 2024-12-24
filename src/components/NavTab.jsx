import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTab({children, text, link}) {
    return (
        <NavLink to={link} className={({isActive})=> ((isActive? "bg-blue-600 text-neutral-50" : "text-neutral-700 hover:text-neutral-950")+" px-4 py-2 text-lg font-medium w-full rounded-lg flex gap-3 items-center transition")}>
            {children}
            <div>{text}</div>
        </NavLink>
    )
}

export default NavTab