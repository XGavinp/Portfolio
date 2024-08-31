import {React} from 'react'
import img1 from '../assets/p-1.png'
import img2 from '../assets/p-2.png'
import img3 from '../assets/p-3.png'
import img4 from '../assets/p-4.png'
import img5 from '../assets/p-5.png'
import arrow from "../assets/icons/arrow.svg"
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Link } from 'react-router-dom';

SwiperCore.use([Pagination]);



const work = [
{img:img1,name:"Portfolio",desc:"A 3D catalogue of my Skills and Projects for Recruiters and Collegues to see. Made using ReactJS, TailwindCSS and ThreeJS, fully responsive.",github:"https://github.com/abhi-412/portfolio",live:"https://portfolio-two-ruddy-67.vercel.app/"},
{img:img3,name:"Shopme",desc:"A MERN Stack shopping app. Has every feature of a modern Shopping Application. It's my best showcase of work.",github:"https://github.com/abhi-412/Shopme",live:"https://shopme-ebon.vercel.app/"},
{img:img2,name:"MyShare",desc:"A ReactJS Image Gallary for you to manage your images and view what others are into. Boasts CRUD operations and using Sanity backend and auth with google Oauth.",github:"https://github.com/abhi-412/myShare",live:"https://myshare-abhi.netlify.app/"},
{img:img4,name:"ChatterBox",desc:"Simple React UI with Firebase storage and authentication for a chatting application. A simple self practice project",github:"https://github.com/abhi-412/chat-app",live:"https://abhi-412-chatapp.netlify.app/"},
{img:img5,name:"YelpCamp",desc:"A traditional full Stack web app Yelp clone for Campgrounds. Features like CRUD, Auth Session and Cookies etc. Uses Vanilla JS Bootstrap and MEN Stack for Backend.",github:"https://github.com/abhi-412/Shopme",live:"shopme-abhi.netlify.app"}
,]

const Projects = () => {
  return (
    <section className='max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
      <h1 className='sm:text-5xl text-3xl text-white font-semibold sm:leading-snug '>
        My{" "}
        <span className='bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-300 mt-2 text-lg leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {work.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-20 h-12'>
              <div className={`btn-back rounded-xl `} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.img}
                  alt='threads'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl text-white font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-lg text-slate-400'>{project.desc}</p>
              <div className='mt-5 flex items-center gap-2'>
                <Link
                  to={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

          <section className='w-full text-gray-200 flex items-center md:flex-row flex-col sm:mt-16 mt-8 gap-7'>
          <p className='text-black-500 font-extrabold flex-1 text-3xl max-md:text-center'>
            Have a project in mind? <br className='sm:block hidden' />
            Let’s build something together!
          </p>
          <Link to='/contact' className='py-3 px-6 bg-white rounded-lg text-blue-500 text-center font-semibold  right-0 left-0 flex justify-center items-center gap-3'>
            Contact
          </Link>
        </section>

    </section>
  )
}

export default Projects
