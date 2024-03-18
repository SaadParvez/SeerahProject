import {useState} from 'react'
import {close, logo, menu} from '../assets';
import {navLinks} from '../constants';
import { Link } from "react-router-dom"

const NavBar = () => {
  const [toggle, settoggle] = useState(false);
  
  
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="seerah" className="h-[50px]"/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <CustomLink to ="/Home">Home</CustomLink>
        <CustomLink to ="/Events">Events</CustomLink>
        <CustomLink to ="/ChatBot">ChatBot</CustomLink>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close: menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={()=> settoggle((prev) => !prev)}
        />

        <div className={`${toggle? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-40 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} > 
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index)=>(
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index===navLinks.length-1 ? 'mr-0' :'mb-4'} text-white`}
              >
              <a href={`#${nav.id}`}>{nav.title}</a> 
              </li>
          )
          )}
        </ul>
          


          
         </div>
      </div>
      
    </nav>
  )
}

export default NavBar

function CustomLink({to, children, ...props}){
  const path = window.location.pathname
  
  return (
    <li className={`${path ===to ? "active": ""}font-poppins font-normal cursor-pointer text-[16px]  mr-10 text-white`}>
      <Link to = {to}>{children}</Link>
    </li>
  )
}