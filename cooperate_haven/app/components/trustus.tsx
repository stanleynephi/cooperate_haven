/**create a section using icons to ensure trust, reliabilty and customer relations */

import { RefreshCcw, Lock, Umbrella } from "lucide-react"

export default function Trust() {
  return (
    <section className="bg-gray-200 py-20 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {/* Free Shipping */}
        <div className="flex flex-col items-center space-y-6">
          <RefreshCcw className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
          <p className="text-lg tracking-widest text-gray-800">
            Free Shipping and Returns
          </p>
        </div>

        {/* Secure Payments */}
        <div className="flex flex-col items-center space-y-6">
          <Lock className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
          <p className="text-lg tracking-widest text-gray-800">
            Secured Payments
          </p>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col items-center space-y-6">
          <Umbrella className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
          <p className="text-lg tracking-widest text-gray-800">
            Customer Service
          </p>
        </div>
      </div>
    </section>
  )
}
