import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PawFund 🐾",
  description: "Donate & adopt to help stray dogs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-creamBg text-brownText`}>
        <Navbar />
        <main className="pt-20">{children}</main> {/* gives space below navbar */}
        <Footer />
      </body>
    </html>
  );
}
