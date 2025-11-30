"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AdoptMeModal from "../components/AdoptMeModal";

export default function AdoptionPage() {
  const [dogs, setDogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDog, setSelectedDog] = useState<any>(null);


  useEffect(() => {
    async function fetchDogs() {
      try {
        const res = await fetch("/api/dogs");
        const data = await res.json();
        setDogs(data);
      } catch (err) {
        console.error("Error fetching dogs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchDogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-orangeBrand text-xl">
        Loading adorable friends... 🐾
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF2E8] text-brownText">
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-orangeBrand mb-4">
          Adopt, Don’t Shop 🐕
        </h1>
        <p className="text-lg text-[#5C4033]/80 max-w-2xl mx-auto">
          Give a stray a second chance. These beautiful souls are waiting for a loving home like yours. ❤️
        </p>
      </section>

      <section className="px-8 md:px-20 pb-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dogs.map((dog, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={dog.image}
                alt={dog.name}
                fill
                className="object-cover border-b-4 border-[#000]"
              />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-2xl font-semibold text-orangeBrand">{dog.name}</h2>
              <p className="text-sm text-[#5C4033]/70 mb-2">{dog.age}</p>
              <p className="text-[#5C4033]/80 mb-4">{dog.story}</p>
              <button
  onClick={() => setSelectedDog(dog)}
  className="bg-orangeBrand text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition"
>
  Adopt Me 🧡
</button>

            </div>
          </div>
        ))}
      </section>
      {/* 🧾 Adoption Modal (only visible when a dog is selected) */}
      {selectedDog && (
        <AdoptMeModal dog={selectedDog} onClose={() => setSelectedDog(null)} />
      )}
    </main>
  );
}
