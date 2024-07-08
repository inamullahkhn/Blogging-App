import React from 'react'
import { BsChatDots } from 'react-icons/bs'

const CommentForm = () => {
  return (
    <div className='p-3'>
      <div>
        <p className='text-[22px] font-semibold text-[#3E3232]'>Add Comment</p>
      </div>
      <form>
        <div className='grid grid-cols-1 md:grid-cols-2 text-black py-2 gap-4'>
          <div>
            <div className='form-group'>
              <label className='form-control w-full'>
                <div className='label'>
                  <span className=''>Name</span>
                </div>
                <input type='text' className='input input-bordered w-full h-[48px] bg-[#F5F5F5]' />
              </label>
              <label className='form-control w-full mt-4'>
                <div className='label'>
                  <span className=''>Website</span>
                </div>
                <input type='text' className='input input-bordered w-full h-[48px] bg-[#F5F5F5]' />
              </label>
              <label className='form-control w-full mt-4'>
                <div className='label'>
                  <span className=''>Email</span>
                </div>
                <input type='email' className='input input-bordered w-full h-[48px] bg-[#F5F5F5]' />
              </label>
            </div>
          </div>
          {/* second grid */}
          <div>
            <label className='form-control w-full'>
              <div className='label'>
                <span className=''>Comment</span>
              </div>
              <textarea
                className='textarea textarea-bordered w-full h-56 bg-[#F5F5F5]'
                placeholder='Enter your comment'></textarea>
            </label>
          </div>
        </div>
        <button className='btn w-full border-none hover:bg-[#F81539] my-2 text-white bg-[#ea445f] flex justify-center items-center'>
          <BsChatDots className='text-lg mr-2' /> Send Comment
        </button>
      </form>
    </div>
  )
}

export default CommentForm
