import Wagmi from '@/provider/Wagmi'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {



  return (
    <Wagmi>
      <Component {...pageProps} />
    </Wagmi>
  )
}

export default App