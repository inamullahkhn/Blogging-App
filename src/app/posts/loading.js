import React from 'react'

const loading = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <p className='text-[192px] text-[#FC4308]'>MEGA.news</p>
      <span className='loading loading-spinner loading-lg'></span>
    </div>
  )
}

export default loading
