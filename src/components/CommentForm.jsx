import React, { useState, useEffect } from 'react'
import { BsChatDots } from 'react-icons/bs'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { StorageImage } from '@aws-amplify/ui-react-storage'
import { createReplyComment } from '@/graphql/mutations'
import { toast } from 'react-toastify'

const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState('')
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        // console.log('User data Attr: ', user.attributes.)
        setuserData(user?.attributes)
      } catch (error) {
        console.error('Error getting user data: ', error)
      }
    }
    getUserData()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const commentData = {
        name: userData?.preferred_username,
        comment: comment,
        postId: postId,
        userId: userData?.sub,
        blogPostCommentsId: postId,
      }
      const result = await API.graphql(graphqlOperation(createReplyComment, { input: commentData }))
      console.log('>>>>>>> result', result)
      if (result) {
        toast.success('Reply success')
        setComment('')
      }
    } catch (error) {
      console.error('Error reply comment post:', error)
      toast.error('Error reply comment on post')
    }
  }

  return (
    <div className='p-3'>
      <div>
        <p className='text-[22px] font-semibold text-[#3E3232]'>Add Comment</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 text-black py-2 gap-4'>
          <div>
            <div className='form-group'>
              <label className='form-control w-full'>
                <div className='label'>
                  <span>Name</span>
                </div>
                <input
                  type='text'
                  name='name'
                  // value={formData.name}
                  // onChange={handleChange}
                  className='input input-bordered w-full h-[48px] bg-[#F5F5F5]'
                />
              </label>
              <label className='form-control w-full mt-4'>
                <div className='label'>
                  <span>Website</span>
                </div>
                <input
                  type='text'
                  name='website'
                  // value={formData.website}
                  // onChange={handleChange}
                  className='input input-bordered w-full h-[48px] bg-[#F5F5F5]'
                />
              </label>
              <label className='form-control w-full mt-4'>
                <div className='label'>
                  <span>Email</span>
                </div>
                <input
                  type='email'
                  name='email'
                  // value={formData.email}
                  // onChange={handleChange}
                  className='input input-bordered w-full h-[48px] bg-[#F5F5F5]'
                />
              </label>
            </div>
          </div>
          <div>
            <label className='form-control w-full'>
              <div className='label'>
                <span>Comment</span>
              </div>
              <textarea
                name='comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className='textarea textarea-bordered w-full h-56 bg-[#F5F5F5]'
                placeholder='Enter your comment'></textarea>
            </label>
          </div>
        </div>
        <button
          type='submit'
          className='btn w-full border-none hover:bg-[#F81539] my-2 text-white bg-[#ea445f] flex justify-center items-center'>
          <BsChatDots className='text-lg mr-2' /> Send Comment
        </button>
      </form>
    </div>
  )
}

export default CommentForm
