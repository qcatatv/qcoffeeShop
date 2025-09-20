'use client'
import React from "react";
import { Coffee, Croissant, Percent } from "lucide-react";


export default function ProductCards() {
const allProducts = [
    { id: 1, name: "Espresso", category: "Coffee", icon: <Coffee size={48} />, price: "20$", discount: "20%" },
    { id: 2, name: "Latte", category: "Coffee", icon: <Coffee size={48} />, price: "20$", discount: "20%" },
  { id: 3, name: "Croissant", category: "Pastry", icon: <Croissant size={48} />, price: "20$", disccount: "20%" },
  { id: 4, name: "Muffin", category: "Pastry", icon: <Croissant size={48} />, price: "20$", discount: "20%" },
  { id: 5, name: "Tea", category: "Tea", icon: <Croissant size={48} />, price: "20$", discount: "20%" }
];


  return (
    <div className="container mx-auto px-6 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {allProducts.map((product) => (
<div
  key={product.id}
  className="border rounded-lg p-6 shadow hover:shadow-lg transition hover:scale-105 flex flex-col items-center relative"
>
  {/* Badge în stânga sus */}
  {product.discount && (
    <div className="absolute top-2 left-2 bg-red-700 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm">
       {product.discount}
    </div>
  )}

  {product.icon}
  <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
  <p className="text-gray-500">{product.category}</p>
</div>
        ))}
      </div>
    </div>
  );
}
