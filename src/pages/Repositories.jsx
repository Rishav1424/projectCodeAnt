import React, { useEffect, useState } from 'react'
import { RefreshIcon, PlusIcon, SearchIcon } from "@heroicons/react/outline";
import Repo from '../components/Repo';

function Repositories() {
  const [repos, setRepos] = useState([]);
  useEffect(()=>{
    fetch("/data.json").then((data) => {
      data.json().then((data)=> setRepos(data.repositories))
    });
  },[]);
  return (
    <div className="bg-neutral-50 h-full w-full md:p-6">
      <div className="rounded-lg bg-white md:border-2 md:border-neutral-200 h-full w-full text-neutral-900 flex flex-col">
        <div className=" border-b-2 border-neutral-300 p-4 md:p-6">
          <div className="flex flex-col md:flex-row justify-between gap-2 items-start md:items-center">
            <div className="">
              <h2 className="text-3xl font-bold text-neutral-900"> Repositories</h2>
              <p className="text-neutral-600 md-1 md:mt-2"> {repos.length} total repositories </p>
            </div>
            <div className="flex gap-2">
              <button className="text-sm font-light rounded-md border-slate-300 text-neutral-700 border-2 flex py-2 px-4 gap-2 h-min items-center hover:text-black transition">
                <RefreshIcon className='w-6' />
                <div>Refresh All</div>
              </button>
              <button className="text-sm font-light rounded-md bg-blue-600 text-white flex py-2 px-4 gap-2 h-min items-center">
                <PlusIcon className='w-6' />
                <div>New Repository</div>
              </button>
            </div>
          </div>
          <div className='border-slate-300 border-2 text-neutral-700 py-2 px-4 flex items-center gap-2 w-full md:w-80 rounded-lg mt-4 md:mt-2'>
            <SearchIcon className='w-4' />
            <input className='focus:outline-none' placeholder='Search Repositories' />
          </div>
        </div>
        <div className='repos overflow-scroll no-scrollbar'>
          {repos.map((repo, i)=>(
            <Repo key={i} name={repo.name} isPublic={repo.public} lang={repo.lang} size={repo.size} lastUpdate={repo.lastUpdate} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Repositories;

