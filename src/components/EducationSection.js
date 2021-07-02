import SectionTitle from './SectionTitle'
import styled from 'styled-components'

const data = [
  {
    id: 1,
    title: 'Master In Computer Science',
    date: '2014 - 2016',
    description:
      'Education convallis lacinia est et volutpat. Ut interdum lectus velit ac venenatis odio frina vivense auris tincidun diamanisi mollis rhoncus. Nam non ante conse malesuada. Quality interdum lectus odio erince imperdiet augue erat aliquer interdume turpis congue aliquam.',
  },
  {
    id: 2,
    title: 'Studied at Harvard University',
    date: '2014 - 2016',
    description:
      'Education convallis lacinia est et volutpat. Ut interdum lectus velit ac venenatis odio frina vivense auris tincidun diamanisi mollis rhoncus. Nam non ante conse malesuada. Quality interdum lectus odio erince imperdiet augue erat aliquer interdume turpis congue aliquam.',
  },
  {
    id: 3,
    title: 'Studied at MBA Hight School',
    date: '2014 - 2016',
    description:
      'Education convallis lacinia est et volutpat. Ut interdum lectus velit ac venenatis odio frina vivense auris tincidun diamanisi mollis rhoncus. Nam non ante conse malesuada. Quality interdum lectus odio erince imperdiet augue erat aliquer interdume turpis congue aliquam.',
  },
]

export default function EducationSection() {
  return (
    <Section>
      <SectionTitle title='EDUCATIONS' sub='RESUME' />

      {data.map((item) => (
        <Card key={item.id}>
          <h3>{item.title}</h3>
          <p className='date'>{item.date}</p>
          <p>{item.description}</p>
        </Card>
      ))}
    </Section>
  )
}

const Section = styled.section`
  margin: 4rem 0;
  padding: 4rem 0;
  border-top: solid 1px ${(props) => props.theme.colors.greyColor};
`

const Card = styled.section`
  position: relative;
  margin: 0 !important;
  border-left: solid 1px ${(props) => props.theme.colors.greyColor};
  padding-left: 5rem;
  padding-right: 6rem;
  /* padding-top: 2rem; */
  transition: all 0.2s ease-in;
  h3 {
    font-size: 1.6rem;
    padding-top: 2.5rem;
  }
  .date {
    margin: 0.7rem 0;
    font-size: 1.3rem;
    letter-spacing: 0px;
  }
  p {
    margin: 0;
    font-size: 1.3rem;
    letter-spacing: 1px;
    line-height: 1.8;
  }
  &::before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.greyColor};
    position: absolute;
    left: -0.8rem;
    top: 3rem;
    transition: all 0.2s ease-in;
  }

  &:hover {
    &::before {
      background: ${(props) => props.theme.colors.primaryColor};
    }
  }
`
