import React from 'react'
import { Coffee } from 'lucide-react'
import Link from 'next/link'

const menuCategories = [
  {
    name: "Hot Coffee",
    items: [
      { name: "Espresso", price: "$4.50", description: "Rich and bold single shot" },
      { name: "Cappuccino", price: "$5.50", description: "Espresso with steamed milk foam" },
      { name: "Latte", price: "$5.00", description: "Espresso with steamed milk" },
      { name: "Americano", price: "$4.75", description: "Espresso with hot water" }
    ],
    icon: <Coffee className="w-6 h-6" />
  },
  {
    name: "Cold Drinks",
    items: [
      { name: "Iced Latte", price: "$5.50", description: "Chilled espresso with cold milk" },
      { name: "Frappuccino", price: "$6.50", description: "Blended coffee with cream" },
      { name: "Cold Brew", price: "$5.75", description: "24-hour steeped coffee" },
      { name: "Iced Americano", price: "$5.00", description: "Chilled espresso with water" }
    ],
    icon: <Coffee className="w-6 h-6" />
  },
  {
    name: "Tea Selection",
    items: [
      { name: "Green Tea", price: "$4.00", description: "Premium Japanese sencha" },
      { name: "Earl Grey", price: "$4.00", description: "Classic black tea blend" },
      { name: "Chai Latte", price: "$5.50", description: "Spiced tea with steamed milk" },
      { name: "Matcha", price: "$5.75", description: "Ceremonial grade green tea powder" }
    ],
    icon: <Coffee className="w-6 h-6" />
  },
  {
    name: "Pastries",
    items: [
      { name: "Croissant", price: "$3.75", description: "Buttery, flaky pastry" },
      { name: "Muffin", price: "$3.50", description: "Daily baked assortment" },
      { name: "Danish", price: "$4.00", description: "Fruit filled pastry" },
      { name: "Scone", price: "$3.75", description: "Classic butter scone" }
    ],
    icon: <Coffee className="w-6 h-6" />
  }
]

export default function page() {
  return (
    <main className="min-h-screen bg-[#121212] pt-24">
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] py-16">
        <div className="absolute inset-0 bg-[url('/images/menu-pattern.png')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffees, teas, and fresh pastries
          </p>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-white/40">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  {category.name}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((item, itemIdx) => (
                  <Link 
                    href={`/products/${itemIdx}`} 
                    key={itemIdx}
                    className="group bg-[#1a1a1a] rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white group-hover:text-white/90 font-medium">
                          {item.name}
                        </h3>
                        <p className="text-sm text-white/40 mt-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-white/70 font-medium">
                        {item.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
