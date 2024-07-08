import React from 'react'
import PopularCard from './PopularCard'

const PopularCards = () => {
  const data = [
    {
      id: 0,
      title: 'Opening Day of Boating Season, Seattle WA',
      image: '/popular/ocean.png',
      description:
        'Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge',
      user: [
        {
          name: 'James',
          image: '/popular/1.png',
          date: 'August 18, 2022',
        },
      ],
    },
    {
      id: 1,
      title: 'How to choose the right laptop for programming',
      image: '/popular/food.png',
      description:
        'Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs',
      user: [
        {
          name: 'Louis Hoebregts',
          image: '/popular/2.png',
          date: 'August 18, 2022',
        },
      ],
    },
    {
      id: 2,
      title: 'How we built the first real self-driving car',
      image: '/popular/02.png',
      description:
        'Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when',
      user: [
        {
          name: 'Mary',
          image: '/popular/3.png',
          date: 'August 18, 2022',
        },
      ],
    },
    {
      id: 3,
      title: 'How to Persuade Your Parents to Buy Fast Food',
      image: '/popular/07.png',
      description:
        'Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.',
      user: [
        {
          name: 'Jon Kantner',
          image: '/popular/4.png',
          date: 'August 18, 2022',
        },
      ],
    },
  ]

  return (
    <div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {data.map((item) => (
          <div key={item.id} className=''>
            <PopularCard
              title={item.title}
              id={item.id}
              image={item.image}
              description={item.description}
              user={item.user}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularCards
