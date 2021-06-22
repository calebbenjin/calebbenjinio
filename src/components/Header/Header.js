import Link from '@/components/Link'
import { Header, Nav, Toggle } from './HeaderStyle'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function Head() {
  return (
    <Header>
      <Nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Nav>
      <Toggle>
        <BsThreeDotsVertical />
      </Toggle>
    </Header>
  )
}





