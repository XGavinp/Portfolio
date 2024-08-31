import {React,useState} from 'react'
import { Link } from 'react-router-dom';


const NavLinks = [{name: "About" , to:"/about"},{name:"Skills", to:"/skills"},{name: "Contact" , to:"/contact"}];

const Header = () => {

  return (
    <nav className="bg-black fixed top-0 left-0 z-[999] w-[100vw]">
      <div className="px-5  sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center p-0 w-full">
            <Link to='/'>
              <h2 className='md:text-5xl text-2xl gap-3 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent drop-shadow font-bold '>AP</h2>
            </Link>
            <div className=" w-full">
              <ul className="flex justify-end space-x-4 md:space-x-6">
                {NavLinks.map((link,i)=>{
                    return  <li key={i} className="text-gray-300 cursor-pointer  hover:text-cyan-300 py-2 rounded-md text-lg lg:text-2xl font-semibold"> <Link to={link.to} >{link.name}</Link></li>

                })}
                
              </ul>
            </div>
          </div>
          

        </div>
      </div>

    </nav>

  )
}

export default Header
