import Navigation from './navigation'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Wish</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main className="main-container">{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
