import HeroPage from '@/components/featurewise/hero-page/HeroPage'
import Navbar from '@/components/featurewise/Navbar'

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroPage />
    </div>
  )
}

export default page