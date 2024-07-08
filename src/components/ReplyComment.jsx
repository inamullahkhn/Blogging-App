import React from 'react'
import Image from 'next/image'

const ReplyComment = () => {
  return (
    <div>
      <div className='w-[872px] bg-[#FFFFFF] shadow-md p-4 relative mt-[-20px] rounded-xl ml-20 my-2 mb-20'>
        <div className='flex justify-between items-center py-2'>
          <div className='flex items-center space-x-1'>
            <Image src='/popular/1.png' alt='' width={60} height={60} className='rounded-md' />
            <div className=''>
              <p className='text-[18px] text-[#3E3232]'>James</p>
              <span className='text-[14px] text-[#3E3232]'>August 18, 2022</span>
            </div>
          </div>
        </div>
        <div>
          <p className='text-[14px] text-black tracking-normal text-sm'>
            When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities
            at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks,
            paddleboards, or the low-key pedal boats.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReplyComment
