const AWS = require('aws-sdk')
// const { v4: uuidv4 } = require('uuid')
const dynamoDB = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
  console.log('event result', event)
  try {
    await dynamoDB
      .put({
        TableName: `${process.env.UserTable}-${process.env.ENV}`,
        Item: {
          id: event.request.userAttributes.sub,
          email: event.request.userAttributes.email,
          first_name: event.request.userAttributes.given_name,
          last_name: event.request.userAttributes.family_name,
          user_name: event.request.userAttributes.preferred_username,
          user_pic: event.request.userAttributes.profile,
          banner_pic: event.request.userAttributes.picture,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      })
      .promise()
    console.info(`Successfully executed put in ${process.env.UserTable}`)
    return event
  } catch (err) {
    console.error(err)
    throw err
  }
}
