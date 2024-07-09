import React from 'react'
import Image from 'next/image'
import { StorageImage } from '@aws-amplify/ui-react-storage'

const Category = ({ title, image }) => {
  // console.log('name>>>>>', title)
  return (
    <div>
      <div className='flex space-x-3 my-2 cursor-pointer'>
        <div className='relative w-40 h-12 ring-blue-400  rounded-2xl overflow-hidden'>
          <Image
            src='/images/01.png'
            alt=''
            width={100}
            height={100}
            className='opacity-90 w-full h-full object-cover'
          />
          {/* <StorageImage imgKey={image?.img || '/children.jpg'} className='opacity-90 w-full h-full object-cover' /> */}
          <div className='absolute top-1/2 left-0 right-0 text-center transform -translate-y-1/2'>
            <p className='text-white'>{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
