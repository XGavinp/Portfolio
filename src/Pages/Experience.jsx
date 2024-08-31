import React from 'react';
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <>
      <section id='experience' className='flex w-full my-10 bg-gray-900 py-5 justify-center'>
        <div className="container flex flex-col gap-10">
          <div className='title flex items-center gap-6 justify-center'>
            <MdWork className='text-6xl' />
            <h1 className='text-4xl'>My <span className='text-cyan-500'>Experience</span></h1>
          </div>

          <div className='mt-6 p-10 flex flex-col gap-8 md:gap-4'>
            <div className="grid grid-cols-9 justify-center">
              <div className="col-span-9 md:col-span-4 bg-gray-800 px-4 py-4 rounded">
                <p className='md:text-xl font-semibold'>Full Stack Developer (Backend Specialist)</p>
                <a href='https://www.linkedin.com/company/aky-deva/' className='text-gray-400'>Aky-deva, Remote (Gurgaon, Haryana)</a>
                <p>(February 2024 - May 2024)</p>
                <ul className='list-disc pl-5'>
                  <li>Developed an exam preparation and courses website with MERN Stack and API integration with Redux, completely from scratch.</li>
                  <li>The link to the website is <a className='font-semibold text-blue-500' href="https://sarkaripaper-stage-client.vercel.app/">https://sarkaripaper-stage-client.vercel.app/</a></li>
                  <li>I had to leave the company due to exams and busy schedule.</li>
                </ul>
              </div>
              <div className='flex justify-center items-center'>
              </div>
            </div>

            <div className="grid grid-cols-9">
              <div className='md:col-span-4'></div>
              <div className='flex justify-center items-center'>
              </div>
              <div className="col-span-9 md:col-span-4 bg-gray-800 px-4 py-4 rounded">
                <p className='md:text-xl font-semibold'>Cloud Engineer Intern</p>
                <a href='https://www.linkedin.com/company/goloka-it/' className='text-gray-400'>Goloka IT, Remote (Mumbai, MH)</a>
                <p>(December 2023 - February 2024)</p>
                <ul className='list-disc pl-5'>
                  <li>Collaborated with senior developers to learn AWS and its integration with websites.</li>
                  <li>Assisted in the relocation of servers to AWS, enhancing security feasibility and storage capacity.</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-9">
              <div className="col-span-9 md:col-span-4 bg-gray-800 px-4 py-4 rounded">
                <p className='md:text-xl font-semibold'>Full Stack Developer Intern</p>
                <a href='https://www.linkedin.com/company/urban-office-mart/' className='text-gray-400'>Urban Office Mart, Hybrid (Vadodara, Gujarat)</a>
                <p>(May 2023 - November 2023)</p>
                <ul className='list-disc pl-5'>
                  <li>Coordinated with a 4-member team to implement CRUD operations on the home website using MERN Stack, improving website UI and network speed.</li>
                  <li>Implemented lossless data compression algorithms on images and videos, increasing fetch and upload speeds.</li>
                </ul>
              </div>
              <div className='flex justify-center items-center'>
              </div>
              <div className="col-span-4"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
