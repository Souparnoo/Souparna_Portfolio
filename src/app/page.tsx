import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Performance from '@/components/sections/Performance'
import CompetitiveExams from '@/components/sections/CompetitiveExams'
import CompetitiveProgramming from '@/components/sections/CompetitiveProgramming'
import SoftwareProjects from '@/components/sections/SoftwareProjects'
import ElectronicsProjects from '@/components/sections/ElectronicsProjects'
import CurrentWork from '@/components/sections/CurrentWork'
import AITransparency from '@/components/sections/AITransparency'
import GitHubSection from '@/components/sections/GitHubSection'
import ResumeSection from '@/components/sections/ResumeSection'
import Footer from '@/components/Footer'
import SoftwareTools from '@/components/sections/SoftwareTools'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Global background */}
      <div className="fixed inset-0 bg-bg-primary bg-grid pointer-events-none z-0" />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/3 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent-purple/3 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Performance />
        <CompetitiveExams />
        <CompetitiveProgramming />
        <SoftwareProjects />
        <ElectronicsProjects />
        <CurrentWork />
        <SoftwareTools />
        <AITransparency />
        <GitHubSection />
        <ResumeSection />
        <Footer />
      </div>
    </main>
  )
}
