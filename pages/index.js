import Link from 'next/link'
import Layout from '../component/layout'
import slug from 'slug'

function HomePage({ characters }) {
  return (
    <Layout>
      <h1>Rick and Morty</h1>

      <h1 className="text-3xl font-bold underline bg-blue-100">Hello world!</h1>

      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>
            <Link
              href="/characters/[slug]"
              as={`/characters/${slug(character.name)}-${character.id}`}
            >
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
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
