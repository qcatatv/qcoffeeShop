"use client";
import React from "react";
import { Coffee, Leaf, Cookie, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductCards() {
  const allProducts = [
    {
      id: 1,
      name: "Espresso",
      category: "Signature Coffee",
      icon: <Coffee size={32} />,
      price: "$4.50",
      description: "Rich, bold, perfectly extracted",
    },
    {
      id: 2,
      name: "Matcha Latte",
      category: "Specialty Drinks",
      icon: <Leaf size={32} />,
      price: "$5.50",
      badge: "NEW",
      description: "Premium Japanese green tea blend",
    },
    {
      id: 3,
      name: "Artisan Croissant",
      category: "Fresh Pastries",
      icon: <Cookie size={32} />,
      price: "$3.75",
      description: "Flaky, buttery, house-made daily",
    },
    {
      id: 4,
      name: "Brew Box",
      category: "Coffee Beans",
      icon: <ShoppingBag size={32} />,
      price: "$18.99",
      badge: "POPULAR",
      description: "250g premium roasted beans",
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="block group cursor-pointer"
          >
            <div className="relative overflow-hidden bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative">
                {/* Badge */}
                {product.badge && (
                  <span className="absolute -top-2 -right-2 bg-white/10 backdrop-blur-md text-[10px] text-white px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="mb-4 text-white/40 group-hover:text-white/60 transition-colors duration-300">
                  {product.icon}
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-white/90">
                    {product.name}
                  </h3>
                  <p className="text-sm text-white/40">
                    {product.category}
                  </p>
                  <p className="text-xs text-white/30 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Price and Action */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-white/70 font-medium">
                    {product.price}
                  </span>
                  <span className="flex items-center gap-2 text-xs text-white/50 hover:text-white group-hover:text-white/70 transition-colors">
                    Order
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
