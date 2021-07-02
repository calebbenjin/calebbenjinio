import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export default function Card({ article }) {
  return (
    <Link href='/articles/[id]'>
      <a>
        <CardStyle>
          <Image src={article.img} alt={article.title} />
          <div className='card_body'>
            <h4>{article.title} &rarr;</h4>
            <p>{article.body.slice(0, 100)}......</p>

            <span className='link'>Read More...</span>
          </div>
        </CardStyle>
      </a>
    </Link>
  )
}

const CardStyle = styled.div`
  background: ${(props) => props.theme.colors.darkColor};
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.57) 0px 9px 20px;
  overflow: hidden;

  .link {
    background: ${(props) => props.theme.colors.primaryColor};
    color: ${(props) => props.theme.colors.darkColor};
    padding: 5px;
    font-size: 1.3rem;
    font-weight: 700;
    transition: all 0.2s ease-in;
    &:hover {
      color: #fff;
      padding-right: 2rem;
    }
  }

  h4 {
    margin-bottom: 1rem;
  }
  .card_body {
    padding: 10px 20px;
  }

  @media ${(props) => props.theme.breakpoints.lg}  {
    .card_body {
      padding: 15px 20px;
    }
  }

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }
`
