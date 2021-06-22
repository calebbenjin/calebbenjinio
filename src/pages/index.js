import AboutSection from "@/components/AboutSection";
import LayoutPage from "@/components/Layout/Layout";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <LayoutPage >
      <AboutSection />
      <TechStack />
    </LayoutPage>
  )
}
