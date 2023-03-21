import 'regenerator-runtime/runtime'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

import { GlobalStyle } from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PowerMedia: More than an app, an ally for your business.</title>
      </Head>

      <Component {...pageProps} />
      <GlobalStyle />
      <Toaster />
    </>
  )
}
