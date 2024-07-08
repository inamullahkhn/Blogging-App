import { Auth } from 'aws-amplify'

export const POST = async (request) => {
  try {
    const formData = await request.formData()
    const username = formData.get('username')
    const password = formData.get('password')
    const { user } = await Auth.signUp({
      email: username,
      password,
      // attributes: {
      //   email, // optional
      //   phone_number, // optional - E.164 number convention
      //   // other custom attributes
      // },
      // autoSignIn: {
      //   // optional - enables auto sign in after user is confirmed
      //   enabled: true,
      // },
    })
    console.log(user)
  } catch (error) {
    console.log('error signing up:', error)
  }
}
