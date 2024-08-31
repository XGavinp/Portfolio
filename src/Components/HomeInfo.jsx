import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import resume from "../assets/Abhay_Full_Stack_Resume.pdf"
import { IoCall, IoMailSharp } from 'react-icons/io5';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HomeInfo = ({ currentStage }) => {

  useGSAP(() => {
    // GSAP Animations for text

        gsap.fromTo('.title', 
            { x: 100, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 0.5 }
        );
        gsap.fromTo('.button', 
            { x: -100, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 0.5 }
        );

}, [currentStage]);



  if (currentStage === 5) {
    return (
      <div className="title justify-center items-center flex flex-col xl:gap-6 gap-2 md:px-3">
        <h2 className='xl:text-5xl md:3xl text-2xl md:font-bold font-semibold text-white'>Welcome to my Portfolio</h2>
        <p className='xl:text-2xl lg:text-xl md:text-lg text-base sm:font-semibold font-light text-white'>Grab and Rotate the earth to navigate.</p>
               
      </div>
    );
  }

  if (currentStage === 1) {
    return (
      <div className="flex flex-col justify-center xl:gap-10 lg:gap-6 md:gap-4 gap-3">
        <div className="title justify-cener flex flex-col xl:gap-6 lg:gap-4 md:gap-3 gap-1 ">
          <h1 className='xl:text-6xl lg:text:5xl md:text-4xl text-xl  font-bold text-cyan-600 flex'>Hello!</h1>
          <h2 className='xl:text-5xl lg:text:4xl md:text-3xl text-2xl font-bold text-white flex'>I'm Abhay Pratap</h2>
          <h3 className='xl:text-3xl lg:text:2xl md:text-xl text-base font-bold text-gray-300 flex'>MERN Stack and C++ Developer</h3>
        </div>
        <div className='flex items-center justify-start gap-4 '>
              <a href='tel:+918788091946' className='flex button text-nowrap md:justify-center justify-start'>
                <button className='bg-slate-900 p-2 md:p-3 text-nowrap text-slate-200 md:text-2xl text-base font-bold rounded-full hover:text-white hover:bg-cyan-950'>
                  <IoCall />
                </button>
              </a>
              <a href='mailto:abhaypratap41234@gmail.com' className='flex button text-nowrap md:justify-center justify-start'>
                <button className='bg-slate-900 p-2 md:p-3 text-nowrap text-slate-200 md:text-2xl text-base font-bold rounded-full hover:text-white hover:bg-cyan-950'>
                  <IoMailSharp />
                </button>
              </a>

              <a href={resume} target='_blank' rel='noreferrer' className='flex button text-nowrap md:justify-center justify-start'>
                <button className='bg-slate-900 md:p-3  text-nowrap text-slate-200 md:text-lg text-xs font-semibold p-2 rounded-full hover:text-white hover:bg-cyan-950'>
                CV
                </button>
              </a>

        </div>
      </div>    );
  }

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <h2 >About Me</h2>
        <p>
         Have a look at my socials and previous experiences. <br /> Get to know me as a person and as a professional.
        </p>
        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <FaArrowRight className="" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <h2>Projects</h2>
        <p>
        Built up multiple skills, and projects using them. <br /> Curious about the impact?
        </p>
        <Link to='/skills' className='neo-brutalism-white neo-btn'>
          My portfolio
          <FaArrowRight className="" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <h2>Contact Me</h2>
        <p>
            Need a project done or looking for a developer? <br /> I'm just a few keystrokes away.
        </p>
        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <FaArrowRight className="" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
