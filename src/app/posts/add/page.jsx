'use client'
import React, { useState, useEffect } from 'react'
import SaveBanner from '@/components/SaveBanner'
import { BsSend } from 'react-icons/bs'
import { CiFolderOn } from 'react-icons/ci'
import { FaShare } from 'react-icons/fa'
import { IoSaveOutline } from 'react-icons/io5'
import { IoEyeOutline } from 'react-icons/io5'
import { createBlogPost } from '@/graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import { Storage } from 'aws-amplify'
import { Auth } from 'aws-amplify'
import { toast } from 'react-toastify'


const AddPost = () => {
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [explanation, setExplanation] = useState('')
  const [image, setImage] = useState(null)
  const [userData, setuserData] = useState(null)

  // console.log('userdata>>>>>>>', userData?.username)
  const handleImageUpload = (event) => {
    setImage(event.target.files[0])
  }

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        console.log('User data Attr: ', user)
        setuserData(user)
      } catch (error) {
        console.error('Error getting user data: ', error)
      }
    }
    getUserData()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const randomid = Math.floor(Math.random() * 100 * 100)
      const profileimg = randomid + '' + image?.name
      const res = await Storage.put(profileimg, image, {
        level: 'public',
      })
      console.log('>>>>>', res.key)
      setImage(res.key)
      const newpost = {
        title: title,
        tags: tags,
        explanation: explanation,
        post_img: res.key,
        userId: userData?.attributes?.sub,
        categoryId: 12,
      }
      const result = await API.graphql(graphqlOperation(createBlogPost, { input: newpost }))
      console.log('>>>>>>> result', result)
      if (result) {
        toast.success('Post created successfully')
      }
    } catch (error) {
      console.error('Error creating post:', error)
      toast.error('Error creating post')
    }
  }
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
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-9 text-black py-2'>
              <div className='col-span-7'>
                <div className='grid grid-cols-2'>
                  <div>
                    <label className='form-control w-full max-w-xs'>
                      <div className='label'>
                        <span>Title</span>
                      </div>
                      <input
                        type='text'
                        className='input input-bordered w-[500px] h-[48px] bg-[#F5F5F5]'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </label>
                  </div>
                  <div>
                    <label className='form-control w-full max-w-xs'>
                      <div className='label'>
                        <span>Add Tags</span>
                      </div>
                      <input
                        type='text'
                        className='input input-bordered w-[500px] h-[48px] bg-[#F5F5F5]'
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className='col-span-2 mt-3'>
                    <div className='p-3 rounded-lg shadow-lg h-[394px]'>
                      <label className='form-control'>
                        <div className='label'>
                          <span>Explanation</span>
                        </div>
                        <textarea
                          className='textarea textarea-bordered h-56 bg-[#F5F5F5]'
                          placeholder='Search AnyThing'
                          value={explanation}
                          onChange={(e) => setExplanation(e.target.value)}></textarea>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-span-2'>
                <div className='bg-[#F5F5F5] w-full h-[390px] mt-5 m-2 rounded-xl flex flex-col justify-center items-center'>
                  <p>
                    <CiFolderOn className='text-7xl text-[#FFFFFF] font-extrabold' />
                  </p>
                  <p className='text-xs'>Drop image here, paste or</p>
                  <input type='file' className='hidden' id='imageUpload' onChange={handleImageUpload} />
                  <label
                    htmlFor='imageUpload'
                    className='btn text-[#FFFFFF] h-[40px] mt-3 bg-[#ebe5e5] hover:bg-[#ebe5e5] ring-0'>
                    + select
                  </label>
                </div>
                <div className='flex justify-around p-2'>
                  {/* <buttons
                    type='button'
                    className='flex space-x-2 items-center bg-[#F5F5F5] px-2 py-1 rounded-lg text-black'>
                    <IoSaveOutline className='text-lg' />
                    <p>Draft</p>
                  </buttons>
                  <button
                    type='button'
                    className='flex space-x-2 items-center bg-[#F5F5F5] px-2 py-1 rounded-lg text-black'>
                    <IoEyeOutline className='text-lg' />
                    <p>Preview</p>
                  </button> */}
                  <button
                    type='submit'
                    className='flex space-x-2 items-center hover:bg-[#F81539] bg-[#ea445f] px-2 py-1 rounded-lg text-white'>
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
