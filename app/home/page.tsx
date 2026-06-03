import AboutMe from '@/components/featurewise/AboutMe'
import HeroPage from '@/components/featurewise/hero-page/HeroPage'
import Navbar from '@/components/featurewise/Navbar'
import RecentWork from '@/components/featurewise/RecentWork'
import ProjectsCertificatesPage from '@/components/featurewise/projectsCertificatesSection/ProjectsCertificatesPage'
import SkillMarquee from '@/components/featurewise/SkillMarquee'
import Services from '@/components/featurewise/Services'
import Reviews from '@/components/featurewise/client-review/Reviews'
import FAQ from '@/components/featurewise/faq/FAQ'
import Footer from '@/components/featurewise/Footer'

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroPage />
      <SkillMarquee />

      <ProjectsCertificatesPage />
      <AboutMe />
      <RecentWork />
      <Services />
      <Reviews />
      <FAQ />
      <Footer />

    </div>
  )
}

export default page