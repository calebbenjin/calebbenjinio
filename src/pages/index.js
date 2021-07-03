import AboutSection from "@/components/AboutSection";
import LayoutPage from "@/components/Layout/Layout";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <LayoutPage >
      <AboutSection />
      <ProjectList />
    </LayoutPage>
  )
}
