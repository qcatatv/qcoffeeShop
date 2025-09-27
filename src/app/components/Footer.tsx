import React from "react";
import Link from "next/link";
import {
  Coffee,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Coffee className="w-8 h-8 text-white/40" />
              <span className="text-2xl font-bold text-white">qCoffee</span>
            </div>
            <p className="text-sm text-white/60 max-w-xs">
              Crafting memorable coffee experiences with premium beans and
              artisanal expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/menu"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>123 Coffee Street, City</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 234 567 890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@qcoffee.com"
                  className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@qcoffee.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold mb-6">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="text-white/60">
                <span className="block font-medium">Weekdays</span>
                <span className="text-sm">7:00 AM - 9:00 PM</span>
              </li>
              <li className="text-white/60">
                <span className="block font-medium">Saturday</span>
                <span className="text-sm">8:00 AM - 9:00 PM</span>
              </li>
              <li className="text-white/60">
                <span className="block font-medium">Sunday</span>
                <span className="text-sm">8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} qCoffee. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
