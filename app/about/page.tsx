
import Image from "next/image";
import { Heart, Target, Users, Globe, Award, TrendingUp } from "lucide-react";

const stats = [
  { value: "2,847", label: "Dogs Rescued", icon: Heart },
  { value: "$1.2M", label: "Funds Raised", icon: TrendingUp },
  { value: "15,000+", label: "Active Donors", icon: Users },
  { value: "45", label: "Countries", icon: Globe },
];

const team = [
  {
    name: "Soleha Siddique",
    role: "Founder & CEO",
    image: "/creator.png",
    bio: "Dedicated to animal welfare for over 15 years",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "/creator2.jpeg",
    bio: "Expert in nonprofit management and fundraising",
  },
  {
    name: "Emily Rodriguez",
    role: "Veterinary Advisor",
    image: "/creator3.jpeg",
    bio: "Licensed veterinarian specializing in rescue care",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Every dog deserves love, care, and a second chance at life.",
  },
  {
    icon: Target,
    title: "Transparency",
    description: "100% of donations go directly to helping dogs in need.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Together, we create lasting change for stray animals worldwide.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in animal welfare and care.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-rose-500 text-white py-16">
        <div className="px-6 mx-auto max-w-7xl">
          <h1 className="text-5xl mb-4">About PawFund</h1>
          <p className="text-xl opacity-90">
            Transforming the lives of stray dogs, one paw at a time
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              PawFund was founded in 2020 with a simple yet powerful mission: to
              ensure that no stray dog suffers from lack of care, food, or
              shelter. We believe every dog deserves a chance at a healthy,
              happy life.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Through our innovative crowdfunding platform, we connect
              compassionate donors with verified rescue organizations and
              individuals working tirelessly to save stray dogs around the
              world.
            </p>
            <p className="text-lg text-gray-600">
              Our technology-driven approach ensures transparency, efficiency,
              and maximum impact for every dollar donated.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/office.jpeg"
                alt="Our mission"
                width={800}
                height={1000}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl shadow-sm p-12 mb-16">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="text-4xl text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm p-6 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-500 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-sm p-12">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                year: "2020",
                event: "PawFund founded with first rescue campaign in Mumbai",
              },
              { year: "2021", event: "Reached 500 dogs rescued milestone" },
              { year: "2022", event: "Expanded to 20 countries worldwide" },
              { year: "2023", event: "Launched adoption program" },
              { year: "2024", event: "1,000+ successful campaigns completed" },
              { year: "2026", event: "Over 2,800 dogs rescued and counting" },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-24 flex-shrink-0">
                  <span className="text-2xl text-orange-500">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-orange-200 pl-6 relative">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-orange-500 rounded-full" />
                  <p className="text-gray-900">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-500 to-rose-500 text-white py-16">
        <div className="px-6 mx-auto max-w-7xl text-center">
          <h2 className="text-4xl mb-6">Join Our Mission</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether through donations, volunteering, or adoption, you can make a
            difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-500 rounded-full hover:bg-gray-100 transition-colors">
              Donate Now
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-orange-500 transition-colors">
              Volunteer With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
