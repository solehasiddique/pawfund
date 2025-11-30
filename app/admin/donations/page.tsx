"use client";

import { useEffect, useState } from "react";

export default function DonationsPage() {
  const [donations, setDonations] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Fetch all donations
  async function loadDonations() {
    const res = await fetch("/api/donors");
    const data = await res.json();
    setDonations(data);
  }

  

  // Delete donation
  async function deleteDonation(id: string) {
    if (!confirm("Are you sure you want to delete this donation?")) return;

    const res = await fetch(`/api/donors/${id}`, { method: "DELETE" });

    if (res.ok) {
      alert("Donation deleted!");
      loadDonations();
    }
  }

  useEffect(() => {
    loadDonations();
  }, []);

  // Filter donations
  const filtered = donations
  .filter((d: any) =>
    d.name?.toLowerCase().includes(search.toLowerCase()) ||
    d.message?.toLowerCase().includes(search.toLowerCase())
  )
  .filter((d: any) =>
    statusFilter === "all" ? true : d.status === statusFilter
  );


  // Update donation status
async function updateStatus(id: string, status: string) {
  const res = await fetch(`/api/donations/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });

  if (res.ok) {
    alert(`Donation ${status}!`);
    loadDonations();
  } else {
    alert("Failed to update status");
  }
}



  return (
    <main className="p-10 bg-[#FFF7F0] min-h-screen">
      <h1 className="text-4xl font-bold text-orange-600 mb-8">Manage Donations 🐾</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or message..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md px-4 py-2 border rounded-lg mb-6 focus:ring-2 focus:ring-orange-400"
      />

      <div className="flex gap-3 mb-6">
  <button
    onClick={() => setStatusFilter("all")}
    className={`px-3 py-1 rounded ${
      statusFilter === "all" ? "bg-orange-500 text-white" : "bg-gray-200"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setStatusFilter("pending")}
    className={`px-3 py-1 rounded ${
      statusFilter === "pending" ? "bg-orange-500 text-white" : "bg-gray-200"
    }`}
  >
    Pending
  </button>

  <button
    onClick={() => setStatusFilter("approved")}
    className={`px-3 py-1 rounded ${
      statusFilter === "approved" ? "bg-orange-500 text-white" : "bg-gray-200"
    }`}
  >
    Approved
  </button>

  <button
    onClick={() => setStatusFilter("rejected")}
    className={`px-3 py-1 rounded ${
      statusFilter === "rejected" ? "bg-orange-500 text-white" : "bg-gray-200"
    }`}
  >
    Rejected
  </button>
</div>


      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Actions</th>
              <th className="p-3 text-left">Status</th>

            </tr>
          </thead>

          <tbody>
  {filtered.map((d: any) => (
    <tr key={d._id} className="border-b">
      <td className="p-3">{d.name}</td>
      <td className="p-3 font-semibold text-orange-600">₹{d.amount}</td>
      <td className="p-3">{d.message}</td>
      <td className="p-3">{new Date(d.date).toLocaleString()}</td>

      {/* Actions Column */}
      <td className="p-3 space-x-2">
        {d.status === "pending" && (
          <>
            <button
              onClick={() => updateStatus(d._id, "approved")}
              className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
            >
              Approve
            </button>

            <button
              onClick={() => updateStatus(d._id, "rejected")}
              className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Reject
            </button>
          </>
        )}

        <button
          onClick={() => deleteDonation(d._id)}
          className="px-3 my-1 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </td>

      {/* Status Column */}
      <td className="p-3">
        {d.status === "approved" && (
          <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded">
            ✅Approved
          </span>
        )}

        {d.status === "rejected" && (
          <span className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded">
            ❌ Rejected
          </span>
        )}

        {d.status === "pending" && (
          <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded">
            🕒 Pending
          </span>
        )}
      </td>
    </tr>
  ))}

  {filtered.length === 0 && (
    <tr>
      <td className="p-4 text-center text-gray-500" colSpan={6}>
        No donations found
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </main>
  );
}
