import React from 'react'
import Image from 'next/image'

const Category = ({ name, image }) => {
  return (
    <div>
      <div className='flex space-x-3 my-2'>
        <div className='relative w-40 h-12 ring-blue-400  rounded-2xl overflow-hidden'>
          <img src={image} alt='' className='opacity-90 w-full h-full object-cover' />
          <div className='absolute top-1/2 left-0 right-0 text-center transform -translate-y-1/2'>
            <p className='text-white'>{name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
