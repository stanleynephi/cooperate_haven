/**import the navigation link to create the header */
import Navigation from "./navigations"
export default function Header() {
  return (
    <header className="bg-[#25287A] text-white px-8 md:px-16 py-5 shadow-md sticky top-0 z-5">
      <div className="flex items-center justify-between">
        {/* Logo / Brand Name */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          Corporate Haven
        </h1>

        {/* Navigation */}
        <Navigation />
      </div>
    </header>
  )
}
