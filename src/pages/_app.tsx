import {AppProps} from 'next/app'
import './globals.sass'

/** Function MyApp
 *  Function that runs when the web-app starts
 *  @param {AppProps} - The initial properties for rending the web-app
 *  @return The web-app
 */
const MyApp = ({ Component, pageProps }: AppProps) => {

  // Returns The Web-App//
  return <Component {...pageProps} />
}

// Makes MyApp The Default Function//
export default MyApp