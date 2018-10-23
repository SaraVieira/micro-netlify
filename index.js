require('dotenv').config()
const querystring = require('querystring')
const { router, get } = require('microrouter')
const redirect = require('micro-redirect')

const url = 'https://app.netlify.com/authorize'

const redirectWithQueryString = (res, data) => {
  const location = `${process.env.REDIRECT_URL}?${querystring.stringify(data)}`
  redirect(res, 302, location)
}

const login = async (req, res) => {
  const query = {
    client_id: process.env.NETLIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: process.env.REDIRECT_URL
  }

  redirect(res, 302, `${url}?${querystring.stringify(query)}`)
}

module.exports = router(get('/login', login))
