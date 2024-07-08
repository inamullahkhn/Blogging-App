// 'use client'
// import { Amplify } from 'aws-amplify'

// import { withAuthenticator } from '@aws-amplify/ui-react'
// import '@aws-amplify/ui-react/styles.css'

// import awsExports from '../aws-exports'
// Amplify.configure(awsExports)

// function App({ signOut, user }) {
//   return (
//     <>
//       <h1>Hello {user.username}</h1>
//       <button onClick={signOut}>Sign out</button>
//     </>
//   )
// }

// export default withAuthenticator(App)
import CategorySider from '@/components/CategorySider'
import MainCard from '@/components/MainCard'
import PopularCards from '@/components/PopularCards'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white'>
      <CategorySider />
      <MainCard />
      <div>
        <h1 className='text-[20px] ml-5 py-2 font-semibold text-[#3E3232]'>Popular Posts</h1>
      </div>
      <PopularCards />
    </div>
  )
}

export default page
