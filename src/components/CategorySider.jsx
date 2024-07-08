import React from 'react'
import Category from './category'

const CategorySlider = () => {
  const category = [
    {
      id: 1,
      name: 'Food',
      image: '/images/food.png',
    },
    {
      id: 2,
      name: 'Animal',
      image: '/images/animal.png',
    },
    {
      id: 3,
      name: 'Car',
      image: '/images/cars.png',
    },
    {
      id: 5,
      name: 'Music',
      image: '/images/music.png',
    },
    {
      id: 6,
      name: 'Technology',
      image: '/images/abstact.png',
    },
  ]
  return (
    <div className=' bg-white p-2'>
      <div className=' flex space-x-4 items-center bg-slate-100 p-1 rounded-lg'>
        {category.map((item) => (
          <Category key={item.id} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default CategorySlider
