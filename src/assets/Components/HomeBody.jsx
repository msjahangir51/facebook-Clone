import React from 'react'
import NavLeft from './NavLeft'
import StorySection from './StorySection'
import UploadPost from './UploadPost'
import PostSection from './PostSection'

function HomeBody() {
  return (
    <div >
        <NavLeft />
        {/* home center */}
        <div className={`absolute top-20 left-[20rem] w-[45%] bg-gray-200 py-3 px-5 overflow-y-scroll`}>
            <StorySection/>
            <UploadPost/>
            <PostSection/>
        </div>
        {/* end home center  */}

        {/* Home Right  */}
        <div className='w-[26%] absolute right-[2rem] top-20 bg-fuchsia-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nisi voluptatem accusamus corporis distinctio quos aspernatur commodi doloremque eos? Necessitatibus blanditiis rem temporibus nisi facere hic quisquam iure dignissimos rerum.
        </div>
        {/* end of Home Right  */}
    </div>
  )
}

export default HomeBody