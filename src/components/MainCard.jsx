import React from 'react'

const MainCard = () => {
  const images = ['/images/01.png', '/images/08.png', '/images/car.png']

  return (
    <div className='bg-white p-2'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
        <div className='col-span-1'>
          <div className='bg-gray-100'>
            <div className='relative h-[456px] w-114 bg-white shadow-lg rounded-lg overflow-hidden'>
              <img src={images[2]} alt='Card Image' className='w-full h-full object-cover' />
              <div className='absolute inset-0 bottom-0 opacity-100 flex items-end justify-center'>
                <div className='text-black text-center p-4'>
                  <div className='bg-slate-200 p-3 rounded-xl opacity-80'>
                    <h2 className='text-2xl font-bold'>How to Drive a Car Safely</h2>
                    <p className='mt-2'>
                      Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a
                      little
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='bg-gray-100'>
            <div className='relative h-[456px] w-114 bg-white shadow-lg rounded-lg overflow-hidden'>
              <img src={images[1]} alt='Card Image' className='w-full h-full object-cover' />
              <div className='absolute inset-0 bottom-0 opacity-100 flex items-end justify-center'>
                <div className='text-black text-center p-4'>
                  <div className='bg-slate-200 p-3 rounded-xl opacity-80'>
                    <h2 className='text-2xl font-bold'>How to Make Dance Music</h2>
                    <p className='mt-2'>
                      Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a
                      little
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='bg-gray-100'>
            <div className='relative h-[456px] w-114 bg-white shadow-lg rounded-lg overflow-hidden'>
              <img src={images[0]} alt='Card Image' className='w-full h-full object-cover' />
              <div className='absolute inset-0 bottom-0 opacity-100 flex items-end justify-start'>
                <div className='text-black text-left p-4'>
                  <div className='bg-slate-200 p-3 rounded-xl opacity-80'>
                    <h2 className='text-2xl font-bold'>Why I Stopped Using Multiple Monitor</h2>
                    <p className='mt-2'>
                      A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity.
                      Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from
                      monitor manufacturers like
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCard
