import styled from 'styled-components'
import Button from './Button/Button'
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
        <div>
          <ul>
            <li>
              <span>Birthday:</span> 09 12 1978
            </li>
            <li>
              <span>Website:</span> calebbenjin.com
            </li>
            <li>
              <span>Phone:</span> +234 906 632 2383
            </li>
          </ul>
          <ul>
            <li>
              <span>Linkin:</span> 09 12 1978
            </li>
            <li>
              <span>Email:</span> calebbenjin.com
            </li>
            <li>
              <span>Twitter:</span> +234 906 632 2383
            </li>
          </ul>
        </div>
        <Button title='Hire Me' />
      </Box>
    </Section>
  )
}

const Section = styled.section`
  margin: 4rem 0;
`

const Text = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  /* letter-spacing: 0px */
`

const Box = styled.div`
  width: 80%;
  color: ${(props) => props.theme.colors.textColor};
  div {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    align-items: center;
    ul li {
      margin-bottom: 3rem;
      font-size: 1.3rem;
      span {
        font-weight: 700;
        color: #eee;
        margin-right: 1rem;
      }
    }

    @media ${(props) => props.theme.breakpoints.lg} {
      flex-flow: wrap column;
      align-items: start;
      width: 100%;

      ul li {
        margin-bottom: 1.5rem;
      }
    }
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
  }
`
