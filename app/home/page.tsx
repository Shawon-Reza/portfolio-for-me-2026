import HeroPage from '@/components/featurewise/hero-page/HeroPage'
import Navbar from '@/components/featurewise/Navbar'
import ProjectsCertificatesPage from '@/components/featurewise/projectsCertificatesSection/ProjectsCertificatesPage'
import SkillMarquee from '@/components/featurewise/SkillMarquee'

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroPage />
      <SkillMarquee />
      <ProjectsCertificatesPage />
    </div>
  )
}

export default page