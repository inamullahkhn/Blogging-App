import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { CiBookmark } from 'react-icons/ci'

const Navbar = () => {
  return (
    <div>
      <nav className='px-4 py-5 bg-white'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <div className='flex space-x-5 items-center'>
              <p className='text-[#FC4308] font-medium text-xl'>MEGA.news</p>
              <div className='flex space-x-4 items-center text-xs text-black'>
                {/* <span></span> */}
                <div className='dropdown dropdown-bottom'>
                  <div tabIndex={0} role='' className='flex items-center space-x-1'>
                    Categories <IoIosArrowDown />
                  </div>
                  <ul
                    tabIndex={0}
                    className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow bg-white'>
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
                <div className='dropdown dropdown-bottom'>
                  <div tabIndex={0} role='' className='flex items-center space-x-1'>
                    Pages <IoIosArrowDown />
                  </div>
                  <ul tabIndex={0} className='dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-white'>
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
                <span>Contact Us</span>
                <span>About Us</span>
              </div>
            </div>
          </div>
          {/* left side */}
          <div className='flex space-x-2 items-center w-[872px]'>
            <div className='pt-2 relative mx-auto text-gray-600'>
              <input
                className='border-2 border-gray-300 bg-white h-10 px-4 pr-16 rounded-lg text-sm focus:outline-none '
                type='search'
                name='search'
                placeholder='Search Anything'
              />
              <button type='submit' className='absolute right-0 top-0 mt-5 mr-4'>
                <svg
                  className='text-gray-600 h-4 w-4 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  version='1.1'
                  id='Capa_1'
                  x='0px'
                  y='0px'
                  viewBox='0 0 56.966 56.966'
                  style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                  xmlSpace='preserve'
                  width='512px'
                  height='512px'>
                  <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
                </svg>
              </button>
            </div>
            <div className='flex space-x-10 items-center'>
              <div className='flex space-x-1 items-center'>
                <Image src='/cat.webp' alt='' width={40} height={40} className='rounded-md' />
                <div>
                  <IoIosArrowDown width={50} />
                </div>
              </div>
              <div className='px-1 py-1 bg-slate-200 rounded-md'>
                <CiBookmark className='text-2xl' />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
