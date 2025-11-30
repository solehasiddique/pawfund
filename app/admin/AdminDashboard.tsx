"use client";


import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalAmount: 0,
    totalDonations: 0,
    latest: []
  });

  useEffect(() => {
    async function fetchStats() {
      const res = await fetch("/api/donors");
      const data = await res.json();

     const totalAmount = data
  .filter((d: any) => d.status === "approved")
  .reduce((acc: number, d: any) => acc + (d.amount || 0), 0);

      const totalDonations = data.length;
      const latest = data.slice(0, 5);

      setStats({ totalAmount, totalDonations, latest });
      setLoading(false);

    }

    fetchStats();
  }, []);

  if (loading) {
  return <div className="p-10 text-orange-600 text-xl">Loading dashboard...</div>;
}


  return (
    <main className="p-10 bg-[#FFF7F0] min-h-screen">
      <h1 className="text-4xl font-bold text-orange-600 mb-10">Admin Dashboard 🐾</h1>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        
        {/* Total Amount */}
        <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-orange-500">
          <h2 className="text-sm text-gray-500">Total Amount Donated</h2>
          <p className="text-3xl font-bold text-orange-600">₹{stats.totalAmount}</p>
        </div>

        {/* Total Donations */}
        <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-orange-500">
          <h2 className="text-sm text-gray-500">Total Donations</h2>
          <p className="text-3xl font-bold text-orange-600">{stats.totalDonations}</p>
        </div>

        {/* Latest Count */}
        <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-orange-500">
          <h2 className="text-sm text-gray-500">Latest Donations</h2>
          <p className="text-3xl font-bold text-orange-600">{stats.latest.length}</p>
        </div>

      </div>

      {/* Latest Donations List */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-orange-600 mb-4">Recent Donations</h2>

        <div className="space-y-4">
          {stats.latest.map((d: any, index: number) => (
            <div key={index} className="p-4 border rounded-lg">
              <p className="font-semibold text-gray-800">
                {d.name} • ₹{d.amount}
              </p>
              <p className="text-gray-600 text-sm">{d.message}</p>
            </div>
          ))}
        </div>
      </div>
      <a
  href="/admin/donations"
  className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600"
>
  Manage Donations →
</a>
    </main>
  );
}
