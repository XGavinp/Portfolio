import React from 'react'

const ProjectCard = (props) => {
    const {name,img,desc,github,live} =props;
  return (
    

<div className="flex w-full flex-col bg-gray-800 text-white py-10 px-5 gap-3  rounded-lg shadow dark:border-gray-700">
    <div className='max-h-64 flex justify-center mb-4'>
    
        <img className="rounded-lg" src={img} alt="" />
   
    </div>
    <div className="px-5 md:max-h-56 lg:max-h-44 py-2 flex flex-col gap-2">
        
        <h5 className="mb-2 text-2xl text-cyan-500 font-bold tracking-tight">{name}</h5>

        <p className="mb-3  text-gray-300 font-normal">{desc}</p>

        <div className='flex gap-6'>
            <a href={github} className='bg-cyan-900 px-4 py-2 text-nowrap rounded-lg hover:bg-cyan-500 hover:text-cyan-900'>Github</a>
            <a href={live} className='bg-cyan-900 px-4 py-2 rounded-lg text-nowrap hover:bg-cyan-500 hover:text-cyan-900'>Live Demo</a>
        </div>
    </div>
</div>

  )
}

export default ProjectCard
