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
import DarkVeil from '@/components/ui/DynamicDarkVeil'
import RevealAnimation from '@/components/RevealAnimation'
import MagicRings from './../../components/MagicRings';
import ZoomInReavelComponents from '@/components/featurewise/ZoomInReavelComponents'
import ServicesMarquee from '@/components/featurewise/ServicesMarquee'
import ContactsPage from '@/components/featurewise/ContactsPage'
const page = () => {
  return (
    <div className="min-h-screen bg-[#090E19] text-white">
      <section
        className="   "
      >
        <Navbar />
      </section>


      {/* ============== Hero Page ========= */}
      <section
        id="hero"
        className="relative overflow-hidden mt-16"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 opacity-85 saturate-150 contrast-125 mix-blend-screen">
          <DarkVeil
            hueShift={185}
            noiseIntensity={0.02}
            scanlineIntensity={0.0}
            speed={0.5}
            scanlineFrequency={7}
            warpAmount={0.16}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <HeroPage />
          <ServicesMarquee />
        </div>
      </section>

      <RevealAnimation>
        <section
          id="about"
        >
          <AboutMe />
        </section>
      </RevealAnimation>

      <ZoomInReavelComponents>
        <section
          id="certificates"
        >
          <ProjectsCertificatesPage />

        </section>
      </ZoomInReavelComponents>





      {/* <section
        id="work"
      >
        <RecentWork />
      </section> */}



      <section
        id="projects"
      >
        <Services />
      </section>



      {/* <section
        id="testimonials"
      >
        <Reviews />
      </section> */}


      <RevealAnimation>
        <section
          id="faq"
        >
          <FAQ />
        </section>
      </RevealAnimation>




      <section
        id="contact"
      >
        <ContactsPage />
      </section>


      <section
        className="relative overflow-hidden"
      >
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

        <div
          className="pointer-events-none absolute inset-0 z-0 h-screen w-full opacity-85 saturate-150 contrast-125 mix-blend-screen"
        //  style={{ width: '600px', height: '400px', position: 'relative' }}
        >
          <MagicRings
            color="#8c69ae"
            colorTwo="#4144d7"
            ringCount={4}
            speed={0.5}
            attenuation={10}
            lineThickness={2}
            baseRadius={0.35}
            radiusStep={0.1}
            scaleRate={0.1}
            opacity={1}
            blur={0}
            noiseAmount={0.1}
            rotation={0}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={false}
            mouseInfluence={0.2}
            hoverScale={1.2}
            parallax={0.05}
            clickBurst={false}
          />
        </div>

        <Footer />

      </section>


    </div >
  )
}

export default page