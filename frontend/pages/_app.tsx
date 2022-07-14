import { useEffect } from "react";
import type { AppProps } from "next/app";
import { wrapper, store } from "../redux/store"
import { Provider } from "react-redux"

import axiosInstance from "../api"
import "@styles/globals.css"
import { setDefaultLocale } from "react-datepicker"
import zh from "date-fns/locale/zh-TW"

// set datepicker locale
setDefaultLocale("zh-TW")

function MyApp({ Component, pageProps }: AppProps) {
  const initFrontend = () => {
    const frontend = {
      nextFetch: axiosInstance,
    }

    window.frontend = frontend
  }

  useEffect(() => {
    initFrontend()
  }, [])

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
