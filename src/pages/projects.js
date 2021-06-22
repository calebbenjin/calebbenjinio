import LayoutPage from '@/components/Layout/Layout'
import SectionTitle from '@/components/SectionTitle'
import styled from 'styled-components'
import {projects} from '@/components/data'
import Link from 'next/link'
// import Image from 'next/image'

export default function projectsPage() {
  return (
    <LayoutPage>
      <Section>
        <SectionTitle sub='TAKE A LOOK AT' title='PROJECTS' />

        <Flex>
          {projects.map((item) => (
            <Card key={item.id}>
              <Image src={item.image} />
              <div className='content'>
                <h3>{item.title}</h3>
                {/* <p>{item.description}</p> */}
                <Tags>
                  {item.tags.map((tag, i) => (
                    <p key={i}>{tag}</p>
                  ))}
                </Tags>
                <Link href={item.source}>
                  <a className="link">Learn more</a>
                </Link>
              </div>
            </Card>
          ))}
        </Flex>
      </Section>
    </LayoutPage>
  )
}

const Section = styled.div`
  padding: 3rem 0;
  margin: 3rem 0;
`

const Flex = styled.div`
  display: flex;
  flex-flow: wrap row;
`

const Tags = styled.div`
  display: flex;
  flex-flow: wrap row;
  /* justify-content: space-between; */
  p {
    margin: 0;
    margin-bottom: 1.2rem;
    margin-right: 2rem;
    background: ${props => props.theme.colors.darkColor};
    padding: 2px 10px;
    border-radius: 4px;
  }
`

const Image = styled.img`
  width: 90%;
  object-fit: cover;
`;

const Card = styled.div`
  /* display: flex; */
  width: 50%;
  margin-bottom: 6rem;
  position: relative;
  h3 {
    margin: 10px 0;
  }
  .content {
    background: rgba(0,0,0,0.7);
    position: absolute;
    bottom: -3rem;
    width: 90%;
    padding: 1rem;
    .link {
      font-size: 1.5rem;
      border-radius: 4px;
      /* background: #fff; */
      color: #fff;
      /* padding: 5px 30px; */
      text-align: right;
    }
  }
`
