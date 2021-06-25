import { useRouter } from 'next/router'
// import Image from 'next/image'
import {projects} from '@/components/data'
import Layout from '@/components/Layout/Layout'
import styled from 'styled-components'
import Link from 'next/link'
import { FaRegEye, FaCode } from 'react-icons/fa'


export default function Projects() {
  const router = useRouter()

  console.log(projects)

  const data = projects[router.query.id]
  
  if(!data) return <p>Page Loading...</p>
  return (
    <Layout>
      <ProjectCard>
        <Box>
          <Img src={data.image} alt="title" />
        </Box>
        <Flex>
          <h3>{data.title}</h3>
          <Tags>
            <p>{data.tags.map((item, i) => (
              <span key={i}>{item}</span>
            ))}</p>
          </Tags>
        </Flex>
        <p>{data.description}</p>

        <Tags>
          <h6>App Core Features</h6>
          <ul>
          {data.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
            
          </Tags>

          <LinkBox>
            <Link href={data.visit}>
              <a className="link">View App <FaRegEye className="icon" /></a>
            </Link>
            <Link href={data.source}>
              <a className="link">Source Code <FaCode className="icon" /></a>
            </Link>
          </LinkBox>
      </ProjectCard>
    </Layout>
  )
}




const ProjectCard = styled.div`
  
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
  .link {
    display: flex;
    align-items: center;
    margin-left: 3rem;
    font-size: 1.6rem;
    background: ${props => props.theme.colors.primaryColor};
    padding: 7px 15px;
    color: #333;
    font-size: 1.3rem;
    font-weight: 700;
    border-radius: 4px;
    transition: all 0.2s ease-in;
    &:hover {
      background: #fff;
    }
    .icon {
      margin-left: 10px;
      font-size: 2rem;
    }
  }
`;


const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

const Tags = styled.div`
  span {
    color: #fff;
    margin-right: 2rem;
    background: #fff;
    padding: 7px 14px;
    border-radius: 2px;
    font-weight: 700;
    color: #333;
    transition: all 0.2s ease-in;
    &:hover {
      background: ${props => props.theme.colors.primaryColor};
    }
  }

  h6 {
    border-bottom: solid 1px ${(props) => props.theme.colors.greyColor};
    padding-bottom: 1rem;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Box = styled.div`
  height: 300px;
  overflow: hidden;
  object-fit: contain;
  position: relative;
`;