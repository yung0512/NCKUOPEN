import { AxiosInstance } from "axios"

export interface GlobalFrontend {
  nextFetch: AxiosInstance
}

// extend Window definition
declare global {
  interface Window {
    frontend: GlobalFrontend
  }
}
