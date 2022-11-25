import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalContextProvider } from '../contexts/globalContext';

import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }: AppProps) {
  return <GlobalContextProvider>
    <Component {...pageProps} />
  </GlobalContextProvider>
}
