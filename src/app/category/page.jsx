'use client'
import React, { useState, useEffect } from 'react'
import SaveBanner from '@/components/SaveBanner'
import CategoryPosts from '@/components/CategoryPosts'
import { API, graphqlOperation } from 'aws-amplify'
import { listCategoryPosts } from '@/graphql/queries'
import { useSearch } from '../context/userContext'

const Category = () => {
  const [catdata, setCatData] = useState(null)
  const { searchQuery } = useSearch()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await API.graphql(graphqlOperation(listCategoryPosts))
        setCatData(data?.listCategoryPosts?.items)
        console.log('category>>>', data.listCategoryPosts.items)
      } catch (error) {
        console.error('Error fetching catgories:', error)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div>
      <div>
        <div className='flex space-x-4 items-center'>
          {catdata?.map((item, index) => {
            return (
              <p key={index} className='cursor-pointer'>
                {item.title}
              </p>
            )
          })}
        </div>

        <p className='text-[22px] p-2 font-medium text-[#3E3232]'>Category : Cars </p>
      </div>
      <CategoryPosts />
    </div>
  )
}

export default Category
