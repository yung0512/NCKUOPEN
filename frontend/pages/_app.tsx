import { useEffect } from "react";
import type { AppProps } from "next/app";
import { wrapper, store } from "../redux/store"
import { Provider } from "react-redux"

import axios from "../axios"
import "@styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  const nextFetch = (url: string, data?: {}) => {
    return axios.post(url, data)
  }

  const initFrontend = () => {
    const frontend = {
      nextFetch,
    }

    window.frontend = frontend
  }

  useEffect(() => {
    initFrontend()
  }, [])

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
