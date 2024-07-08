import React from 'react'
import { CiBookmark } from 'react-icons/ci'
import Image from 'next/image'
import { FaShare } from 'react-icons/fa'
import ReplyComment from './ReplyComment'

const Comment = () => {
  return (
    <div>
      <div className='relative bg-[#F5F5F5] rounded-xl mx-2 p-5'>
        <div className='flex justify-between items-center py-2'>
          <div className='flex items-center space-x-1'>
            <Image src='/popular/1.png' alt='' width={60} height={60} className='rounded-md' />
            <div className=''>
              <p className='text-[18px] text-[#3E3232]'>James</p>
              <span className='text-[14px] text-[#3E3232]'>August 18, 2022</span>
            </div>
          </div>
          <div className='flex space-x-2 items-center bg-[#e6e2e2] px-2 py-1 rounded-lg text-black'>
            <FaShare className='text-xl' />
            <p>Reply</p>
          </div>
        </div>
        <div>
          <p className='text-[14px] text-black tracking-normal text-sm'>
            When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities
            at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks,
            paddleboards, or the low-key pedal boats.
          </p>
        </div>

        {/* absolute div */}
      </div>
      <div style={{ 'margin-top': '-20' }}>
        <ReplyComment />
      </div>
    </div>
  )
}

export default Comment
