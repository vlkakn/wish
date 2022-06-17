import '@/styles/global.css'
import { Auth0Provider } from '@auth0/auth0-react'

export default function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-f8dpi8va.us.auth0.com"
      clientId="LBksNy2QGfJGrsqEeSDoyUUsvYk5pQoE"
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}
