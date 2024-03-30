import React from 'react'
import profile from "../../../public/Images/ownProfile.png";
import { IoImageSharp } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { SiFacebooklive } from "react-icons/si";
function UploadPost() {
  return (
    <div className='mt-14 rounded-md w-full h-44 bg-white flex flex-col'>
      <div className='flex px-5 py-4 items-center justify-between'>
        <img src={profile} className='w-16 h-16 rounded-full m-3' />
        <input type="text" placeholder="What's on your mind, Jahangir Alom" className='w-full h-10 rounded-full outline-none bg-gray-200 px-6 py-2 text-xl'/>
      </div>
      <div className='flex items-center justify-evenly'>
        <div className='flex items-center hover:bg-gray-300 cursor-pointer rounded-md h-10 px-3'>
          <SiFacebooklive className='text-[1.7rem] mr-3 cur text-red-500 ]'/>
          <h1>Live Video</h1>
        </div>
        <div className='flex items-center hover:bg-gray-300 cursor-pointer rounded-md h-10 px-3'>
          <IoImageSharp className='text-[1.7rem] mr-3 cur text-green-500 ]'/>
          <h1>Photo/Video</h1>
        </div>
        <div className='flex items-center hover:bg-gray-300 cursor-pointer rounded-md h-10 px-3'>
          <MdEmojiEmotions className='text-[1.7rem] mr-3 cur text-yellow-600 ]'/>
          <h1>Felling/activity</h1>
        </div>
      </div>
    </div>
  )
}

export default UploadPost