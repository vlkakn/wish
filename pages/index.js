import Layout from '../component/layout'

function HomePage({ characters }) {
  return (
    <Layout>
      <h1>Welcome to Next.js!!</h1>

      <ul>
        {characters.results.map((character) => (
          <li>{character.name}</li>
        ))}
      </ul>
      <style jsx>{`
        h1 {
          color: blue;
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

export async function getStaticProps() {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const characters = await res.json()
  return {
    props: {
      characters
    }
  }
}

export default HomePage
