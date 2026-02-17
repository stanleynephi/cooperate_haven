/**this is the landing page for the coperate haven. */
import Hero from "./components/homepageHero"
import { PackageSection } from "./components/packageSection"
import Trust from "./components/trustus"
import BrandCarousel from "./components/ui/carousel"
import FeaturedProducts from "./components/ui/featuredProduct"

export default function Home() {
  return (
    <>
      <Hero />
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-800 my-8">
        Our Packages and Offers
      </h1>
      <PackageSection />
      <FeaturedProducts />
      <BrandCarousel />
      <Trust />
    </>
  )
}
