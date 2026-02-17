/**array to create the navigation links
 * links are in an array and later map to to the page
 * */

import Link from "next/link"

/**links array */
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Clothes",
    href: "/clothes",
  },
  {
    name: "Contact Us",
    href: "/contact us",
  },
  {
    name: "Cart",
    href: "/cart",
  },
]

/**function to map and return the navigation navigation icons will be included later */
export default function Navigation() {
  return (
    <nav className="flex items-center gap-8">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="group relative text-gray-200 hover:text-white font-medium transition duration-300"
          >
            {link.name}

            {/* Animated underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        )
      })}
    </nav>
  )
}
