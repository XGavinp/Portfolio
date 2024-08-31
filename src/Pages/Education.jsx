import React from 'react'
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <>
    <section id='education' className='flex w-full my-10 bg-gray-900 py-5 justify-center'>
        <div className="container flex flex-col gap-10">
            <div className='title flex items-center gap-6 justify-center'>
                <MdSchool  className='text-6xl'/>
                <h1 className='text-4xl'>My <span className='text-cyan-500'>Education</span></h1>
            </div>

            <div className='mt-6 p-10'>
            <div className="grid grid-cols-9">
                <div className="col-span-4 bg-gray-800 px-4 py-4 rounded">
                    <p className='md:text-xl '>Btech with Electronics and Communication</p>
                    <a href='http://www.iiitmanipur.ac.in/' className='text-gray-400'>Indian Institute of Information Technology, Manipur</a>
                    <p>(2020 - Present)</p>
                    <p>Current CPI: 7.79</p>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='relative bg-cyan-700 h-full col-span-1 w-1 flex'>
                    </div>
                    <div className='absolute w-6 h-6 rounded-3xl flex flex-col justify-center items-center bg-cyan-700'>1</div>   
                </div>
                <div className="col-span-4"></div>

            </div>
                <div className="grid grid-cols-9">
                    <div className='col-span-4'></div>
                        <div className='flex justify-center items-center'>
                            <div className='relative bg-cyan-700 h-full col-span-1 w-1 flex'>
                            </div>
                            <div className='absolute w-6 h-6 rounded-3xl flex flex-col justify-center items-center bg-cyan-700'>2</div>
                        </div>
                    
                        <div className="col-span-4 bg-gray-800 px-4 py-4 rounded">
                            <p className='md:text-xl '>Seconday Education with PCMB</p>
                            <a href='https://chandaof.kvs.ac.in/' className='text-gray-400'>Kendriya Vidyalaya OF Chandrapur</a>
                            <p>(2017 - 2019)</p>
                            <p>Pecentage: 75%</p>
                        </div>

                </div>
                <div className="grid grid-cols-9">
                    <div className="col-span-4 bg-gray-800 px-4 py-4 rounded">
                        <p className='md:text-xl '>High School with CBSE</p>
                        <a href='https://narayanavidyalayam.org/narayana-vidyalayam-chandrapur/' className='text-gray-400'>Narayana Vidyalayam Chandrapur</a>
                        <p>(2016 - 2017)</p>
                        <p>CGPA: 9.6</p>
                    </div>
                    <div className='flex justify-center items-center'>
                            <div className='relative bg-cyan-700 h-full col-span-1 w-1 flex'>
                            </div>
                            <div className='absolute w-6 h-6 rounded-3xl flex flex-col justify-center items-center bg-cyan-700'>3</div>
                        </div>
                        <div className="col-span-4"></div>
                </div>
            </div>
           
        </div>
       



    </section>
    
    </>
  )
}

export default Education
