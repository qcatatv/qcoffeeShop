"use client";
import React from "react";

const logos = [
  "/images/CostaCoffee.png",
  "/images/CostaCoffee.png",
  "/images/CostaCoffee.png",
  "/images/CostaCoffee.png",
  "/images/CostaCoffee.png",
];

export default function CoffeeLogo() {
  return (
    <div className="mt-10 overflow-hidden relative w-full">
      {/* Lista dublată pentru efect infinit */}
      <ul className="flex gap-10 animate-[scroll_70s_linear_infinite] w-max">
        {[
          ...logos,
          ...logos,
          ...logos,
          ...logos,
          ...logos,
          ...logos,
          ...logos,
        ].map((src, i) => (
          <li
            key={i}
            className="h-auto w-60 hover:scale-110 transition-transform duration-300 flex-shrink-0"
          >
            <img src={src} alt={`Coffee Logo ${i}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
