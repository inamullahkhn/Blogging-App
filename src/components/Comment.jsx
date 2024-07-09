'use client'
import React, { useState, useEffect } from 'react'
import { CiBookmark } from 'react-icons/ci'
import Image from 'next/image'
import { FaShare } from 'react-icons/fa'
import ReplyComment from './ReplyComment'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { listBlogComments } from '@/graphql/queries'
import { StorageImage } from '@aws-amplify/ui-react-storage'
import { toast } from 'react-toastify'
import { createReplyComment } from '@/graphql/mutations'

const Comment = ({ postId }) => {
  const [commentdata, setCommentData] = useState(null)
  const [replyComment, setReplyComment] = useState('')
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await API.graphql(graphqlOperation(listBlogComments))
        setCommentData(data.listBlogComments.items)
        // setUser(data?.listBlogComments?.items?)
        console.log('blog Comment user>>>', data.listBlogComments.items)
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    }
    fetchPosts()
  }, [])

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

  const handleSubmit = async (event, id) => {
    event.preventDefault()
    try {
      const commentData = {
        comment: replyComment,
        commentId: id,
        postId: postId,
        userId: userData?.sub,
        blogCommentReplycommentsId: id,
      }
      const result = await API.graphql(graphqlOperation(createReplyComment, { input: commentData }))
      console.log('>>>>>>> result', result)
      if (result) {
        toast.success('reply Comment create success')
        setReplyComment('')
      }
    } catch (error) {
      console.error('Error reply comment:', error)
      toast.error('Error reply comment')
    }
  }

  return (
    <div>
      {commentdata?.map((comment, index) => {
        return (
          <>
            <div className='relative bg-[#F5F5F5] rounded-xl mx-2 my-2 p-5' key={index}>
              <div className='flex justify-between items-center py-2'>
                <div className='flex items-center space-x-1'>
                  {/* <Image src='/popular/1.png' alt='' width={60} height={60} className='rounded-md' /> */}
                  <StorageImage
                    imgKey={comment?.user?.user_pic || '/car.png'}
                    width={60}
                    height={60}
                    className='rounded-md'
                  />
                  <div className=''>
                    <p className='text-[18px] text-[#3E3232]'>{comment?.name}</p>
                    <span className='text-[14px] text-[#3E3232]'>{comment?.comment}</span>
                  </div>
                </div>
                <div className='flex space-x-2 items-center bg-[#e6e2e2] px-2 py-1 rounded-lg text-black'>
                  <FaShare className='text-xl text-gray-400' />
                  <>
                    <p
                      className='text-gray-500 cursor-pointer'
                      onClick={() => document.getElementById('my_modal_4').showModal()}>
                      reply
                    </p>
                    <dialog id='my_modal_4' className='modal'>
                      <div className='modal-box w-2/4 max-w-5xl'>
                        <div className='modal-action'>
                          <form method='dialog'>
                            <div>
                              <label className='form-control w-full'>
                                <div className='label'>
                                  <span>Comment</span>
                                </div>
                                <textarea
                                  name='comment'
                                  value={replyComment}
                                  onChange={(e) => setReplyComment(e.target.value)}
                                  className='textarea textarea-bordered w-full h-56 bg-[#F5F5F5]'
                                  placeholder='Enter your comment'></textarea>
                              </label>
                            </div>
                            <button type='submit' className='btn' onClick={(event) => handleSubmit(event, comment?.id)}>
                              Comment
                            </button>
                            <button className='btn'>Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </>
                </div>
              </div>
              <div>
                <p className='text-[14px] text-black tracking-normal text-sm'>
                  {comment?.createdAt ? comment?.createdAt.substring(0, 10) : 'N/A'}
                </p>
              </div>

              {/* absolute div */}
            </div>
            {/* <div style={{ 'margin-top': '-20' }}>{comment?.replycomments?.items >= 0 ? <ReplyComment /> : ''}</div> */}
            {comment?.replycomments?.items?.map((replyComment, index) => {
              return (
                <div className='relative bg-[#F5F5F5] rounded-xl mx-2 p-4' key={index}>
                  <ReplyComment replyComments={replyComment} />
                </div>
              )
            })}
          </>
        )
      })}
    </div>
  )
}

export default Comment
