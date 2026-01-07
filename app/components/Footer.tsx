import Link from "next/link";
import { Heart, Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-orangeBrand fill-orangeBrand" />
              <span className="text-2xl font-semibold">PawFund</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Making the world a better place for stray dogs, one donation at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link href="/campaigns" className="footer-link">Campaigns</Link>
              </li>
              <li>
                <Link href="/adopt" className="footer-link">Adoption</Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/campaigns/new" className="footer-link">
                  Start a Campaign
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="footer-link">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/partners" className="footer-link">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/donate" className="footer-link">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get the latest stories and campaigns in your inbox.
            </p>

            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orangeBrand"
              />
              <button
                type="submit"
                className="p-3 rounded-full bg-orangeBrand hover:bg-orange-600 transition-colors"
                aria-label="Subscribe"
              >
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} PawFund. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="footer-link">
                Privacy Policy
              </Link>
              <Link href="/terms" className="footer-link">
                Terms of Service
              </Link>
            </div>

            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook" className="social-icon">
                <Facebook size={20} />
              </Link>
              <Link href="#" aria-label="Twitter" className="social-icon">
                <Twitter size={20} />
              </Link>
              <Link href="#" aria-label="Instagram" className="social-icon">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
