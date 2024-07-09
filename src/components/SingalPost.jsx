'use client'
import React, { useState, useEffect } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { API, graphqlOperation } from 'aws-amplify'
import { getBlogPost } from '@/graphql/queries'
import { useParams } from 'next/navigation'
import { StorageImage } from '@aws-amplify/ui-react-storage'

const SingalPost = () => {
  const [catdata, setCatData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await API.graphql(graphqlOperation(getBlogPost, { id: id }))
        setCatData(data.getBlogPost)
        console.log(data)
      } catch (error) {
        console.error('Error fetching single post:', error)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div className='flex'>
      <div className='w-[1128px]'>
        <div className='p-3 bg-[#F5F5F5] rounded-lg  '>
          <p className='text-2xl text-black font-medium p-1 '>{catdata?.title}</p>
          {/* <img src='/popular/ocean.png' className='w-full h-[590px] rounded-lg' /> */}
          <StorageImage imgKey={catdata?.post_img || '/popular/ocean.png'} className='w-full h-[590px] rounded-lg' />
        </div>
        <p className='text-[22px] p-2 font-semibold text-[#3E3232]'>
          Don’t wait. The purpose of our lives is to be happy!
        </p>
        <p className='p-3 text-[20px] text-sm text-[#3E3232] font-normal'>{catdata?.explantion}</p>
        <div className='flex justify-center'>
          <img src='/popular/car1.png' className='w-[872px] h-[486px] rounded-lg py-1' />
        </div>
        {/* <p className='text-[22px] p-2 font-semibold text-[#3E3232]'>
          Not how long, but how well you have lived is the main thing.
        </p> */}
        <p className='p-3 text-[20px] text-sm text-[#3E3232] font-normal'>
          When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at
          the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks,
          paddleboards, or the low-key pedal boats. Snorkeling equipment is available as well, so you can experience the
          ever-changing undersea environment. Not only do visitors to a bed and breakfast get a unique perspective on
          the place they are visiting, they have options for special packages not available in other hotel settings. Bed
          and breakfasts can partner easily with local businesses for a smoothly organized and highly personalized
          vacation experience. The Fife and Drum Inn offers options such as the Historic Triangle Package that includes
          three nights at the Inn, breakfasts, and admissions to historic Williamsburg, Jamestown, and Yorktown. Bed and
          breakfasts also lend themselves to romance. Part of the charm of a bed and breakfast is the uniqueness; art,
          décor, and food are integrated to create a complete experience. For example, the Fife and Drum retains the
          colonial feel of the area in all its guest rooms. Special features include antique furnishings, elegant four
          poster beds in some guest rooms, as well folk art and artifacts from the restoration period of the historic
          area available for guests to enjoy.
        </p>
        <div>
          <Comment postId={catdata?.id} />
        </div>
        <div>
          <CommentForm postId={catdata?.id} />
        </div>
      </div>
      <div className='w-[182]'></div>
    </div>
  )
}

export default SingalPost
