import styled from 'styled-components'
import Card from './Card'

export default function CardLit({ articles }) {
  return (
    <>
      <CardList>
        {articles.map((article) => (
          <Card article={article} />
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
  /* border: solid 1px ${(props) => props.theme.colors.greyColor}; */
  /* flex-grow: wrap; */

  a {
    color: #fff;
  }
`
