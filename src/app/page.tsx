import React from "react";
import ProductCards from "./components/ProductCards";
import CoffeeLogo from "./components/CoffeeLogo";

export default function page() {
  return (
    <>
      <div className="">
        <div className="font-bold flex justify-center items-center text-center text-5xl pt-10 rounded-lg">
          <h1>qCoffe Shop</h1>
        </div>
        <div className="mt-2 text-3xl font-semibold text-yellow-500 text-center">
          <p>We deliver nothing but the finest coffee experience</p>
        </div>
        <div className="text-center text-4xl font-semibold mt-10">
          <a>Out Top Brands</a>
          <CoffeeLogo />
        </div>
      </div>
      <div>
        <ProductCards />
      </div>
    </>
  );
}
