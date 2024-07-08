import { Auth } from 'aws-amplify'

export const POST = async (request) => {
  try {
    const formData = await request.formData()
    const username = formData.get('username')
    const password = formData.get('password')
    console.log(username, password)
    const user = await Auth.signIn(username, password)
    return new Response(user, {
      status: 200,
    })
  } catch (error) {
    console.log('error signing in', error)
  }
}
