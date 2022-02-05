import Layout from '../component/layout'

function HomePage() {
  return (
    <Layout>
      <h1>Welcome to Next.js!!</h1>

      <style jsx>{`
        h1 {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
