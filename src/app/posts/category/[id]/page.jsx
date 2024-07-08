import SaveBanner from '@/components/SaveBanner'
import CategoryPosts from '@/components/CategoryPosts'
import React from 'react'

const SavedPots = () => {
  return (
    <div>
      <div>
        <p className='text-[22px] p-2 font-medium text-[#3E3232]'>Category : Cars </p>
      </div>
      <CategoryPosts />
    </div>
  )
}

export default SavedPots
