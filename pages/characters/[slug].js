import Layout from '../../component/layout'
import slug from 'slug'

function CharacterDetail({ character }) {
  return (
    <Layout>
      <h1>{character.name}</h1>

      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const characters = await res.json()
  return {
    paths: characters.results.map((character) => {
      return { params: { slug: `${slug(character.name)}-${character.id}` } }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0]
  const res = await fetch('https://rickandmortyapi.com/api/character/' + id)
  const character = await res.json()
  return {
    props: {
      character
    }
  }
}

export default CharacterDetail
