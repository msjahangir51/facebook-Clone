import React from 'react'
import ProfileDetails from "../../../public/AllJSON/ProfileDetails.json";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

function PostSection() {
  return (
    <>
    {
        ProfileDetails.map((item)=>{
            const Post = item.POST;
            const FullName = item.FullName;
            const {IMGORVIDEOORText,Like,LikeLength,PostID,PostTitle,profile} = Post[0];
            return(
                <div key={PostID}>
                    <div className='bg-white w-full h-auto my-10 pt-7 rounded-md'>
                        <div className='flex items-center px-5 '>
                            <div className='w-12 h-12 rounded-full overflow-hidden'>
                                <img src={profile} className='w-full h-full object-cover'/>
                            </div>
                            <div>
                                <h1 className='ml-3 text-2xl'>{FullName}</h1>
                            </div>
                        </div>
                       <div>
                            <p className='px-3 text-xl my-3'>{PostTitle}</p>
                            <img src={IMGORVIDEOORText} className='w-full h-full '/>
                        </div> 

                        {/* Like comment share  */}
                        <div className='flex items-center justify-evenly py-6'>
                            <div className='w-36 hover:bg-gray-200 py-2 cursor-pointer rounded flex items-center justify-center' onClick={(e)=>{
                                e.target.classList.add("text-blue-600")
                            }}>
                                    <AiOutlineLike size={24} className={`mr-3 select-none`}/>
                                    <p className='text-xl'>Like</p>
                            </div>
                            <div className='w-36 hover:bg-gray-200 py-2 cursor-pointer rounded flex items-center justify-center'>
                                <FaRegComment size={24} className='mr-3'/>
                                <p className='text-xl'>Comment</p>
                            </div>
                            <div className='w-36 hover:bg-gray-200 py-2 cursor-pointer rounded flex items-center justify-center'>
                                <FaShare size={24} className='mr-3'/>
                                <p className='text-xl'>Share</p>
                            </div>
                        </div>
                        {/*end of Like comment share  */}
                    </div>
                </div>
            )

        })
    }
    </>
  )
}

export default PostSection