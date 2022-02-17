import Link from 'next/link'

function Navigation() {
  return (
    <nav className="main-container space-x-4">
      <Link href="/">
        <a>Ana sayfa</a>
      </Link>
      <Link href="/about">
        <a>Hakkımda</a>
      </Link>
    </nav>
  )
}

export default Navigation
