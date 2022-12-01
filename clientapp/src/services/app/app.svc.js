export let APIURL = ""

export const startup = () => {
  if (process.env.NODE_ENV === "development")
    APIURL = "http://localhost:80"
}