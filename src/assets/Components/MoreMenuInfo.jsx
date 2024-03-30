import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import profile from "../../../public/Images/ownProfile.png"
import { Link } from 'react-router-dom';
import NavCard from "../../../public/AllJSON/NavCard.json";

function MoreMenuInfo(props) {
    
  return (
    <div className='w-full min-h-screen max-h-fit bg-gray-200 absolute top-0 left-0 right-0 bottom-0'>
        {/* start of nav top */}
        <div className='flex items-center justify-between px-4 py-3'>
            <div className='flex items-center'>
                <button onClick={()=> props.alert(false)}><BiArrowBack className='text-[1.5rem]'/></button>
                <h1 className='ml-3 text-[1.7rem] text-blue-500 font-bold'>facebook</h1>
            </div>
            <div>
                <AiOutlineSearch className='text-[1.5rem]'/>
            </div>
        </div>
        {/* end of nav top */}

        {/* start of account  */}
       <Link to="/profile">
       <div className='w-[96%] mx-auto h-[4rem] flex py-2 px-3 border-b-2 rounded-md bg-white'>
            <img src={profile} className='w-[3rem] h-full rounded-full'/>
            <div className='ml-4'>
                <h1 className='text-xl '>John doe</h1>
                <p>View Your Profile</p>
            </div>
        </div>
       </Link>
        {/* end of account  */}

        <div className='flex flex-wrap items-center justify-evenly'>
            {
                NavCard.map(item=>{
                    const {id,Name,image} = item;

                    return(
                        <div key={id} className='max-w-[8rem] basis-[50%] bg-white m-2 px-3 py-2 rounded-sm '>
                            <img src={image} className='w-9'/>
                            <p>{Name}</p>
                        </div>
                    )
                })
            }
            <div className="NavMoreCard">
                
            </div>
        </div>
    </div>
  )
}

export default MoreMenuInfo