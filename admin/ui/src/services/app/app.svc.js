// TODO: If this is to be published, we need to initialize this to a static domain
// Global variable for the APIURL
export let APIURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:80'
  : ''

/**
 * Method to format dates.
 * @param {*} date 
 * @returns A date string.
 */
export const formatDate = (date) => {
  
}