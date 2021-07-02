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
            {/* <p>{item.description}</p> */}
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
  /* display: flex;
  justify-content: space-between;
  flex-flow: wrap row; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;

  @media ${props => props.theme.breakpoints.lg} {
    /* flex-flow: wrap column; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 10px;
  }
`

export const Card = styled.div`
  padding: 2rem 3rem;
  border: solid 1px ${(props) => props.theme.colors.greyColor};
  box-shadow: rgba(0, 0, 0, 0.57) 0px 9px 20px;
  border-radius: 6px;
  width: 100%;
  transition: all 0.4s ease-in;
  &:hover {
    background: #fff;
    transform: rotate(4deg);
    color: #333;
    .icon {
      /* color: #333; */
    }
  }

  h5 {
    margin: 1rem 0;
  }

  .icon {
    font-size: 4.5rem;
    color: ${(props) => props.theme.colors.primaryColor};
  }

  @media ${props => props.theme.breakpoints.lg} {
    width: 100%;
    padding: 1.3rem;
  }
`
