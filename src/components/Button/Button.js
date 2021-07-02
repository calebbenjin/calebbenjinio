import styled from 'styled-components'
import Link from 'next/link'

export default function button({ title }) {
  return (
    <Button>
      <Link href='/'>
        <a>{title}</a>
      </Link>
    </Button>
  )
}

const Button = styled.button`
  box-shadow: rgba(0, 0, 0, 0.57) 0px 9px 20px;
  font-size: 1.5rem;
  background: ${(props) => props.theme.colors.primaryColor};
  border: transparent;
  padding: 15px 30px;
  border-radius: 6px;
  transition: all 0.4s ease-in;
  a {
    color: ${(props) => props.theme.colors.darkColor};
    font-weight: 700;
  }
  &:hover {
    transform: rotate(4deg);
    background: #fff;
    padding: 15px 40px;
  }
`
