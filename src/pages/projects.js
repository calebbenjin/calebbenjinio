import LayoutPage from '@/components/Layout/Layout'
import SectionTitle from '@/components/SectionTitle'
import styled from 'styled-components'
import {projects} from '@/components/data'
import Link from 'next/link'
import { FaRegEye, FaCode } from 'react-icons/fa'
import ProjectList from '@/components/ProjectList'
// import Image from 'next/image'

export default function projectsPage() {
  return (
    <LayoutPage>
      <ProjectList />
    </LayoutPage>
  )
}


