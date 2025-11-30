"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Donate", href: "/donate" },
    { name: "Adopt", href: "/adopt" },
    { name: "Contact", href: "/contact", isButton: true },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-creamBg/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orangeBrand">
          PawFund 🐾
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-brownText font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-200 ${
                link.isButton
                  ? `px-4 py-2 rounded-lg ${
                      pathname === link.href
                        ? "bg-orangeBrand text-white"
                        : "bg-orangeBrand text-white hover:bg-[#FF7A2F]"
                    }`
                  : pathname === link.href
                  ? "text-orangeBrand border-b-2 border-orangeBrand"
                  : "hover:text-orangeBrand"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brownText"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-creamBg flex flex-col items-center gap-4 py-4 text-brownText font-medium shadow-md">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`transition-all duration-200 ${
                link.isButton
                  ? `px-4 py-2 rounded-lg ${
                      pathname === link.href
                        ? "bg-orangeBrand text-white"
                        : "bg-orangeBrand text-white hover:bg-[#FF7A2F]"
                    }`
                  : pathname === link.href
                  ? "text-orangeBrand"
                  : "hover:text-orangeBrand"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
