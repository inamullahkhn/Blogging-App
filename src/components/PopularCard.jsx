import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiBookmark } from 'react-icons/ci'
import { StorageImage } from '@aws-amplify/ui-react-storage'

const PopularCard = ({ title, image, description, user, id }) => {
  return (
    <div className='bg-white p-3'>
      <div className='card card-compact w-96 shadow-xl bg-slate-100 h-[389px]'>
        <Link href={`/posts/${id}`}>
          <figure>
            <StorageImage imgKey={image || '/car.png'} />
          </figure>
          <div className='card-body '>
            <h2 className='text-base font-medium text-[#3E3232]'>{title}</h2>
            <p className='text-[#3E3232]'>{(description || '').slice(0, 50)}</p>
          </div>
        </Link>
        <div className=' bg-slate-200 p-2 rounded-xl'>
          <div className='flex justify-between items-center mx-2'>
            <div className='flex space-x-1'>
              {/* <Image src={user.user_pic} alt='' width={44} height={44} className='rounded-md' /> */}
              <StorageImage imgKey={user?.user_pic || '/car.png'} width={44} height={44} className='rounded-md' />
              <div className=''>
                <p className='text-[14px] text-[#3E3232]'>{user?.first_name}</p>
                <span className='text-[12px] text-[#3E3232]'>{user?.createdAt}</span>
              </div>
            </div>
            <div>
              <CiBookmark className='text-2xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCard
