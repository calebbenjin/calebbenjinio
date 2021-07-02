import styled from 'styled-components'
import Button from './Button/Button'
import Icons from './Icons'
import SectionTitle from './SectionTitle'

export default function AboutSection() {
  return (
    <Section>
      <SectionTitle title='Caleb Benjamin' sub='FrontEnd/UX Engineer' />

      <Text>
        Hi, My name is Caleb Benjamin I am a Web Designer, and etiam accumsan
        scelerisque rhoncus. Nulla quis laorey velit drana. Pelteqle quisu
        velleopha retra congue. Nulla quis laoreet velit. Pelteqle quisu
        velleopha retra congue. Lorem ipsum nolan sithe cons eturadip liscing
        elit. Donec hendrerit sapien coner the consequat erose viverra at.
        Quality quis laorey velit. Pelteqle quisu velleopha retra the congue.
      </Text>

      <Box>
          <ul>
            <li>
              <span>Email:</span> contact@calebbenjin.dev
            </li>
            <li>
              <span>Phone:</span> +234 906 632 2383
            </li>
            <li>
              <span>Birthday:</span> 09 December
            </li>
          </ul>
          <Icons />
      </Box>
        <Button title='Hire Me' />
    </Section>
  )
}

const Section = styled.section`
  margin: 4rem 0;
`

const Text = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  letter-spacing: 1px;
  font-size: 1.5rem;
  margin-bottom: 4rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-bottom: 2rem;
  }
`

const Box = styled.div`
  width: 80%;
  color: ${(props) => props.theme.colors.textColor};
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
  margin-bottom: 3rem;
  ul li {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    list-style: none;
    span {
      font-weight: 700;
      color: #eee;
      margin-right: 1rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 30px;
    row-gap: 30px;
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
