import React from 'react'
import profile from "../../../public/Images/ownProfile.png"

import { NavLink,Link } from 'react-router-dom';
// start of icons
import { FaFacebookF } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { AiFillHome ,AiOutlineInbox,AiOutlineSearch} from "react-icons/ai";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { CgGames,CgMenuGridR } from "react-icons/cg";
import { RiMessengerFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

// end of icons 
function DesktobNav() {
  return (
    <div className='w-full px-5 py-1 flex justify-between items-center bg-white shadow-md shadow-gray-500/10 fixed z-50'>
        <div className='flex items-center'>
          <div className='bg-black w-11 h-11 flex items-center mr-3 bg-blue-500 justify-center rounded-full'>
            <FaFacebookF className='text-[1.8rem] text-white'/>
          </div>
            <AiOutlineSearch className='text-[1.8rem] cursor-pointer ml-3'/>
        </div>

        <div className='flex allsvg items-center basis-full justify-center space-x-2 btn'>
            <NavLink to="/"><AiFillHome/></NavLink>
            <NavLink to="/video"><MdOutlineVideoLibrary/></NavLink>
            <NavLink to="/markketplace"><AiOutlineInbox/></NavLink>
            <NavLink to="/groups"><FaUserFriends/></NavLink>
            <NavLink to="/games"><CgGames/></NavLink>
        </div>

        <div className='flex relative allsvg space-x-4 items-center'>
          <Link to="/"><CgMenuGridR/></Link>
          <Link to="/"><RiMessengerFill/></Link>
          <Link to="/"><IoMdNotifications/></Link>
          <Link to="/" className='relative'>
            <div className='flex w-[3rem] rounded-full h-[3rem] relative'>
            <img className='w-full h-full  rounded-full object-cover background' src={profile} alt="" /> 
            <RiArrowDropDownLine className='text-[1.1rem] text-white bg-black rounded-full absolute -bottom-1 right-1'/>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default DesktobNav