import Layout from '../components/layout'

function HomePage() {
  return <Layout>Ana Sayfa içeriği</Layout>
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default HomePage
