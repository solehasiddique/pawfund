"use client";

import { ReactNode } from "react";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-[#FFF7F0]">
      {/* Header */}
      <header className="bg-orange-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">PawFund Admin</h1>
        <button
          className="bg-white text-orange-500 px-3 py-1 rounded hover:bg-orange-100"
          onClick={() => {
            document.cookie = "admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            window.location.href = "/admin/login";
          }}
        >
          Logout
        </button>
      </header>

      {/* Main content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
