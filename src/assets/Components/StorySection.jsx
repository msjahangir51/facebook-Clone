import React, { useRef,useEffect, useState } from 'react'
import Story from "../../../public/AllJSON/Story.json";
import profileImg from "../../../public/Images/ownProfile.png";
import { FaPlusCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

function StorySection() {
  let swipers = useRef(null);
  let [isDown,SetDown] = useState(false);
  let startX;
  let scrollLeft ;
    const SwiperEle = swipers.current;
    console.log(isDown)
  // let  = useRef(null);
  return (

    <>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className='min-w-[10rem] h-[17rem] bg-white rounded-lg overflow-hidden storyCard cursor-pointer hover:bg-gray-300' style={{
        backgroundImage : `url(${profileImg})`,
        backgroundPosition :"center",
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover",
        borderRadius : "1rem",
        position : "relative"
        }}>
          <div className='w-full h-14 bg-white absolute bottom-0 flex items-center justify-center'>
          <div className='absolute -top-4 w-14 h-12 rounded-full flex items-center justify-center'>
          <FaPlusCircle size={30} className='text-blue-600'/>
          </div>
          </div>

      </SwiperSlide>
      {
        Story.map(item=>{
          const {id,profile,FullName,FristName,LastName,video} = item;
          return(
            <SwiperSlide key={id} className='min-w-[10rem] h-[17rem] relative' style={{
              background : `url('${video}')`,
              backgroundPosition :"center",
              backgroundRepeat : "no-repeat",
              backgroundSize : "cover",
              borderRadius : "1rem",
              }}>
                <div className='w-10 h-10 rounded-full overflow-hidden p-[0.2rem] bg-blue-700 absolute top-3 left-3'>
                  <img src={profile} alt=""  className='object-cover w-full h-full rounded-full'/>
                </div>
                <p className='absolute bottom-4 text-[1.2rem] text-white font-semibold left-3'>{FullName}</p>

            </SwiperSlide>
          )
        })
      }  
    </Swiper>
  </>
  
  )

}

export default StorySection