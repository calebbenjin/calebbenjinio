import SectionTitle from './SectionTitle'
import styled from 'styled-components'

const data = [
  {
    id: 1,
    title: 'Frontend Engineer / Mentor',
    company: "Freelancer / Google Africa Developer Scholarship (GADS)2021",
    date: '2021 - current...',
    description:
      'Education convallis lacinia est et volutpat. Ut interdum lectus velit ac venenatis odio frina vivense auris tincidun diamanisi mollis rhoncus. Nam non ante conse malesuada. Quality interdum lectus odio erince imperdiet augue erat aliquer interdume turpis congue aliquam.',
  },
  {
    id: 2,
    title: 'Senior Frontend Engineer / Mentor',
    company: "FirstProfit LTD / Google Africa Developer Scholarship (GADS)2020",
    date: '2019 - 2020',
    description:
      'Education convallis lacinia est et volutpat. Ut interdum lectus velit ac venenatis odio frina vivense auris tincidun diamanisi mollis rhoncus. Nam non ante conse malesuada. Quality interdum lectus odio erince imperdiet augue erat aliquer interdume turpis congue aliquam.',
  },
  {
    id: 3,
    title: 'Frontend Developer / Instructor',
    company: "BitHub",
    date: '2018 - 2019',
    description:
      'Education convallis lacinia est et volutpat. Ut interdum lectus velit ac venenatis odio frina vivense auris tincidun diamanisi mollis rhoncus. Nam non ante conse malesuada. Quality interdum lectus odio erince imperdiet augue erat aliquer interdume turpis congue aliquam.',
  },
]

export default function ExperinceSection() {
  return (
    <Section>
      <SectionTitle title='EXPERIENCE' sub='WORKED @' />

      {data.map((item) => (
        <Card key={item.id}>
          <h3>{item.title}</h3>
          <p className='company'><span>@</span>{item.company}</p>
          <p className='date'>{item.date}</p>
          <p>{item.description}</p>
        </Card>
      ))}
    </Section>
  )
}

const Section = styled.section`
   margin: 4rem 0;
  padding: 3rem 0;
`

const Card = styled.section`
  position: relative;
  margin: 0 !important;
  border-left: solid 1px ${(props) => props.theme.colors.greyColor};
  padding-left: 5rem;
  padding-right: 6rem;
  /* padding-top: 2rem; */
  transition: all 0.2s ease-in;
  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 2rem;
    padding-right: 0rem;
  }
  h3 {
    font-size: 1.6rem;
    padding-top: 2.5rem;
    letter-spacing: 1.5px;
    color: ${(props) => props.theme.colors.primaryColor};
  }
  .date {
    margin-bottom: 0.7rem;
    font-size: 1.3rem;
    letter-spacing: 0px;
  }
  .company {
    margin: 0;
    margin: 0.7rem 0;
    font-size: 1.5rem;
    color: #fff;
    letter-spacing: 1px;
    span {
      color: ${props => props.theme.colors.primaryColor};
      font-size: 1.8rem;
    }
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
