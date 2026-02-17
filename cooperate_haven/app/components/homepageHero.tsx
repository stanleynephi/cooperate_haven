/**create a hero section to be used in the homepage
 * layout will include a picture at the background
 */
import Link from "next/link"

export default function Hero() {
  /**create an image overlay using a div with a text layered on top. */
  return (
    <section className="relative h-[85vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/7139595/pexels-photo-7139595.jpeg')",
          }}
        />
        {/* Optional: dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
          Elevate Your Corporate Style
        </h1>

        <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-200">
          Affordable corporate dresses, shoes, and professional essentials
          delivered fast and conveniently to your doorstep.
        </p>

        {/* Single CTA Button */}
        <Link
          href="/clothes"
          className="mt-8 w-fit bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg"
        >
          Shop Now
        </Link>
      </div>
    </section>
  )
}
