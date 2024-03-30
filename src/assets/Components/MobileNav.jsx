import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { RiMessengerFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import MoreMenuInfo from './MoreMenuInfo';


function MobileNav() {
  const [NavMore,SetNavMore] = useState(false);
  function navCancle(p){
      SetNavMore(p)
  }
  // history.back()
  return (
    <div className='flex flex-col w-full p-3 shadow-md shadow-gray-700/25'>

      {NavMore ? <MoreMenuInfo alert={navCancle}/> : null} 
    <div className='flex items-center justify-between allsvg'>
      <h1 className="text-blue-500 text-[2rem] font-bold">facebook</h1>
      <div className='flex'>
      <AiOutlineSearch className='mr-3'/>
      <AiOutlineMenu onClick={()=> SetNavMore(!NavMore)}/>
      </div>
    </div>
    <div className="Nav-btn-1 flex py-4 items-center justify-between">
      <NavLink to="/">
        <AiFillHome/>
      </NavLink>
      <NavLink to="/Friend-m">
        <FaUserFriends/>
      </NavLink>
      <NavLink to="/Messenger-m">
        <RiMessengerFill/>
      </NavLink>
      <NavLink to="/Notifications-m">
        <IoMdNotifications/>
      </NavLink>
      <NavLink to="/Video-m">
        <MdOutlineVideoLibrary/>
      </NavLink>
    </div>


    </div>
  )
}

export default MobileNav