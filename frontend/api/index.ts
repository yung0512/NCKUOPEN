import axios, { AxiosRequestConfig } from "axios"

const nextFetchConfig: AxiosRequestConfig = {
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://nckuopen.com/api"
      : "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}

const nextFetch = axios.create(nextFetchConfig)
//All request will wait 2 seconds before timeout
nextFetch.defaults.timeout = 2000

nextFetch.defaults.withCredentials = true

export default nextFetch
