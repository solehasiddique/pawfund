"use client";
import Image from "next/image";
import { Heart, MapPin, Calendar, Info } from "lucide-react";
import { useState } from "react";

const adoptableDogs = [
  {
    id: 1,
    name: "Buddy",
    age: "2 years",
    gender: "Male",
    size: "Medium",
    breed: "Mixed Breed",
    location: "Mumbai, India",
    image: "/dogs/dog2.jpg",
    personality: "Friendly, energetic, loves kids",
    vaccinated: true,
    neutered: true,
  },
  {
    id: 2,
    name: "Luna",
    age: "1 year",
    gender: "Female",
    size: "Small",
    breed: "Terrier Mix",
    location: "São Paulo, Brazil",
    image: "/dogs/dog4.jpeg",
    personality: "Playful, gentle, good with other pets",
    vaccinated: true,
    neutered: true,
  },
  {
    id: 3,
    name: "Max",
    age: "3 years",
    gender: "Male",
    size: "Large",
    breed: "Labrador Mix",
    location: "Bangkok, Thailand",
    image: "/dogs/dog5.jpeg",
    personality: "Calm, loyal, well-trained",
    vaccinated: true,
    neutered: true,
  },
  {
    id: 4,
    name: "Daisy",
    age: "4 years",
    gender: "Female",
    size: "Medium",
    breed: "Beagle Mix",
    location: "Nairobi, Kenya",
    image: "/dogs/dog6.webp",
    personality: "Sweet, affectionate, loves cuddles",
    vaccinated: true,
    neutered: false,
  },
  {
    id: 5,
    name: "Rocky",
    age: "5 years",
    gender: "Male",
    size: "Large",
    breed: "German Shepherd Mix",
    location: "Mexico City, Mexico",
    image: "/dogs/dog7.webp",
    personality: "Protective, intelligent, active",
    vaccinated: true,
    neutered: true,
  },
  {
    id: 6,
    name: "Bella",
    age: "6 months",
    gender: "Female",
    size: "Small",
    breed: "Chihuahua Mix",
    location: "Jakarta, Indonesia",
    image: "/dogs/dog8.jpg",
    personality: "Curious, energetic, loves to play",
    vaccinated: true,
    neutered: false,
  },
];

export default function AdoptionPage() {
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");

  const sizes = ["All", "Small", "Medium", "Large"];
  const genders = ["All", "Male", "Female"];

  const filteredDogs = adoptableDogs.filter((dog) => {
    const matchesSize = selectedSize === "All" || dog.size === selectedSize;
    const matchesGender =
      selectedGender === "All" || dog.gender === selectedGender;
    return matchesSize && matchesGender;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-rose-500 text-white py-16">
        <div className="px-6 mx-auto max-w-7xl">
          <h1 className="text-5xl mb-4">Adopt a Dog</h1>
          <p className="text-xl opacity-90">
            Give a rescued stray dog a loving forever home
          </p>
        </div>
      </div>

      {/* Adoption Process */}
      <div className="px-6 py-12 mx-auto max-w-7xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl text-gray-900 mb-8 text-center">
            Adoption Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Browse", desc: "Find your perfect match" },
              { step: "2", title: "Apply", desc: "Submit adoption form" },
              { step: "3", title: "Meet", desc: "Visit the dog" },
              { step: "4", title: "Adopt", desc: "Take them home!" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-2xl text-orange-500">{item.step}</span>
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-2">Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-2">Gender</label>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {genders.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Dogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDogs.map((dog) => (
            <div
              key={dog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dog.image}
                  alt={dog.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-orange-50 transition-colors">
                    <Heart className="w-5 h-5 text-orange-500" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl text-gray-900 mb-2">{dog.name}</h3>
                <p className="text-gray-600 mb-4">{dog.breed}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {dog.age} • {dog.gender} • {dog.size}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{dog.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Info className="w-4 h-4" />
                    <span>{dog.personality}</span>
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  {dog.vaccinated && (
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs">
                      Vaccinated
                    </span>
                  )}
                  {dog.neutered && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                      Neutered
                    </span>
                  )}
                </div>

                <button className="w-full py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                  Adopt {dog.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
