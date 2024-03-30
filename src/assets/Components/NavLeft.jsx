import React from 'react'
import NavCard from "../../../public/AllJSON/NavCard.json"
function NavLeft() {
  const width = screen.availWidth;
  return (
    <div className={`h-screen pb-12 w-72 fixed left-0 hover:overflow-scroll bg-gray-800/5`}>
      <div className='w-full'>
        {
          NavCard.map(item =>{
            const {id,Name,image} = item;
            return(
              <div key={id} className='h-9 flex items-center my-5 px-6  hover:bg-gray-200 cursor-pointer'>
                <img src={image} className='h-full p-2'/>
                <h1 className='text-[1.2rem] ml-3'>{Name}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default NavLeft