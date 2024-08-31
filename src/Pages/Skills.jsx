// Skills.js
import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import {FaHtml5,FaAws,FaReact,FaPython,FaGithub,FaNodeJs,  FaArrowDown} from 'react-icons/fa'
import { DiCss3,DiMongodb } from "react-icons/di";
import { SiTailwindcss,SiMysql,SiCplusplus } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import "swiper/css";
import "swiper/css/pagination";
import { HiLightBulb } from "react-icons/hi";
import { TbBulbOff } from "react-icons/tb";
import { GrDeploy } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import Projects from './Projects';
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";

const  details=[
    
    {skill:"React JS",value:80,icon:<FaReact />},
    {skill:"TailwindCss",value:60,icon:<SiTailwindcss />},
    {skill:"Node JS",value:80,icon:<FaNodeJs />},
    {skill:"Express JS",value:80,icon:<SiExpress />},
    {skill:"MongoDB",value:60,icon:<DiMongodb />},
    {skill:"Redux",value:60,icon:<TbBrandRedux />},
    {skill:"MySql",value:90,icon:<SiMysql />},
    {skill:"Next JS",value:70,icon:<TbBrandNextjs />},
    {skill:"Typescript",value:70,icon:<SiTypescript />},
];

const details2=[
  {skill:"HTML5",value:80,icon:<FaHtml5 />},
    {skill:"CSS3",value:90,icon:<DiCss3 />},
    {skill:"Javascript",value:80,icon:<IoLogoJavascript />},
    {skill:"C++",value:80,icon:<SiCplusplus />},
    {skill:"Python",value:50,icon:<FaPython />},
    {skill:"SCSS",value:50,icon:<BsFiletypeScss />},
    {skill:"Github",value:50,icon:<FaGithub />},
    {skill:"AWS",value:50,icon:<FaAws />},
    {skill:"Deployment",value:50,icon:<GrDeploy />}
]


// Component for the light bulb effect
const LightBulb = ({ on }) => {
  const bulbRef = useRef();
  const baseRef = useRef();

  useFrame(() => {
    if (bulbRef.current) {
      bulbRef.current.rotation.y += 0.01;
    }
  });

  useEffect(() => {
    if (on) {
      gsap.to(bulbRef.current.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 1 });
      gsap.to(baseRef.current.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 1 });
    } else {
      gsap.to(bulbRef.current.scale, { x: 0.2, y: 0.2, z: 0.2, duration: 1 });
      gsap.to(baseRef.current.scale, { x: 0.5, y: 0.1, z: 0.5, duration: 1 });
    }
  }, [on]);

  return (
    <>
      <mesh ref={bulbRef} position={[0, 1.2, 0]} scale={[0.2, 0.2, 0.2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={on ? 1 : 0.1} />
      </mesh>
      <mesh ref={baseRef} position={[0, 0.1, 0]} scale={[0.5, 0.1, 0.5]}>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </>
  );
};

// Component for the skills
const Skills = () => {
  const [lightOn, setLightOn] = useState(false);
  

  const toggleLight = () => {
    setLightOn(!lightOn);
    if (!lightOn) {
      gsap.fromTo('.skill', { opacity: 0, z: -50 }, { opacity: 1, z: 0, stagger: 0.3, duration: 3});
    } else {
      gsap.to('.skill', { opacity: 0, z: -50, duration:2 });
    }
  };

  return (
   <section className='w-full h-full flex flex-col'>

     <section className="w-full scroll-p-0 relative h-[100vh] md:h-[200vh] lg:h-[100vh]  flex flex-col items-center md:my-6  justify-center bg-black">
      <Canvas className={`flex items-center justify-center ${lightOn ? "w-full h-full" : ""}`}>
        <directionalLight intensity={1} />
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 5, 5]} angle={0.15} penumbra={1} intensity={lightOn ? 1 : 0} />
        <LightBulb on={lightOn} />
      </Canvas>

      <button
        onClick={toggleLight}
        className="absolute w-20 flex items-center justify-center -bottom-10 mb-2 p-2 bg-gray-800 text-white text-3xl rounded-lg shadow-lg"
      >
        {lightOn ? <TbBulbOff /> :  <HiLightBulb />}
      </button>

      <div className='absolute lg:top-48 xl:-top-40 bottom-12 md:bottom-10 w-full flex lg:flex-row flex-col p-2  items-center justify-between '>
      
          <div className="lg:w-2/5 w-full skill left-0  top-28 flex lg:p-5 p-4 flex-col justify-center">

          <div className={`  flex lg:flex-wrap flex-nowrap lg:overflow-hidden overflow-scroll hide-scrollbar  lg:gap-9 gap-5 lg:p-8 p-1 ${lightOn ? 'opacity-100' : 'opacity-0'}`}>
              {details.map((item,i)=>{
                return <div key={i} className={`flex flex-col shadow-yellow-100 hover:scale-105  md:min-w-[120px] min-w-[100px] md:max-w-[130px] max-w-[120px] shadow-lg cursor-pointer  rounded-full gap-2 md:p-6 p-5  ${lightOn ? ' text-gray-100' : ' text-black'}`}>
                {<div className='flex flex-col justify-center gap-2 hover:text-yellow-200 items-center'>
                    <p className='text-2xl  md:text-3xl lg:text-4xl'>{item.icon}</p>
                    <div className='flex justify-center'>
                      <p className='md:text-base text-xs'>{item.skill}</p>
                  </div>
                </div>
                }
            
              </div>
              })}
          </div>
          </div>

          <div className={`flex flex-col items-center gap-1 animate-bounce ${lightOn ? "hidden" : ""}`}>
          <p className={`text-xl text-center text-white `}>Turn on the lights.</p>
            <FaArrowDown className='text-lg text-white' />
          </div>

          <div className="lg:w-2/5 w-full skill left-0 lg:ml-5 top-28 flex lg:p-5 p-2 flex-col justify-center">

              <div className={`  flex lg:flex-wrap flex-nowrap lg:overflow-hidden overflow-scroll hide-scrollbar  lg:gap-9 gap-5 lg:p-8 p-1 ${lightOn ? 'opacity-100' : 'opacity-0'}`}>
              {details2.map((item,i)=>{
              return <div key={i} className={`flex flex-col shadow-yellow-100 transition transform delay-100 hover:scale-105  md:min-w-[120px] min-w-[100px] md:max-w-[130px] max-w-[120px] shadow-lg cursor-pointer rounded-full gap-2 md:p-6 p-5  ${lightOn ? ' text-gray-100' : ' text-black'}`}>
                      {<div className='flex flex-col justify-center hover:text-yellow-200 gap-2 items-center'>
                          <p className='text-2xl  md:text-3xl  lg:text-4xl'>{item.icon}</p>
                          <div className='flex justify-center'>
                            <p className='md:text-base text-xs'>{item.skill}</p>
                        </div>
                      </div>
                      }
                  
                    </div>
                    })}
              </div>
          </div>

      </div>



    </section>

    <Projects />
   </section>
  );
};

export default Skills;
