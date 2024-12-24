import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { KeyIcon } from "@heroicons/react/outline";
import Logo from './Logo';


function Login() {
    const [slide, setSlide] = useState(false);
    return (
        <div className='border-2 border-neutral-200 rounded-xl bg-white w-full relative overflow-hidden'>
            <div className='border-b-2 border-neutral-200 p-4 md:px-6 pt-6'>
                <Logo/>
                <div className='text-3xl font-bold text-center mt-8'>Welcome to CodeAnt AI</div>
                <div className='ring-2 ring-neutral-200 ring-inset rounded-lg flex my-6 font-semibold text-xl relative'>
                    <div className={(slide? 'left-1/2' : 'left-0') + ' w-1/2 h-full rounded-lg border-2 border-blue-700 bg-blue-600 transition-all absolute'}></div>
                    <button className={(slide? 'text-neutral-600' : 'text-white') + ' w-1/2 transition text-center p-4 rounded-lg relative z-10'} onClick={()=>setSlide(false)}>SAAS</button>
                    <button className={(slide? 'text-white' : 'text-neutral-600') + ' w-1/2 transition text-center p-4 rounded-lg relative z-10'} onClick={()=>setSlide(true)} >Self Hosted</button>
                </div>
            </div>
            <div className={(slide? '' : 'translate-x-full')+ ' py-6 px-4 md:px-24 absolute flex flex-col gap-4 w-full transition duration-300'}>
                <Option text="Self hosted Gitlab">
                    <img src='/assets/gitlab.png' alt='github' width={32} />
                </Option>
                <Option text="Sign in with SSO">
                    <KeyIcon width={32}/>
                </Option>
            </div>
            <div className={(slide? '-translate-x-full' : '') + ' py-6 px-6 md:px-24 flex flex-col gap-4 transition duration-300'}>
                <Option text="Sign in with Github">
                    <img src='/assets/github.png' alt='github' width={32} />
                </Option>
                <Option text="Sign in with Bitbucket">
                    <img src='/assets/bitbucket.png' alt='bitbucket' width={32} />
                </Option>
                <Option text="Sign in with Azure Devops">
                    <img src='/assets/azure.png' alt='azure' width={32} />
                </Option>
                <Option text="Sign in with GitLab">
                    <img src='/assets/gitlab.png' alt='gitlab' width={32} />
                </Option>
            </div>
        </div>
    )
}

function Option({ children, text, link }) {
    return (
        <Link to={link} className='rounded-lg border-2 border-neutral-200 py-4 flex items-center w-full justify-center gap-4 hover:bg-neutral-100 transition'>
            {children}
            <div className='font-semibold text-base'>{text}</div>
        </Link>
    )
}

export default Login