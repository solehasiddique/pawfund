import Image from "next/image";
import Link from "next/link";
import CounterSection from "./components/CounterSection";

async function getDogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dogs`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch dogs");
  return res.json();
}
async function getDonors() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/donors`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch donors");
  return res.json();
}


export default async function Home() {
  const dogs = await getDogs();
  const donors = await getDonors();

  return (
    
    <main className="bg-creamBg text-brownText min-h-screen">
      <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/dog.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text on top of image */}
        <div className="relative z-10 text-white max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Give Love. Save Paws. 🐾
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join PawFund in helping stray and shelter animals find a forever home.
          </p>
          <a
            href="/donate"
            className="bg-orangeBrand text-white px-6 py-3 rounded-lg hover:bg-[#FF7A2F] transition"
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* {/* About Section
      <section className="bg-creamBg text-brownText py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About PawFund</h2>
          <p className="text-lg text-brownText/80">
            We’re a community-driven initiative dedicated to helping stray dogs and cats.
            From food drives to adoption campaigns, we make small efforts that create big impacts.
          </p>
        </div>
      </section> */}
    </div> 


{/* Impact Counter */}
<CounterSection />


    

     {/* How It Works Section */}
<section className="py-20 px-8 bg-gradient-to-r from-[#FFE9D6] to-[#FFF2E8] text-center">
  <h2 className="text-3xl font-bold text-[#5C4033] mb-12">
    How It Works
  </h2>

  <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
    {[
      {
        title: "1️⃣ Donate",
        desc: "Contribute funds for food, vaccines, and shelter supplies.",
        img: "/donate.png",
      },
      {
        title: "2️⃣ Support",
        desc: "We partner with local shelters to distribute donations effectively.",
        img: "/support.png",
      },
      {
        title: "3️⃣ Save Lives",
        desc: "Your kindness helps strays find homes and hope again.",
        img: "/save.jpg",
      },
    ].map((step, i, arr) => (
      <div key={i} className="flex items-center gap-6 relative">
        {/* Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 w-64 hover:shadow-lg transition-all border border-[#FFD6B3]/50 flex flex-col items-center">
          {/* Circular image */}
          <img
            src={step.img}
            alt={step.title}
            className="w-20 h-20 object-cover rounded-full border-4 border-black mb-3"
          />
          <h3 className="text-2xl font-semibold text-[#D46A1F] mb-2">
            {step.title}
          </h3>
          <p className="text-[#6B4F4F] text-sm leading-relaxed">{step.desc}</p>
        </div>

        {/* Arrows between cards */}
        {i < arr.length - 1 && (
          <div className="hidden md:block text-[#D46A1F] text-4xl font-bold absolute -right-7 top-1/2 transform -translate-y-1/2">
            →
          </div>
        )}
      </div>
    ))}
  </div>
</section>



      {/* Featured Dogs Section (Dynamic) */}
      <section className="py-20 px-8 bg-[#FFF7F0] text-center">
        <h2 className="text-3xl font-bold text-[#5C4033] mb-12">
          Meet Our Pawsome Friends 🐶
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {dogs.slice(0, 3).map((dog: any, i: number) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-[#FFD6B3]/50 overflow-hidden"
            >
              <img
                src={dog.image}
                alt={dog.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#D46A1F]">{dog.name}</h3>
                <p className="text-[#5C4033]/80 text-sm mb-2">{dog.age}</p>
                <p className="text-[#6B4F4F] text-sm mb-4">{dog.story}</p>

                <Link
                  href="/adopt"
                  className="bg-orangeBrand text-white px-4 py-2 rounded-lg hover:bg-[#FF7A2F] transition text-sm"
                >
                  Adopt Me
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

  {/* Testimonials Section */}
<section className="py-20 px-8 bg-gradient-to-r from-[#FFE9D6] to-[#FFF2E8] text-center">
  <h2 className="text-3xl font-bold text-[#5C4033] mb-10">
    What Our Donors Say 💬
  </h2>

  <div className="max-w-4xl mx-auto space-y-10">
          {donors.slice(0, 3).map((donor: any, i: number) => (
            <blockquote
              key={i}
              className="bg-white/70 italic text-[#5C4033] rounded-2xl p-6 shadow-sm border border-[#FFD6B3]/40 hover:shadow-md transition"
            >
              <p className="text-lg mb-2">“{donor.message}”</p>
              <footer className="text-[#D46A1F] font-medium">
                – {donor.name} {donor.amount ? `₹${donor.amount}` : ""}
              </footer>
            </blockquote>
          ))}
        </div>
</section>






      {/* CTA Section */}
      <section className="py-20 bg-orangeBrand text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to make a dog’s day brighter? 🐶
        </h2>
        <Link
          href="/donate"
          className="bg-white text-orangeBrand hover:bg-creamBg font-semibold px-8 py-3 rounded-xl transition-all"
        >
          Start Donating
        </Link>
      </section>
    </main>
  );
}
