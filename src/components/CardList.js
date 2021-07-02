import styled from 'styled-components'
import Card from './Card'

export default function CardLit({ articles }) {
  return (
    <>
      <CardList>
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </CardList>
    </>
  )
}

const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 30px;
    row-gap: 30px;
  }

  a {
    color: #fff;
  }
`
