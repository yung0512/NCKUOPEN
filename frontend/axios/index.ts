import axios, { AxiosRequestConfig } from "axios";
import { env } from "process";

const nextFetchConfig: AxiosRequestConfig = {
  baseURL:
    env.NODE_ENV === "production"
      ? "https://nckuopen/api"
      : "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const nextFetch = axios.create(nextFetchConfig);
//All request will wait 2 seconds before timeout
nextFetch.defaults.timeout = 2000;

nextFetch.defaults.withCredentials = true;

export default nextFetch;
