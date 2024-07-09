'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { StorageImage } from '@aws-amplify/ui-react-storage'
import { API, graphqlOperation } from 'aws-amplify'
import { listReplyComments } from '@/graphql/queries'

const ReplyComment = ({ replyComments }) => {
  // console.log(replyComments)
  const [replyComment, setReplyComment] = useState(null)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data } = await API.graphql(graphqlOperation(listReplyComments))
        setReplyComment(data?.listReplyComments?.items)
        // console.log('reply comments', data.listReplyComments.items)
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    }
    fetchComments()
  }, [])

  return (
    <div>
      <div className='w-[872px] bg-[#FFFFFF] shadow-md p-4 relative mt-[-20px] rounded-xl ml-20 my-2 mb-1'>
        <div className='flex justify-between items-center py-2'>
          <div className='flex items-center space-x-1'>
            {/* <Image src='/popular/1.png' alt='' width={60} height={60} className='rounded-md' /> */}
            <StorageImage
              imgKey={replyComments?.user?.user_pic || '/car.png'}
              width={60}
              height={60}
              className='rounded-md'
            />
            <div className=''>
              <p className='text-[18px] text-[#3E3232]'>{replyComments?.user?.user_name}</p>
              <span className='text-[14px] text-[#3E3232]'>{replyComments?.createdAt}</span>
            </div>
          </div>
        </div>
        <div>
          <p className='text-[14px] text-black tracking-normal text-sm'>{replyComments?.comment}</p>
        </div>
      </div>
    </div>
  )
}

export default ReplyComment
