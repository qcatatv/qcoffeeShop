"use client";
import React from "react";
import { notFound } from "next/navigation";
import { Coffee } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Espresso",
    category: "Signature Coffee",
    icon: <Coffee size={32} />,
    price: "$4.50",
    description: "Rich, bold, perfectly extracted",
    longDescription: "Our signature espresso is crafted with precision using premium arabica beans, resulting in a perfectly balanced shot with rich crema and intense flavor notes.",
    ingredients: ["Premium Arabica Beans", "Filtered Water"],
    nutritionalInfo: {
      calories: "5 kcal",
      caffeine: "63 mg",
      servingSize: "1 oz (30ml)"
    }
  },
  // Add other products with extended information
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#121212] pt-24">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image/Icon Section */}
          <div className="bg-[#1a1a1a] rounded-3xl p-12 flex items-center justify-center">
            <div className="text-white/60 w-32 h-32">
              {product.icon}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{product.name}</h1>
              <p className="text-white/60">{product.category}</p>
            </div>

            <p className="text-2xl font-semibold text-white">{product.price}</p>

            <div className="space-y-4">
              <p className="text-white/80 leading-relaxed">
                {product.longDescription}
              </p>

              {product.ingredients && (
                <div>
                  <h3 className="text-white font-semibold mb-2">Ingredients</h3>
                  <ul className="list-disc list-inside text-white/60 space-y-1">
                    {product.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}

              {product.nutritionalInfo && (
                <div>
                  <h3 className="text-white font-semibold mb-2">Nutritional Information</h3>
                  <dl className="grid grid-cols-2 gap-2 text-white/60">
                    {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                      <div key={key}>
                        <dt className="capitalize">{key}:</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>

            <button className="w-full md:w-auto px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}