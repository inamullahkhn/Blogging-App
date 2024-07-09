'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { IoSaveOutline } from 'react-icons/io5'
import { CiFolderOn } from 'react-icons/ci'
import { Auth } from 'aws-amplify'
import { StorageImage } from '@aws-amplify/ui-react-storage'
import { updateBlogUser } from '@/graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import { toast } from 'react-toastify'
import { Input } from 'postcss'

const EditProfile = () => {
  const [userData, setuserData] = useState(null)
  const [email, setEmail] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        console.log('User data Attr: ', user)
        setuserData(user?.attributes)
      } catch (error) {
        console.error('Error getting user data: ', error)
      }
    }
    getUserData()
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const updatedUserData = {
        id: userData?.sub,
        first_name: firstname,
        last_name: lastname,
      }
      const res = await API.graphql(graphqlOperation(updateBlogUser, { input: updatedUserData }))
      console.log('update res ', res)
      if (res) {
        toast.success('Profile updated successfully')
        setFirstName('')
        setLastName('')
      }
    } catch (error) {
      toast.error('Error updating profile:', error)
      console.log(error)
    }
  }

  return (
    <div>
      <div className='p-5 my-16 mb-20'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-9 text-black py-2'>
            <div className='col-span-3'>
              <label className='form-control w-full max-w-xs'>
                <div className='label'>
                  <span className=''>First Name</span>
                </div>
                <input
                  type='text'
                  className='input input-bordered w-[500px] h-[48px]  bg-[#F5F5F5]'
                  placeholder={userData?.given_name}
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
            </div>
            <div className='col-span-3'>
              <label className='form-control w-full max-w-xs'>
                <div className='label'>
                  <span className=''>Last Name</span>
                </div>
                <input
                  type='text'
                  placeholder={userData?.family_name}
                  className='input input-bordered w-[500px] h-[48px]  bg-[#F5F5F5]'
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </div>
            <div className='col-span-3'>
              <label className='form-control w-full max-w-xs'>
                <div className='label'>
                  <span className=''>Subject</span>
                </div>
                <input type='text' className='input input-bordered w-[500px] h-[48px]   bg-[#F5F5F5]' />
              </label>
            </div>
            {/* second grid */}
            <div className='col-span-3'>
              <label className='form-control w-full max-w-xs'>
                <div className='label'>
                  <span className=''>Old Password</span>
                </div>
                <input type='text' className='input input-bordered w-[500px] h-[48px]  bg-[#F5F5F5]' />
              </label>
            </div>
            <div className='col-span-3'>
              <label className='form-control w-full max-w-xs'>
                <div className='label'>
                  <span className=''>New Password</span>
                </div>
                <input type='text' className='input input-bordered w-[500px] h-[48px]  bg-[#F5F5F5]' />
              </label>
            </div>
            <div className='col-span-3'>
              <label className='form-control w-full max-w-xs'>
                <div className='label'>
                  <span className=''>Email</span>
                </div>
                <input
                  type='email'
                  className='input input-bordered w-[500px] h-[48px]   bg-[#F5F5F5]'
                  placeholder={userData?.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            {/* third grid */}
            <div className='col-span-9'>
              <div className='bg-[#F5F5F5] w-full h-[170px] my-5 rounded-xl flex flex-col justify-center items-center'>
                <div className='flex space-x-2 items-center'>
                  <div>
                    <p>
                      <CiFolderOn className='text-7xl text-[#FFFFFF] font-extrabold' />
                    </p>
                  </div>
                  <div className='flex flex-col space-y-2'>
                    <button
                      type='submit'
                      className='btn text-[#FFFFFF] h-[40px] mt-3 bg-[#ebe5e5] hover:bg-[#ebe5e5] ring-0'>
                      + select
                    </button>
                    <p className='text-xs'>Drop image here, paste or</p>
                  </div>
                </div>
              </div>
            </div>
            {/* fourth grid */}
            <div className='col-span-7 mt-3'>
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
            </div>
          </div>
          <button type='submit' className='btn w-full border-none hover:bg-[#F81539] my-2 text-white bg-[#ea445f]'>
            <IoSaveOutline className='text-lg' /> Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
