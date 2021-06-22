import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import { MdLocationCity } from 'react-icons/md'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiSass } from 'react-icons/di'
import { SiJavascript, SiTypescript, SiReact, SiRedux, SiJest, SiGraphql, SiFirebase } from 'react-icons/si'

const stack = [
  {
    id: 1,
    icon: <AiFillHtml5 />,
    title: 'HTML/JSX',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, perferendis!',
  },
  {
    id: 2,
    icon: <DiSass />,
    title: 'SASS/CSS-IN-JS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, perferendis!',
  },
  {
    id: 3,
    icon: <SiJavascript />,
    title: 'JavaScript[ES6]',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, perferendis!',
  },
  {
    id: 4,
    icon: <SiTypescript />,
    title: 'TypeScript',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, perferendis!',
  },
  {
    id: 5,
    icon: <SiReact />,
    title: 'React / NextJS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, perferendis!',
  },
  {
    id: 6,
    icon: <SiRedux />,
    title: 'Context-api / Redux',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, perferendis!',
  },
  {
    id: 7,
    icon: <SiJest />,
    title: 'Unit-Testing',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, perferendis!',
  },
  {
    id: 8,
    icon: <SiGraphql />,
    title: 'GraphQl',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, perferendis!',
  },
  {
    id: 9,
    icon: <SiFirebase />,
    title: 'Firebase / Firestore',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, perferendis!',
  },

]

export default function TechStack() {
  return (
    <Section>
      <SectionTitle sub='Laugauge & Frameworks' title='Tech Stack' />

      <Flex>
        {stack.map((item) => (
          <Card key={item.id}>
            <i className="icon">{item.icon}</i>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </Card>
        ))}
      </Flex>
    </Section>
  )
}

export const Section = styled.section`
  margin: 2rem 0;
  padding: 5rem 0;

  border-top: solid 1px ${(props) => props.theme.colors.greyColor};
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap row;

  @media ${props => props.theme.breakpoints.lg} {
    /* flex-flow: wrap column; */
    width: 100%;
  }
`

export const Card = styled.div`
  padding: 3rem;
  border: solid 1px ${(props) => props.theme.colors.greyColor};
  width: 30%;
  margin: 1rem auto;

  h5 {
    margin: 1rem 0;
  }

  .icon {
    font-size: 4rem;
    color: ${(props) => props.theme.colors.primaryColor};
  }

  @media ${props => props.theme.breakpoints.lg} {
    width: 46%;
    padding: 1.3rem;
  }
`
