import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-creamBg text-brownText mt-16 border-t border-orangeBrand/20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-orangeBrand">PawFund 🐾</h2>
          <p className="mt-3 text-sm text-brownText/80">
            Helping stray and shelter animals find love and care.  
            Every donation brings hope to a paw in need.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-brownText/90">
            <li><Link href="/" className="hover:text-orangeBrand transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-orangeBrand transition">About</Link></li>
            <li><Link href="/donate" className="hover:text-orangeBrand transition">Donate</Link></li>
            <li><Link href="/adopt" className="hover:text-orangeBrand transition">Adopt</Link></li>
            <li><Link href="/contact" className="hover:text-orangeBrand transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-orangeBrand transition"><Facebook size={22} /></Link>
            <Link href="#" className="hover:text-orangeBrand transition"><Instagram size={22} /></Link>
            <Link href="#" className="hover:text-orangeBrand transition"><Twitter size={22} /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-orangeBrand text-white text-center py-3 text-sm">
        © {new Date().getFullYear()} PawFund. All rights reserved.
      </div>
    </footer>
  );
}
