import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaUserEdit } from 'react-icons/fa'

const SaveBanner = () => {
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
        <div className='flex space-x-4 text-sm text-black cursor-pointer underline underline-offset-1'>
          <Link href=''>
            <p>Blogs</p>
          </Link>

          <Link href=''>
            <p>Create Posts</p>
          </Link>
        </div>
        <div>
          <button className='bg-[#F81539BF] w-[100px] p-2 text-white rounded-lg flex space-x-1 items-center'>
            <FaUserEdit className='text-base' /> <p className='text-xs'>Edit Profile</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SaveBanner
