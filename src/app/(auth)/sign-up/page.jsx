'use client'
import React, { useEffect, useState } from 'react'
import { Auth, Storage } from 'aws-amplify'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createBlogUser } from '@/graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [profile, setProfile] = useState(null)
  const [banner, setBanner] = useState(null)
  const [show, setShow] = useState(false)

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    async function signUp() {
      try {
        const randomid = Math.floor(Math.random() * 100 * 100)
        const profileimg = randomid + '' + profile?.name
        const bannerimg = randomid + '' + banner?.name

        const res = await Storage.put(profileimg, profile, {
          level: 'public',
        })
        const res1 = await Storage.put(bannerimg, profile, {
          level: 'banner',
        })
        const response = await Auth.signUp({
          username: email,
          password: password,
          attributes: {
            preferred_username: username,
            given_name: firstname,
            family_name: lastname,
            profile: res.key,
            picture: res1.key,
          },
        })
        const data = {
          user_name: username,
          first_name: firstname,
          last_name: lastname,
          email: email,
          user_pic: profileimg,
          banner_pic: bannerimg,
        }
        // const createUser = await API.graphql(graphqlOperation(createBlogUser, { input: data }))
        // console.log('result', createUser)
        console.log('signup res', response)
        console.log('storage res', res)
        if (response) {
          router.push('/otp')
        }
      } catch (error) {
        console.log('error signing up:', error)
      }
    }
    signUp()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='bg-grey-lighter min-h-screen flex flex-col'>
          <div className='container w-[800px] mx-auto flex-1 flex flex-col items-center justify-center px-2'>
            <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
              <h1 className='mb-8 text-3xl text-center'>Sign up</h1>
              <div className='grid grid-cols-3 gap-1'>
                <div>
                  <input
                    type='text'
                    className='block border bg-white w-full p-3 rounded mb-4'
                    name='username'
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type='text'
                    className='block border bg-white w-full p-3 rounded mb-4'
                    name='firstname'
                    placeholder='first name'
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type='text'
                    className='block border bg-white w-full p-3 rounded mb-4'
                    name='lastname'
                    placeholder='last name'
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>

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
              <div>
                <label>Profile Image</label>
                <input
                  type='file'
                  className='block border bg-white  w-full p-3 rounded mb-4'
                  name='profile'
                  placeholder=''
                  onChange={(e) => setProfile(e.target.files[0])}
                />
              </div>
              <div>
                <label>Banner Image</label>
                <input
                  type='file'
                  className='block border bg-white  w-full p-3 rounded mb-4'
                  name='banner'
                  placeholder=''
                  onChange={(e) => setBanner(e.target.files[0])}
                />
              </div>
              <button
                type='submit'
                className='w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1'>
                Create Account
              </button>
            </div>

            <div className='text-grey-dark mt-6'>
              Already have an account?
              <Link href='/sign-in' className='no-underline border-b border-blue text-blue'>
                {' '}
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp
