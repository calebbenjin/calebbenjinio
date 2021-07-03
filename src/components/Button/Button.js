import styled from 'styled-components'
import Link from 'next/link'
import Rotate from 'react-reveal/Rotate'

export default function button({ title }) {
  return (
    <Button>
      <Link href='/contact'>
        <a>{title}</a>
      </Link>
    </Button>
  )
}

export function DownloadBtn({ title }) {
  return (
    <Rotate right>
      <ButtonDwn type='download'>{title}</ButtonDwn>
    </Rotate>
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
const ButtonDwn = styled(Button)`
  padding: 10px 20px;
  font-size: 1.3rem;
  margin: 0;
  display: none;
  @media ${props => props.theme.breakpoints.lg} {
    display: block;
  }
`
