/**import the packagecard function and pass the package list */
import { PackageCard } from "./packagecard"

function PackageSection() {
  const packages = [
    {
      packageTitle: "Corporate Grooming Pack",
      packageItems: [
        "1 White Shirt",
        "1 Undershirt",
        "Collar Stays",
        "Mini Stain Remover",
      ],
      price: "GHS 120",
    },
    {
      packageTitle: "Emergency Corporate Kit",
      packageItems: [
        "Mini Deodorant",
        "Stain Remover Pen",
        "Handkerchief",
        "Shoe Polish Sponge",
      ],
      price: "GHS 90",
    },
    {
      packageTitle: "Travel Kit",
      packageItems: [
        "1 White Shirt (wrinkel-free recommended)",
        "1 Mini Iron / Steamer spray",
        "Shoe polish sponge",
        "Mini deodorant",
        "Stain remover pen",
      ],
      price: "GHS 150",
    },
  ]

  /**return function and pass the package to the packageCard */
  return (
    <div className="flex flex-wrap justify-center gap-3 p-7">
      {packages.map((pkg, idx) => (
        <div key={idx} className="flex-1 min-w-[280px] max-w-[400px]">
          <PackageCard {...pkg} />
        </div>
      ))}
    </div>
  )
}

export { PackageSection }
