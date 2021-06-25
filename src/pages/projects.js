import LayoutPage from '@/components/Layout/Layout'
import SectionTitle from '@/components/SectionTitle'
import styled from 'styled-components'
import {projects} from '@/components/data'
import Link from 'next/link'
import { FaRegEye, FaCode } from 'react-icons/fa'
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
                <h5>{item.title} &rarr;</h5>
                {/* <p>{item.description}</p> */}
                <Tags>
                  {item.tags.map((tag, i) => (
                    <p key={i}>{tag}</p>
                  ))}
                </Tags>
                <Link href={`/project/${item.title}`}>
                  <a className="link">View more <FaRegEye className="icon" /> </a>
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

const Tags = styled.div`
  display: flex;
  flex-flow: wrap row;
  /* justify-content: space-between; */
  p {
    margin: 0;
    margin-bottom: 1.2rem;
    margin-top: 1rem;
    margin-right: 2rem;
    background: #fff;
    font-size: 1.2rem;
    color: #333;
    padding: 2px 10px;
    border-radius: 2px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
`;

const Card = styled.div`
  /* width: 50%; */
  /* margin-bottom: 6rem; */
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.57) 0px 9px 20px;
  h5 {
    margin-top: 1rem;
  }
  .content {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 2rem;
    .link {
      display: flex;
      align-items: center;
      width: 38%;
      text-align: center;
      font-size: 1.3rem;
      border-radius: 2px;
      background: ${props => props.theme.colors.primaryColor};
      color: #333;
      padding: 5px 10px;
      font-weight: 700;
      text-align: right;
      transition: all 0.2s ease-in;
      &:hover {
        background: #fff;
      }
      .icon {
        margin-left: 10px;
        font-size: 2rem;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`
