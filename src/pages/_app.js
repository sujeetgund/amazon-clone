import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import Head from 'next/head';

import { SessionProvider } from "next-auth/react"


const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </Provider>
    </SessionProvider>
  )
}

export default MyApp
