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
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
  .icon {
    font-size: 3rem;
    color: ${props => props.theme.colors.darkColor};
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;

    ul li {
      margin-bottom: 1.5rem;
    }
  }
`;

const Icon = styled.div`
  background: ${(props) => props.theme.colors.primaryColor};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.57) 0px 9px 20px;
  transition: all 0.4s ease-in;
  &:hover {
    background: #fff;
    .linkedin {
      color: #0e76a8;
    }
    .twitter {
      color: #00acee;
    }
    .instagram {
      color: #cd486b;
    }
    .github {
      color: #4078c0;
    }
  }
`;
