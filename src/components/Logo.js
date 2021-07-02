import styled from 'styled-components'
import { FaCode } from 'react-icons/fa'
import Rotate from 'react-reveal/Rotate'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href='/'>
      <a>
        <Rotate top left>
          <LogoStyle>
            <span>
              <FaCode />
            </span>{' '}
            Calebbenjin
          </LogoStyle>
        </Rotate>
      </a>
    </Link>
  )
}

const LogoStyle = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  z-index: 9;
  color: ${(props) => props.theme.colors.primaryColor};
  span {
    font-size: 3.5rem;
    margin-top: 10px;
    margin-right: 0.5rem;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 1.5rem;
    span {
      font-size: 2.5rem;
      margin-top: 5px;
      margin-right: 0.5rem;
    }
  }
`
