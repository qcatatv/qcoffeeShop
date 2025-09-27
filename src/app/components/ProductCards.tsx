"use client";
import React from "react";
import { Coffee, Leaf, Cookie, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { products } from "../data/products";

export default function ProductCards() {
  // Get featured products (one from each category)
  const featuredProducts = React.useMemo(() => {
    const categories = [...new Set(products.map(p => p.category))];
    return categories
      .map(category => products.find(p => p.category === category))
      .filter((product): product is NonNullable<typeof product> => product !== undefined)
      .slice(0, 4);
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
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
                {/* Product Image or Icon */}
                <div className="mb-4 aspect-square relative rounded-xl overflow-hidden bg-black/20">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/40 group-hover:text-white/60 transition-colors duration-300">
                      {product.category.includes("Coffee") && <Coffee size={32} />}
                      {product.category.includes("Tea") && <Leaf size={32} />}
                      {product.category.includes("Pastries") && <Cookie size={32} />}
                      {product.category.includes("Beans") && <ShoppingBag size={32} />}
                    </div>
                  )}
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
                    View Details
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
