import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[#F5F5F5] p-2 rounded-lg'>
      <div>
        <img src='/banner.png' className='w-full h-[150px] rounded-xl' />
      </div>

      <div className='flex justify-between items-center p-2'>
        <div className='flex space-x-2 items-center'>
          <Image src='/cat.webp' alt='' width={70} height={70} className='rounded-[12px]' />
          <div className=''>
            <p className='text-[17px] text-[#3E3232]'>James</p>
          </div>
        </div>
        <div>
          <button className='bg-[#F81539BF] w-[100px] p-1 text-white rounded-lg'>+ Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
