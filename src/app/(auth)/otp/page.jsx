'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/navigation'

const OTP = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('code =>', otp)

    try {
      const response = await Auth.confirmSignUp(email, otp)
      console.log('user data', response)
      if (response) {
        router.push('/sign-in')
      }
    } catch (error) {
      console.log('error signing up:', error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='bg-grey-lighter min-h-screen flex flex-col'>
          <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
            <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
              <h1 className='mb-8 text-3xl text-center'>Verify Your OTP</h1>

              <input
                type='text'
                className='block border bg-white w-full p-3 rounded mb-4'
                name='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='number'
                className='block border bg-white  w-full p-3 rounded mb-4'
                name='otp'
                placeholder='otp'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                type='submit'
                className='w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1'>
                Verify OTP
              </button>
            </div>
            <div className='text-grey-dark mt-6'>
              create sign up again?
              <Link href='/sign-up' className='no-underline border-b border-blue text-blue'>
                {' '}
                Sign up
              </Link>
              .
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default OTP
