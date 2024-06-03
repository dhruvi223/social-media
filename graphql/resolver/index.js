const authResover = require('./auth')
const bookingResover = require('./booking')
const eventResover = require('./events')

const rootResolver = {
  ...authResover,
  ...bookingResover,
  ...eventResover
}

module.exports = rootResolver;

