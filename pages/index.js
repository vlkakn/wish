import Link from 'next/link'
import Layout from '../component/layout'
import slug from 'slug'
import { Box, Flex, Square, Center, Text } from '@chakra-ui/react'

function HomePage({ characters }) {
  return (
    <Layout>
      <h1>Rick and Morty</h1>
      <Flex color="white">
        <Center w="100px" bg="green.500">
          <Text>Box 1</Text>
        </Center>
        <Square bg="blue.500" size="150px">
          <Text>Box 2</Text>
        </Square>
        <Box flex="1" bg="tomato">
          <Text>Box 3</Text>
        </Box>
      </Flex>
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
