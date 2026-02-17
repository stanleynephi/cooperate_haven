/**use props to enable cards to be created dynamically. */
import { PackageCardProp } from "../lib/definition"

function PackageCard(prop: PackageCardProp) {
  return (
    <div className="bg-[#2C2C7A] text-white rounded-2xl p-6 m-5 shadow-lg max-w-sm text-center h-80 transition-transform duration-500 ease-in-out hover:scale-105">
      {/**item name details */}
      <h1 className="text-xl font-bold mb-3">{prop.packageTitle}</h1>
      {/**list of items in the package */}
      <ul className="list-disc list-inside mb-4 text-left">
        {prop.packageItems.map((item, idx) => (
          <li key={idx}> {item}</li>
        ))}
      </ul>
      <p className="text-lg font-semibold mb-4">{prop.price}</p>
    </div>
  )
}

export { PackageCard }
