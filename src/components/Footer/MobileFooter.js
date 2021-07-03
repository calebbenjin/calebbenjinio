import styled from 'styled-components'
import Link from 'next/link'
import { IoHome, IoFolderOpenOutline, IoBookOutline, IoNewspaperOutline } from 'react-icons/io5'
import { IoIosContact} from 'react-icons/io'

export default function MobileFooter() {
  return (
    <Footer>
    
      <Link href="/">
        <a>
          <IoHome className="icon" />
          <p>Home</p>
        </a>
      </Link>
      <Link href="/resume">
        <a>
          <IoIosContact className="icon" />
          <p>About me</p>
        </a>
      </Link>
      {/* <Link href="/projects">
        <a>
          <IoFolderOpenOutline className="icon" />
          <p>Projects</p>
        </a>
      </Link> */}
      <Link href="/blog">
        <a>
          <IoBookOutline className="icon" />
          <p>Blog</p>
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <IoNewspaperOutline className="icon" />
          <p>Contact</p>
        </a>
      </Link>
    </Footer>
  )
}



const Footer = styled.footer`
  display: none;
  @media ${(props) => props.theme.breakpoints.lg} {
    border-top: solid 1px ${(props) => props.theme.colors.greyColor};
    z-index: 9;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 15px;
    row-gap: 30px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${props => props.theme.colors.darkColor};
    padding: 1rem 10px;
    box-shadow: rgba(0, 0, 0, 3.97) 0px 6px 40px;
    a {
      text-align: center;
      p {
        margin: 0;
        font-size: 1rem;
      }
    }
    .icon {
      font-size: 2.5rem;
      color: #fff;
      color: ${props => props.theme.colors.primaryColor};
    }
  }
`;
