import type { AppProps } from 'next/app'
import "../styles/css/style.css";
import "../styles/css/bootstrap.min.css";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
