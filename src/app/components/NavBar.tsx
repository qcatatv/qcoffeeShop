"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#3e2723] text-white shadow-md w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-wide">
          ☕ CoffeeTime
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li>
            <Link href="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-yellow-300">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-300">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-[#4e342e] flex flex-col gap-6 py-6 text-center text-lg">
          <li>
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#menu" onClick={() => setOpen(false)}>
              Menu
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
