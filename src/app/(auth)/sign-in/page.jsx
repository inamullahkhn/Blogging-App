'use client'
import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useUserContext } from '@/app/context/userContext'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const router = useRouter()

  // const { fetchUser } = useUserContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    async function signIn() {
      try {
        const response = await Auth.signIn({
          username: email,
          password: password,
        })
        // console.log(response)
        if (response) router.push('/posts')
      } catch (error) {
        console.log('error signing up:', error)
      }
    }
    signIn()
  }

  // const handleSend = async (e) => {
  //   e.preventDefault()
  //   console.log(email)
  //   try {
  //     const response = await Auth.forgotPassword(email)
  //     console.log(response)
  //     if (response) {
  //       router.push('/forget')
  //     }
  //   } catch (error) {
  //     console.log('error signing up:', error)
  //   }
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='bg-grey-lighter min-h-screen flex flex-col'>
          <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
            {/* {!show ? () : ()} */}
            <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
              <h1 className='mb-8 text-3xl text-center'>Sign in</h1>
              <input
                type='text'
                className='block border bg-white w-full p-3 rounded mb-4'
                name='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                className='block border bg-white  w-full p-3 rounded mb-4'
                name='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type='submit'
                onClick={() => setShow(!show)}
                className='w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1'>
                Create Account
              </button>
            </div>
            <div className='text-grey-dark mt-6'>
              Already have an account?
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

export default SignIn
