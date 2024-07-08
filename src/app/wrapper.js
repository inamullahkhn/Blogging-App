'use client'
import React from 'react'
import { Amplify, Auth, Storage } from 'aws-amplify'
import awsconfig from '@/aws-exports'

// Amplify.configure({
//   Auth: {
//     identityPoolId: 'blogapp41250ae6_userpool_41250ae6-dev', //REQUIRED - Amazon Cognito Identity Pool ID
//     region: 'ap-northeast-1', // REQUIRED - Amazon Cognito Region
//     userPoolId: 'ap-northeast-1_EmmZwIvcc', //OPTIONAL - Amazon Cognito User Pool ID
//     // userPoolWebClientId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito Web Client ID
//   },
//   Storage: {
//     AWSS3: {
//       bucket: 'inam-blogapp', //REQUIRED -  Amazon S3 bucket name
//       region: 'ap-northeast-1', //OPTIONAL -  Amazon service region
//       isObjectLockEnabled: true, //OPTIONAl - Object Lock parameter
//     },
//   },
// })

function Wrapper({ children }) {
  Amplify.configure({ ...awsconfig, ssr: false })
  return <>{children}</>
}

export default Wrapper
