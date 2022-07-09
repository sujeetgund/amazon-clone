import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
