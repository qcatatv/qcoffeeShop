"use client";
import { useState, useEffect } from "react";
import { Menu, X, Coffee } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#121212]/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-white group"
        >
          <Coffee className="w-8 h-8 group-hover:text-white/70 transition-colors" />
          <span className="text-2xl font-bold tracking-tight group-hover:text-white/70 transition-colors">
            qCoffee
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-semibold items-center gap-8">
          <li>
            <Link 
              href="/" 
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link 
              href="/menu" 
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              MENU
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link 
              href="/contact"
              className="text-sm px-5 py-2 bg-white text-black hover:bg-white/90 transition-colors rounded-full"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/70 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden">
          <div className="bg-[#121212]/95 backdrop-blur-md border-t border-white/10">
            <ul className="flex flex-col gap-4 px-6 py-8">
              <li>
                <Link 
                  href="/" 
                  onClick={() => setOpen(false)}
                  className="block text-sm text-white/70 hover:text-white transition-colors py-2"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link 
                  href="/menu" 
                  onClick={() => setOpen(false)}
                  className="block text-sm text-white/70 hover:text-white transition-colors py-2"
                >
                  MENU
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  onClick={() => setOpen(false)}
                  className="block text-sm text-white/70 hover:text-white transition-colors py-2"
                >
                  ABOUT
                </Link>
              </li>
              <li className="pt-4">
                <Link 
                  href="/contact" 
                  onClick={() => setOpen(false)}
                  className="block text-sm text-center px-5 py-2 bg-white text-black hover:bg-white/90 transition-colors rounded-full"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
