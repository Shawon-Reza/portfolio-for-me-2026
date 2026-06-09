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
import DarkVeil from '@/components/ui/DarkVeil'

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section
        className="fixed inset-0 h-screen w-full saturate-150 contrast-125 z-90 mix-blend-screen   "
      >
        <Navbar />
      </section>


      {/* ============== Hero Page ========= */}
      <section
        id="hero"
        className="relative overflow-hidden">
        {/* <div className="pointer-events-none absolute inset-0 z-0 h-screen w-full opacity-85 saturate-150 contrast-125 mix-blend-screen">
          <DarkVeil
            hueShift={185}
            noiseIntensity={0.02}
            scanlineIntensity={0.00}
            speed={0.5}
            scanlineFrequency={7}
            warpAmount={0.16}
          />
        </div> */}

        <div className="relative z-10">
          <HeroPage />
          <SkillMarquee />
        </div>
      </section>
      <section
        id="projects"
      >
        <ProjectsCertificatesPage />

      </section>
      <section
        id="about"
      >
        <AboutMe />
      </section>
      <section
        id="work"
      >
        <RecentWork />
      </section>
      <section
        id="services"
      >
        <Services />
      </section>
      <section
        id="testimonials"
      >
        <Reviews />
      </section>
      <section
        id="contact"
      >
        <FAQ />
      </section>





      <section
        id="contact"
        className="relative overflow-hidden">
        {/* <div className="pointer-events-none absolute inset-0 z-0 h-screen w-full opacity-85 saturate-150 contrast-125 mix-blend-screen">
          <DarkVeil
            hueShift={185}
            noiseIntensity={0.02}
            scanlineIntensity={0.00}
            speed={0.5}
            scanlineFrequency={7}
            warpAmount={0.16}
          />
        </div> */}
        <Footer />
      </section>


    </div>
  )
}

export default page