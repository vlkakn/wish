import Layout from '@/components/layout'
import { useState } from 'react'
import Auth from '@/components/Auth'

function HomePage() {
  const [text, textSet] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault(e)

    const response = await fetch('/api/wish', {
      method: 'POST',
      body: JSON.stringify({ text, userToken }),
      headers: {
        'Content-type': 'application/json'
      }
    })

    const data = await response.json()
  }

  return (
    <Layout>
      <p>Ana Sayfa içeriği</p>

      <form className="mt-10" onSubmit={onSubmit}>
        <textarea
          rows="3"
          className="border border-gray-300 rounded w-full block px-2 py-1"
          onChange={(e) => textSet(e.target.value)}
        />

        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="bg-blue-600 text-white px-2 py-1 rounded"
            >
              Gönder
            </button>
          </div>
        </div>
      </form>
      <Auth />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default HomePage
