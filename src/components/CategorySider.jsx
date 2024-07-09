'use client'
import React, { useState, useEffect } from 'react'
import Category from './category'
import { API, graphqlOperation } from 'aws-amplify'
import { listCategoryPosts } from '@/graphql/queries'

const CategorySlider = () => {
  const [catdata, setCatData] = useState(null)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await API.graphql(graphqlOperation(listCategoryPosts))
        setCatData(data.listCategoryPosts.items)
        console.log('category items>>>', data.listCategoryPosts.items)
      } catch (error) {
        console.error('Error fetching catgories:', error)
      }
    }
    fetchPosts()
  }, [])

  // const category = [
  //   {
  //     id: 1,
  //     name: 'Food',
  //     image: '/images/food.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'Animal',
  //     image: '/images/animal.png',
  //   },
  //   {
  //     id: 3,
  //     name: 'Car',
  //     image: '/images/cars.png',
  //   },
  //   {
  //     id: 5,
  //     name: 'Music',
  //     image: '/images/music.png',
  //   },
  //   {
  //     id: 6,
  //     name: 'Technology',
  //     image: '/images/abstact.png',
  //   },
  // ]
  return (
    <div className=' bg-white p-2'>
      <div className=' flex space-x-4 items-center bg-slate-100 p-1 rounded-lg'>
        {catdata?.map((item) => (
          <Category key={item.id} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default CategorySlider
