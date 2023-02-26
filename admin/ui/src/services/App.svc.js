export let APIURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:81'
  : ''