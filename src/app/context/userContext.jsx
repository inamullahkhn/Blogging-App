'use client'
// import { getBlogUser } from '@/graphql/queries'
// import React, { createContext, useState, useContext, useEffect } from 'react'
// import { API, graphqlOperation } from 'aws-amplify'

// // Create a context
// export const UserContext = createContext()

// // Create a provider component
// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null)

//   // // Fetch the user from the backend
//   // const fetchUser = async ({ id }) => {
//   //   try {
//   //     const response = await API.graphql({
//   //       query: mutations.getBlogUser,
//   //       variables: { input: id },
//   //     })
//   //     const data = await response.json()
//   //     setUser(data)
//   //     localStorage.setItem('user', JSON.stringify(data))
//   //   } catch (error) {
//   //     console.error('Error fetching user:', error)
//   //   }
//   // }

//   // Use useEffect to fetch user data on component mount
//   // useEffect(() => {
//   //   fetchUser()
//   // }, [])

//   return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
// }

// export const useUserContext = () => {
//   const context = useContext(UserContext)
//   if (context === undefined) {
//     throw new Error('useUserContext must be used within a UserProvider')
//   }
//   return context
// }

import React, { createContext, useContext, useState } from 'react'

const SearchContext = createContext()

export const useSearch = () => useContext(SearchContext)

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')

  return <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>{children}</SearchContext.Provider>
}

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a UserProvider')
  }
  return context
}
