// src/app/about/page.tsx

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-creamBg text-brownText min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/aboutdog.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-4">About PawFund 🐾</h1>
          <p className="text-lg text-white/90">
            Every small act of kindness makes tails wag and hearts heal. ❤️
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-8 md:px-20 text-center bg-[#FFF7F0]">
        <h2 className="text-3xl font-bold text-[#5C4033] mb-6">Our Story</h2>
        <p className="max-w-3xl mx-auto text-[#6B4F4F] text-lg leading-relaxed">
          PawFund started as a simple idea — to make helping stray dogs easier and more impactful.  
          We saw countless paws wandering hungry and hurt on the streets.  
          So we built PawFund to connect kind hearts with those in need — one donation, one meal, and one rescue at a time.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-8 md:px-20 text-center bg-white">
        <h2 className="text-3xl font-bold text-orangeBrand mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-[#5C4033]/80 text-lg leading-relaxed">
          We aim to make small acts of kindness possible through micro-donations.  
          With just ₹50, you can feed a hungry pup.  
          With ₹250, you can fund a vet checkup.  
          Every rupee counts — because every tail matters. 🐶
        </p>
      </section>

      {/* How Funds Are Used */}
      <section className="py-20 px-8 bg-[#FFF2E8] text-center">
        <h2 className="text-3xl font-bold text-[#5C4033] mb-10">How Your Help Works</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: "🍚",
              title: "₹50 = 1 Meal",
              desc: "Your donation provides a wholesome meal to a hungry stray.",
            },
            {
              icon: "💉",
              title: "₹250 = Vet Checkup",
              desc: "Covers basic vaccination and medical aid for rescued animals.",
            },
            {
              icon: "🏠",
              title: "₹1000 = Shelter Support",
              desc: "Helps local shelters improve care and expand rescue efforts.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition-all border border-[#FFD6B3]/50"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-orangeBrand mb-2">
                {item.title}
              </h3>
              <p className="text-[#6B4F4F]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Creator / Team Section */}
      <section className="py-20 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#5C4033] mb-8">Meet the Creator</h2>
        <div className="flex flex-col items-center">
          <Image
            src="/creator.png"
            alt="Creator"
            width={150}
            height={150}
            className="rounded-full border-4 border-[#D46A1F] mb-4 object-cover"
          />
          <h3 className="text-2xl font-semibold text-orangeBrand">Soleha Siddique</h3>
          <p className="max-w-2xl mx-auto text-[#6B4F4F] mt-3">
            “I created PawFund with one mission — to give strays a voice and a chance.  
            Every small donation adds up to a big impact. Thank you for being part of this journey.” 💛
          </p>
        </div>
      </section>
    </main>
  );
}
