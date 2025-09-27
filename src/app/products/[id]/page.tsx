"use client";
import React from "react";
import { notFound } from "next/navigation";
import { Coffee, ArrowLeft } from "lucide-react";
import { products } from '../../data/products';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#121212] pt-24">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Back Button */}
          <Link 
            href="/menu" 
            className="absolute top-28 left-4 sm:left-8 inline-flex items-center gap-2 text-white/60 hover:text-white group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Menu
          </Link>

          {/* Product Image Section */}
          <div className="bg-[#1a1a1a] rounded-3xl p-8 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            {product.image ? (
              <div className="relative aspect-square w-full max-w-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            ) : (
              <div className="w-32 h-32 text-white/40">
                <Coffee className="w-full h-full" />
              </div>
            )}
          </div>

          {/* Product Details Section */}
          <div className="space-y-8">
            <div>
              <p className="text-white/60 mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold text-white/90">{product.price}</p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                {product.longDescription || product.description}
              </p>

              {product.ingredients && (
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-white font-semibold mb-4">Ingredients</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.ingredients.map((ingredient, i) => (
                      <li key={i} className="text-white/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex gap-4 pt-6">
              <button className="flex-1 bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-white/90 transition-colors">
                Add to Cart
              </button>
              <button className="bg-white/10 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/20 transition-colors">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
