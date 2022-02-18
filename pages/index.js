import Layout from '../components/layout'
import { useAuth0 } from '@auth0/auth0-react'

function HomePage() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()

  return (
    <Layout>
      <p>Ana Sayfa içeriği</p>
      {isAuthenticated ? 'yes ' + user.name : 'no'}
      {console.log(user)}
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={() => logout({ returnTo: process.env.NEXT_PUBLIC_URL })}>
        Log Out
      </button>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default HomePage
