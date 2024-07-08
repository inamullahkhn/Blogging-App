import React from 'react'
import { CiInstagram, CiTwitter } from 'react-icons/ci'

const Footer = () => {
  return (
    <div className='bg-[#F5F5F5]'>
      <div className='mx-[204px]'>
        <div className='bg-[#F5F5F5]'>
          <div className='flex justify-between items-center px-4 py-8'>
            <div className='w-[400px] flex flex-col space-y-2'>
              <p className='text-[#3E3232] text-[20px] font-medium'>mega news</p>
              <p className=' text-[#3E3232] text-xs'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
                rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis.
                Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin
              </p>
              <p className='text-[#3E3232] text-[20px] font-medium'>Newsletters</p>
              <div className='pt-2 relative text-gray-600'>
                <div className='relative'>
                  <input
                    className='border-2 border-gray-300 bg-white h-10 px-4 pr-10 rounded-lg text-sm focus:outline-none w-full'
                    type='search'
                    name='search'
                    placeholder='write your email...'
                  />
                  <button type='submit' className='absolute right-0 top-0 mt-2 mr-2'>
                    <img src='/svgs/icon.png' className='h-5 w-6' />
                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-col space-y-2'>
              <p className='text-[#3E3232] text-[20px] font-medium'>Categories</p>
              <div className=' text-[#3E3232] text-xs flex flex-col space-y-1'>
                <p>culture</p>
                <p>Fashion</p>
                <p>Featured</p>
                <p>Food</p>
                <p>Healthy Living</p>
                <p>Technology</p>
              </div>
              <p className='text-[#3E3232] text-[20px] font-medium'>Social Networks</p>
              <div className='flex space-x-1'>
                <button className='w-[95px] px-3 rounded-3xl text-xs text-center text-white py-2 flex items-center space-x-1 bg-gradient-to-r from-[#f76e5c] to-[#F45C9F] '>
                  <CiInstagram className='text-sm' />
                  Instagram
                </button>
                <button className='px-3 rounded-md text-xs text-center text-white py-2 space-x-1 bg-gradient-to-r from-[#2CA5E0] to-[#67C9F5] '>
                  <CiTwitter className='text-sm' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
