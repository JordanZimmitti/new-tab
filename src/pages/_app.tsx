import {AppProps} from 'next/app'
import {Provider} from 'next-auth/client'
import './globals.sass'

/** Function MyApp
 *  Function that runs when the web-app starts
 *  @param {AppProps} - The initial properties for rending the web-app
 *  @return The web-app
 */
const MyApp = ({ Component, pageProps }: AppProps) => {

  // Returns The Web-App//
  return <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
}

// Makes MyApp The Default Function//
export default MyApp