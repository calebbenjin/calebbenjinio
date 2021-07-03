import React from 'react'
import LayoutPage from '@/components/Layout/Layout'
import CardList from '@/components/CardList'
import SectionTitle from '@/components/SectionTitle'
import { articles } from '@/components/data'
import styled from 'styled-components'

export default function BlogPage() {
  const [state, setState] = React.useState()

  if(!state) return (
    <LayoutPage>
      <Section>
        <Flex>
          <Title>Blog</Title>
          <div>
            <Text>I created this section with the hope that one day.</Text>
            <Text>I'll get my art together and start writing regularly.</Text>
            <Text>Untill then, this blank space will haunt me.</Text>
          </div>
        </Flex>
      </Section>
    </LayoutPage>
  )
  return (
    <LayoutPage>
      <Section>
        <SectionTitle title='Latest POST' sub='Blog' />
        <CardList articles={state} />
      </Section>
    </LayoutPage>
  )
}

const Section = styled.div`
  padding: 3rem 0;
  margin: 3rem 0;
`

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 30px;
  row-gap: 30px;
  @media ${(props) => props.theme.breakpoints.md} {
    /* flex-flow: wrap column; */
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 10px;
    row-gap: 10px;
  }
`

const Title = styled.h1`
  font-size: 7rem;
  margin: 0;
  color: #fff;
  letter-spacing: 1.5px;
  line-height: 1.3;
  margin-bottom: 3rem;
  font-family: ${props => props.theme.fonts.heading}
`;

const Text = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: #fff;
  letter-spacing: 1.5px;
  line-height: 1.3;
  margin-bottom: 0rem;
  font-family: ${props => props.theme.fonts.heading}
`;
