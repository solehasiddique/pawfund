'use client';

import Image from 'next/image';
import { MapPin, Clock, Search, Filter } from 'lucide-react';
import { useState } from 'react';

const campaigns = [
  {
    id: 1,
    title: 'Emergency Surgery for Bella',
    location: 'Mumbai, India',
    image: '/dogs/dog7.webp',
    raised: 8450,
    goal: 10000,
    donors: 127,
    daysLeft: 5,
    description: 'Bella was hit by a car and needs urgent surgery to walk again.',
    category: 'Medical',
    urgent: true,
  },
  {
    id: 2,
    title: 'Shelter Food Drive',
    location: 'São Paulo, Brazil',
    image: '/dogs/dog2.jpg',
    raised: 3200,
    goal: 5000,
    donors: 89,
    daysLeft: 12,
    description: 'Help us feed 50 rescued dogs for the next month.',
    category: 'Food',
    urgent: false,
  },
  {
    id: 3,
    title: 'Medical Care for Max',
    location: 'Bangkok, Thailand',
    image: '/dogs/dog6.webp',
    raised: 6800,
    goal: 7500,
    donors: 156,
    daysLeft: 3,
    description: 'Max needs treatment for severe skin infection and malnutrition.',
    category: 'Medical',
    urgent: true,
  },
  {
    id: 4,
    title: 'New Shelter Construction',
    location: 'Nairobi, Kenya',
    image: '/dogs/dog5.jpeg',
    raised: 15000,
    goal: 50000,
    donors: 234,
    daysLeft: 45,
    description: 'Building a safe haven for 100+ street dogs in our community.',
    category: 'Shelter',
    urgent: false,
  },
  {
    id: 5,
    title: 'Rescue Mission: Flood Victims',
    location: 'Jakarta, Indonesia',
    image: '/dogs/dog4.jpeg',
    raised: 4500,
    goal: 8000,
    donors: 98,
    daysLeft: 7,
    description: 'Emergency rescue and care for dogs displaced by recent flooding.',
    category: 'Rescue',
    urgent: true,
  },
  {
    id: 6,
    title: 'Vaccination Program',
    location: 'Mexico City, Mexico',
    image: '/dogs/dog8.jpg',
    raised: 2100,
    goal: 3500,
    donors: 67,
    daysLeft: 20,
    description: 'Vaccinating street dogs to prevent disease outbreaks.',
    category: 'Medical',
    urgent: false,
  },
];

export default function CampaignsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Medical', 'Food', 'Shelter', 'Rescue'];

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || campaign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-rose-500 text-white py-16">
        <div className="px-6 mx-auto max-w-7xl">
          <h1 className="text-5xl mb-4">Active Campaigns</h1>
          <p className="text-xl opacity-90">
            Browse and support campaigns helping stray dogs around the world
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="px-6 py-8 mx-auto max-w-7xl">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCampaigns.map((campaign) => {
            const progress = (campaign.raised / campaign.goal) * 100;

            return (
              <div
                key={campaign.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
  src={campaign.image}
  alt={campaign.title}
  fill
  className="object-cover hover:scale-105 transition-transform duration-300"
/>

                  {campaign.urgent && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white rounded-full text-sm">
                      Urgent
                    </div>
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white rounded-full flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-900">{campaign.daysLeft}d left</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm mb-3">
                    {campaign.category}
                  </div>

                  <h3 className="text-2xl text-gray-900 mb-2">{campaign.title}</h3>

                  <div className="flex items-center gap-1 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{campaign.location}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{campaign.description}</p>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-900">${campaign.raised.toLocaleString()} raised</span>
                      <span className="text-gray-600">${campaign.goal.toLocaleString()} goal</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-500 rounded-full transition-all"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">{campaign.donors} donors</span>
                    <span className="text-sm text-orange-500">{Math.round(progress)}% funded</span>
                  </div>

                  <button className="w-full py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                    Donate Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">No campaigns found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
