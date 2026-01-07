import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PawFund",
  description: "Donate & adopt to help stray dogs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-creamBg text-brownText min-h-screen flex flex-col`}>
        <Navbar />

        {/* Page content */}
        <main className="pt-20 flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
