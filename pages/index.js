import Layout from '../components/layout'
import { useAuth0 } from '@auth0/auth0-react'

function HomePage() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()

  const onSubmit = (e) => {
    e.preventDefault(e)
    console.log('tetiklendi')
  }

  return (
    <Layout>
      <p>Ana Sayfa içeriği</p>

      <form className="mt-10" onSubmit={onSubmit}>
        <textarea
          rows="3"
          className="border border-gray-300 rounded w-full block px-2 py-1"
        />

        <div className="mt-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <button className="bg-blue-600 text-white px-2 py-1 rounded">
                Gönder
              </button>
              <img src={user.picture} width={30} className="rounded-full" />
              <span>{user.name}</span>
              <button
                onClick={() =>
                  logout({ returnTo: process.env.NEXT_PUBLIC_URL })
                }
              >
                (Log Out)
              </button>
            </div>
          ) : (
            <button
              className="bg-blue-600 text-white px-2 py-1 rounded"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}
        </div>
      </form>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default HomePage
