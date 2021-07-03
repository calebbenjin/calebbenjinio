import styled from 'styled-components'
import Link from 'next/link'
import { AiFillLinkedin, AiOutlineTwitter, AiFillInstagram, AiFillGithub } from 'react-icons/ai'

export default function Icons() {
  return (
    <IconDiv>
      <Link href="/">
        <a>
          <Icon>
            <AiFillLinkedin className="icon linkedin" />
          </Icon>
        </a>
      </Link>
      <Link href="/">
        <a>
          <Icon>
            <AiOutlineTwitter className="icon twitter" />
          </Icon>
        </a>
      </Link>
      <Link href="/">
        <a>
          <Icon>
            <AiFillInstagram className="icon instagram" />
          </Icon>
        </a>
      </Link>
      <Link href="/">
        <a>
          <Icon>
            <AiFillGithub className="icon github" />
          </Icon>
        </a>
      </Link>
    </IconDiv>
  )
}

const IconDiv = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1px;
  row-gap: 10px;
  margin-top: -1rem;
  .icon {
    font-size: 2.5rem;
    /* color: ${props => props.theme.colors.greyColor}; */
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
  }
`;

const Icon = styled.div`
  background: ${(props) => props.theme.colors.Color};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.57) 0px 9px 20px;
  border: solid 1px ${(props) => props.theme.colors.greyColor};
  transition: all 0.4s ease-in;
  &:hover {
    background: #fff;
    .icon {
      color: ${(props) => props.theme.colors.darkColor};
    }
  }
`;
