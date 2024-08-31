import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import akyDeva from "../assets/images/akyDeva.png";
  import golokaIT from "../assets/images/goloka_it.png";
  import UOM from "../assets/images/uom.png";


import arrow from "../assets/icons/arrow.svg"
  
  import "react-vertical-timeline-component/style.min.css";
  
  import {  FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiLeetcode,SiCodingninjas,SiGeeksforgeeks} from "react-icons/si";

  const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Akydeva",
        icon: akyDeva,
        iconBg: "#fff",
        date: "February 2024 - May 2024",
        points: [
            "Developed an exam preparation and courses website with MERN Stack and API integration with Redux, completely from scratch.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Cloud Engineer Intern",
        company_name: "Goloka IT",
        icon: golokaIT,
        iconBg: "#111",
        date: "Dec 2023 - Feb 2024",
        points: [
            "Collaborated with senior developers to learn AWS and its integration with websites.",
            "Assisted in the relocation of servers to AWS, enhancing security feasibility and storage capacity.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer Intern",
        company_name: "Urban Office Mart",
        icon: UOM,
        iconBg: "#fff",
        date: "May 2023 - Nov 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Coordinated with a 4-member team to implement CRUD operations on the home website using MERN Stack, improving website UI and network speed.",
            "Implemented lossless data compression algorithms on images and videos, increasing fetch and upload speeds."
        ],
    },
];

const Contact = [
    {icon:FaInstagram,link:"https://www.instagram.com/abhiyadav_412?igsh=OGQ5ZDc2ODk2ZA=="},
    {icon:FaLinkedin,link:"https://www.linkedin.com/in/abhay-yadav-sd"},
    {icon:FaGithub,link:"https://github.com/abhi-412"},
    {icon:SiCodingninjas,link:"https://www.naukri.com/code360/profile/abhi_yadav412"},
    {icon:SiGeeksforgeeks,link:"https://www.geeksforgeeks.org/user/abhay412/"},
    {icon:SiLeetcode,link:"https://leetcode.com/u/abhi_yadav412/"},
]




  const About = () => {
    return (
      <section className='max-w-5xl text-gray-300 mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
        <h1 className='sm:text-5xl text-3xl  font-semibold sm:leading-snug'>
          Hello, I'm{" "}
          <span className='bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow'>
            {" "}
            Abhay
          </span>{" "}
          👋
        </h1>
  
        <div className='mt-5 flex md:text-xl text-sm flex-col gap-3 text-slate-300'>
          <p>
            I am a Full Stack Developer Fresher, specializing in technical
            education through hands-on learning and building applications.
          </p>

          <div className=' flex items-center gap-2 text-blue-400 '>
                <Link
                  to={'/skills'}
                  className='font-semibold md:text-lg '
                >
                  Get Familiar with My Skills
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
        </div>

        <div className="py-10">
              <h3 className='font-semibold sm:text-3xl text-xl relative'>Connect with Me</h3>
              <div className='my-4 flex flex-col gap-3 md:text-xl text-sm  text-slate-300'>
                    <p>
                    Get to know me as a person and as a professional through my social media handles. Also Check out my coding profiles.
                    </p>
                </div>

                    <div className='flex flex-row justify-start my-3 items-center md:gap-10 gap-7'>
                    {Contact.map((social,i)=>{
                        return <Link key={i} target="_blank" to={social.link}><social.icon
                        className='md:text-3xl text-lg text-gray-400 hover:text-white hover:scale-105 cursor-pointer'
                        />
                        </Link>
                    })}
                </div>
              </div>
  
        <div className='py-10'>
          <h3 className='font-semibold sm:text-3xl text-xl relative '>Work Experience.</h3>
          <div className='mt-5 flex flex-col gap-3 md:text-xl text-sm  text-slate-300'>
            <p>
              I've worked with all sorts of companies, leveling up my skills and
              teaming up with smart people. Here's the rundown:
            </p>
          </div>
  
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[70%] h-[70%] object-cover'
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                    backgroundColor:"rgb(8 8 8)",
                  }}
                >
                  <div>
                    <h3 className=' md:text-2xl text-xl   font-semibold'>
                      {experience.title}
                    </h3>
                    <p
                      className=' font-medium text-lg'
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>
  
                  <ul className='my-5 list-disc  ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className='text-slate-300 font-normal pl-1 md:text-base text-sm'
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
  
        <hr className='border-slate-200' />
  
      </section>
    );
  };
  
  export default About;