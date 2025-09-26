import React from "react";
import ProductCards from "./components/ProductCards";
import CoffeeLogo from "./components/CoffeeLogo";
import { Coffee, ArrowRight } from "lucide-react";

export default function page() {
  return (
    <main className="min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#121212] to-[#1a1a1a]">
        <div className="absolute inset-0 bg-[url('/images/coffee-pattern.png')] opacity-5"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Coffee className="w-12 h-12 text-white opacity-80" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="inline-block animate-fade-in-up">q</span>
            <span className="inline-block animate-fade-in-up delay-100">
              Coffee
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-12 animate-fade-in opacity-90">
            Experience coffee perfection in every cup, where artistry meets
            exceptional taste.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-white hover:bg-gray-100 text-black font-medium py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-2">
              Explore Menu
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white font-medium py-4 px-8 rounded-full transition-all duration-300">
              Our Story
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Premium Partners
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Collaborating with the world finest coffee brands
          </p>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-[#1a1a1a] z-10"></div>
            <div className="opacity-75 hover:opacity-100 transition-opacity duration-500">
              <CoffeeLogo />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-[#121212] relative">
        <div className="absolute inset-0 bg-[url('/images/grain-pattern.png')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Featured Collection
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Discover our carefully curated selection
          </p>
          <ProductCards />
        </div>
      </section>
    </main>
  );
}
