module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/task-app/' // note the trailing slash
    : '/',
  }