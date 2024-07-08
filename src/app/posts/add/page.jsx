import React from 'react'
import SaveBanner from '@/components/SaveBanner'
import { BsSend } from 'react-icons/bs'
import { CiFolderOn } from 'react-icons/ci'
import { FaShare } from 'react-icons/fa'
import { IoSaveOutline } from 'react-icons/io5'
import { IoEyeOutline } from 'react-icons/io5'

const AddPost = () => {
  return (
    <div>
      <SaveBanner />
      <div>
        <div className='p-5 my-16 mb-20'>
          <div className='flex space-x-3 p-2'>
            <button className='flex space-x-2 items-center bg-[#F5F5F5] px-3 py-1 rounded-lg text-black'>
              <IoSaveOutline className='text-lg' />
              <p>Send Post</p>
            </button>
            <button className='flex space-x-2 items-center px-3 py-2 text-black'>
              <IoEyeOutline className='text-lg' />
              <p>Send Video</p>
            </button>
          </div>
          <form>
            <div className='grid grid-cols-9 text-black py-2'>
              <div className='col-span-7'>
                <div className='grid grid-cols-2'>
                  <div>
                    <label className='form-control w-full max-w-xs'>
                      <div className='label'>
                        <span className=''>Title</span>
                      </div>
                      <input type='text' className='input input-bordered w-[600px] h-[48px]  bg-[#F5F5F5]' />
                    </label>
                  </div>
                  <div>
                    <label className='form-control w-full max-w-xs'>
                      <div className='label'>
                        <span className=''>Add Tags</span>
                      </div>
                      <input type='text' className='input input-bordered w-[600px] h-[48px]  bg-[#F5F5F5]' />
                    </label>
                  </div>
                  <div className='col-span-2 mt-3'>
                    <div className='p-3 rounded-lg shadow-lg h-[394px]'>
                      <label className='form-control'>
                        <div className='label'>
                          <span className=''>Explanation</span>
                        </div>
                        <textarea
                          className='textarea textarea-bordered h-56 bg-[#F5F5F5]'
                          placeholder='Search AnyThing'></textarea>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* second grid */}

              <div className='col-span-2'>
                <div className='bg-[#F5F5F5] w-full h-[390px] mt-5 m-2 rounded-xl flex flex-col justify-center items-center'>
                  <p>
                    <CiFolderOn className='text-7xl text-[#FFFFFF] font-extrabold' />
                  </p>
                  <p className='text-xs'>Drop image here, paste or</p>
                  <button
                    type='submit'
                    className='btn text-[#FFFFFF] h-[40px] mt-3 bg-[#ebe5e5] hover:bg-[#ebe5e5] ring-0'>
                    + select
                  </button>
                </div>
                <div className='flex justify-around p-2'>
                  <button className='flex space-x-2 items-center bg-[#F5F5F5] px-2 py-1 rounded-lg text-black'>
                    <IoSaveOutline className='text-lg' />
                    <p>Draft</p>
                  </button>
                  <button className='flex space-x-2 items-center bg-[#F5F5F5] px-2 py-1 rounded-lg text-black'>
                    <IoEyeOutline className='text-lg' />
                    <p>Preview</p>
                  </button>
                  <button className='flex space-x-2 items-center hover:bg-[#F81539] bg-[#ea445f] px-2 py-1 rounded-lg text-white'>
                    <FaShare className='text-lg' />
                    <p>Public</p>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPost
