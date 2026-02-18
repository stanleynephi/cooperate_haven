import Image from "next/image"

export default function About() {
  return (
    <section className="relative bg-white py-16 px-6 md:px-16 overflow-hidden">
      {/* Gray Overlay */}
      <div className="absolute inset-0 bg-gray-900/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-gray-700 leading-relaxed space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Our Brand
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            repellat saepe beatae eum magni illo voluptate? Quod corrupti
            explicabo, beatae, aperiam possimus eveniet eaque, id dolore modi
            numquam laboriosam corporis!
          </p>

          <p>
            This is a great space to write long text about your company and your
            services. Talk about your team, your mission, and what makes your
            fashion brand stand out from competitors.
          </p>

          <p>
            Tell visitors the story behind your clothing line and how you bring
            confidence and elegance through every design.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg"
              alt="Fashion Model"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
