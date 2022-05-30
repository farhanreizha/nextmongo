import Link from 'next/link'
import NavList from './NavList'

const list = [
  { children: 'Home', href: '/' },
  { children: 'Add Blog', href: '/add-blog' },
]

const Navigation = () => (
  <nav className='bg-gray-400 py-4'>
    <ul className='flex justify-around'>
      {list.map((list) => (
        <NavList key={list.children}>
          <Link href={list.href}>{list.children}</Link>
        </NavList>
      ))}
    </ul>
  </nav>
)

export default Navigation
