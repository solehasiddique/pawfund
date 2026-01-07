"use client"; 

import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Heart, ArrowRight, Shield, Users, Zap, Search, CheckCircle, MapPin, Clock } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Direct Impact",
    description: "100% of your donation goes directly to helping stray dogs. No hidden fees or overhead costs."
  },
  {
    icon: Shield,
    title: "Verified Campaigns",
    description: "Every campaign is thoroughly vetted by our team to ensure authenticity and transparency."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join thousands of animal lovers making a real difference in the lives of stray dogs."
  },
  {
    icon: Zap,
    title: "Fast Funding",
    description: "Urgent cases get prioritized so dogs in critical need receive help immediately."
  }
];

const steps = [
  {
    icon: Search,
    title: "Find a Campaign",
    description: "Browse through verified campaigns for stray dogs in need of medical care, shelter, or food."
  },
  {
    icon: Heart,
    title: "Make a Donation",
    description: "Choose your contribution amount and donate securely. Every dollar makes a difference."
  },
  {
    icon: CheckCircle,
    title: "Track the Impact",
    description: "Receive updates on how your donation is helping and see the lives you're changing."
  }
];

const featuredCampaigns = [
  {
    id: 1,
    title: "Emergency Surgery for Bella",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1691221679153-168621acfb4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJheSUyMGRvZyUyMHJlc2N1ZXxlbnwxfHx8fDE3Njc1Mjg0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 8450,
    goal: 10000,
    donors: 127,
    daysLeft: 5,
    description: "Bella was hit by a car and needs urgent surgery to walk again."
  },
  {
    id: 2,
    title: "Shelter Food Drive",
    location: "São Paulo, Brazil",
    image: "https://images.unsplash.com/photo-1720705313994-12cd7930da3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMGFkb3B0aW9ufGVufDF8fHx8MTc2NzUxNzQwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 3200,
    goal: 5000,
    donors: 89,
    daysLeft: 12,
    description: "Help us feed 50 rescued dogs for the next month."
  },
  {
    id: 3,
    title: "Medical Care for Max",
    location: "Bangkok, Thailand",
    image: "https://images.unsplash.com/photo-1642800978612-381279a6376b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHJlc2N1ZWQlMjBkb2d8ZW58MXx8fHwxNzY3ODA0MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 6800,
    goal: 7500,
    donors: 156,
    daysLeft: 3,
    description: "Max needs treatment for severe skin infection and malnutrition."
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="relative z-10 px-6 py-16 mx-auto max-w-7xl md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
                Every Stray Deserves a Chance
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our community in funding life-saving care, shelter, and love for stray dogs around the world. 
                Every donation makes a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/donate"
                  className="px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  Donate Now
                  <Heart className="w-5 h-5" />
                </a>
                <a 
                  href="/campaigns"
                  className="px-8 py-4 bg-white text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-50 transition-colors flex items-center justify-center gap-2"
                >
                  Browse Campaigns
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-orange-500 mb-1">2,847</div>
                  <div className="text-sm text-gray-600">Dogs Helped</div>
                </div>
                <div>
                  <div className="text-3xl text-orange-500 mb-1">$1.2M</div>
                  <div className="text-sm text-gray-600">Funds Raised</div>
                </div>
                <div>
                  <div className="text-3xl text-orange-500 mb-1">15K+</div>
                  <div className="text-sm text-gray-600">Donors</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1691221679153-168621acfb4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJheSUyMGRvZyUyMHJlc2N1ZXxlbnwxfHx8fDE3Njc1Mjg0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Rescued stray dog"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="px-6 py-20 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">Why Choose PawFund?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to making every donation count and every stray dog matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20 mx-auto max-w-7xl bg-gradient-to-b from-white to-amber-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Making a difference is simple and transparent
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-500 flex items-center justify-center relative">
                  <Icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-orange-500">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="px-6 py-20 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">Featured Campaigns</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These dogs need your help right now
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredCampaigns.map((campaign) => {
            const progress = (campaign.raised / campaign.goal) * 100;
            return (
              <div key={campaign.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white rounded-full flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-900">{campaign.daysLeft}d left</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl text-gray-900 mb-2">{campaign.title}</h3>

                  <div className="flex items-center gap-1 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{campaign.location}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{campaign.description}</p>

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

                  <a 
                    href="/donate"
                    className="w-full py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors block text-center"
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a 
            href="/campaigns"
            className="px-8 py-4 bg-white text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-50 transition-colors"
          >
            View All Campaigns
          </a>
        </div>
      </section>
    </div>
  );
}
