/**footer component function
 * contains the navigation, company logo and a mission statement in a paragraph
 */
import Image from "next/image"
import Navigation from "./navigations"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#25287A] text-white px-12 py-16">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/**upper part company logo, mission statement and navigations */}
        {/* Left Side */}
        <div className="max-w-md space-y-6">
          <Image
            src="/logo.svg"
            alt="Corporate Haven"
            width={140}
            height={40}
          />

          <p className="text-sm text-gray-300 leading-relaxed">
            Our mission is to democratize computational drug discovery tools and
            empower researchers and organizations worldwide.
          </p>

          {/* Social Icon */}
          <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#25287A] transition">
            in
          </div>
        </div>
        <div className="flex flex-col space-y-4 text-lg font-medium">
          <Navigation />
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-500 my-10"></div>
      <div className="flex flex-col md:flex-row justify-between text-sm text-gray-300">
        <p>Copyright 2026 © Corporate Haven. All Rights Reserved</p>

        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
