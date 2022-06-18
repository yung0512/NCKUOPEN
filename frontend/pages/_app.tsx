import { useEffect } from "react";
import type { AppProps } from "next/app";

import axios from "../axios";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const nextFetch = (url: string, data?: {}) => {
    return axios.post(url, data);
  };

  const initFrontend = () => {
    const frontend = {
      nextFetch,
    };

    window.frontend = frontend;
  };

  useEffect(() => {
    initFrontend();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
