"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Campaigns", href: "/campaigns" },
  { name: "Donate", href: "/donate" },
  { name: "Adopt", href: "/adopt" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact", isButton: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-creamBg/80 backdrop-blur-md border-b border-brownText/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-orangeBrand"
        >
          <Heart className="w-6 h-6 fill-orangeBrand" />
          PawFund
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium text-brownText">
          {links.map((link) =>
            link.isButton ? (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-white transition-colors ${
                  isActive(link.href)
                    ? "bg-orangeBrand"
                    : "bg-orangeBrand hover:bg-[#FF7A2F]"
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive(link.href)
                    ? "text-orangeBrand border-b-2 border-orangeBrand"
                    : "hover:text-orangeBrand"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brownText"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-creamBg border-t border-brownText/10 shadow-sm">
          <div className="flex flex-col items-center gap-4 py-6 font-medium text-brownText">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${
                  link.isButton
                    ? "px-5 py-2 rounded-lg bg-orangeBrand text-white"
                    : isActive(link.href)
                    ? "text-orangeBrand"
                    : "hover:text-orangeBrand"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
