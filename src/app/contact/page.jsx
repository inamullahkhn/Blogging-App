'use client'
import React, { useState, useEffect } from 'react'
import { BsSend } from 'react-icons/bs'
import { CiFolderOn } from 'react-icons/ci'
import { createContactUs } from '@/graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import { Storage } from 'aws-amplify'
import { Auth } from 'aws-amplify'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    explanation: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  console.log(formData)
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const result = await API.graphql(graphqlOperation(createContactUs, formData ))
      console.log('>>>>>>> result', result)
      if (result) {
        toast.success('Your Message Send Successfully')
      }
    } catch (error) {
      console.error('Error sending messages:', error)
      toast.error('Error sending messages')
    }
  }

  return (
    <div className='p-5 my-16 mb-20'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-9 text-black py-2'>
          <div className='col-span-3'>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className=''>Subject</span>
              </div>
              <input
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='input input-bordered w-[500px] h-[48px]  bg-[#F5F5F5]'
              />
            </label>
          </div>
          <div className='col-span-3'>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className=''>Name</span>
              </div>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='input input-bordered w-[500px] h-[48px]  bg-[#F5F5F5]'
              />
            </label>
          </div>
          <div className='col-span-3'>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className=''>Email</span>
              </div>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='input input-bordered w-[500px] h-[48px]   bg-[#F5F5F5]'
              />
            </label>
          </div>
          {/* second grid */}
          <div className='col-span-7 mt-3'>
            <div className='p-3 rounded-lg shadow-lg h-[394px]'>
              <label className='form-control'>
                <div className='label'>
                  <span className=''>Explanation</span>
                </div>
                <textarea
                  name='explanation'
                  value={formData.explanation}
                  onChange={handleChange}
                  className='textarea textarea-bordered h-56 bg-[#F5F5F5]'
                  placeholder='Search AnyThing'></textarea>
              </label>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='bg-[#F5F5F5] w-full h-[390px] mt-5 m-2 rounded-xl flex flex-col justify-center items-center'>
              <p>
                <CiFolderOn className='text-7xl text-[#FFFFFF] font-extrabold' />
              </p>
              <p className='text-xs'>Drop image here, paste or</p>
              <button type='button' className='btn text-[#FFFFFF] h-[40px] mt-3 bg-[#ebe5e5] hover:bg-[#ebe5e5] ring-0'>
                + select
              </button>
            </div>
          </div>
        </div>
        <button className='btn w-full border-none hover:bg-[#F81539] my-2 text-white bg-[#ea445f]' type='submit'>
          <BsSend className='text-lg' /> Send Comment
        </button>
      </form>
    </div>
  )
}

export default Contact
