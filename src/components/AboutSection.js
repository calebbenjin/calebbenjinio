import styled from 'styled-components'
import Button from './Button/Button'
import Icons from './Icons'
import SectionTitle from './SectionTitle'

export default function AboutSection() {
  return (
    <Section>
      {/* <SubTitle>Frontend/UX Engineer</SubTitle> */}
      <Title><small>Hello,</small> I&apos;m Caleb, the Multi-disciplinary JavaScript Engineer</Title>

      <Text>I&apos;m a Nigeria-based frontend engineer who care about creating thoughtful digital experiences that lie at interaction of beauty, funtional, maintainable, scaleable, and context. I have four years of experience using <span>JavaScript, ReactJS, NextJS, TypeScript Css-in-JS, Styled-Component, Redux, Unit testing, and StoryBook</span> to create digital products for Organizations of all Sizes.
      </Text>

      <Box>
        <h4>Wanna say hey?</h4>
        <Text>I&apos;d love to hear from you.</Text>
        <Icons />
      </Box>
        {/* <Button title='Hire Me' /> */}
    </Section>
  )
}

const Section = styled.section`
  margin: 4rem 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: #ccc;
  letter-spacing: 1.5px;
  line-height: 1.3;
  margin-bottom: 3rem;
  font-family: ${props => props.theme.fonts.heading};
  
  small {
    font-size: 5rem;
    color: #fff;
  }
`;

const SubTitle = styled.h4`
  color: ${props => props.theme.colors.primaryColor};
  letter-spacing: 2px;
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
  font-family: ${props => props.theme.fonts.mainFont}
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  letter-spacing: 1px;
  font-size: 1.8rem;
  margin-bottom: 3rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-bottom: 2rem;
  }
  span {
    color: #fff;
  }
  small {
    font-size: 3rem;
    color: #fff;
  }
`

const Box = styled.div`
  width: 80%;
  color: ${(props) => props.theme.colors.textColor};
  /* display: grid;
  grid-template-columns: 1fr;
  column-gap: 30px;
  row-gap: 30px; */
  /* margin-bottom: 3rem; */
  h4 {
    margin-bottom: 0.5rem;
    color: #fff;
    margin-top: 5rem;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    /* display: grid;
    grid-template-columns: 1fr;
    column-gap: 30px;
    row-gap: 30px; */
    margin-bottom: 1rem;
    ul li {
      margin-top: 1.5rem;
    }
  }
@media ${(props) => props.theme.breakpoints.lg} {
  width: 100%;
  margin-bottom: 5rem;
}
`
