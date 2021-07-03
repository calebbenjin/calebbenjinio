import SectionTitle from '@/components/SectionTitle'
import styled from 'styled-components'
import {projects} from '@/components/data'
import Link from 'next/link'
import { FaRegEye, FaCode } from 'react-icons/fa'
import Card from '@/components/ProjectCard'

export default function projectsPage() {
  return (
      <Section>
        <SectionTitle sub='Browse my lastest works' title='I bring my critical thinking skills and eye for details to create compelling websites, products and experience.' />

        <Flex>
          {projects.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Flex>
      </Section>
  )
}

const Section = styled.div`
  padding: 3rem 0;
  margin: 3rem 0;
`

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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


