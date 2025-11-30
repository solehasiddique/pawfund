"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const counters = [
  { value: 500, label: "Animals Fed" },
  { value: 120, label: "Adoptions Supported" },
  { value: 30, label: "Shelters Partnered" },
  { value: 1000, label: "Lives Impacted" },
];

export default function CounterSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          controls.start("visible");
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, hasAnimated]);

  return (
    <section
      ref={ref}
      className="py-20 px-8 md:px-20 text-center bg-creamBg"
    >
      <h2 className="text-3xl font-bold text-[#5C4033] mb-12">
        Our Impact 🐕
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {counters.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-2xl py-8 px-6 border border-[#FFD6B3]/50"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.2, duration: 0.6 },
              },
            }}
          >
            <AnimatedCounter target={item.value} />
            <p className="mt-2 text-[#5C4033] font-semibold">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Counter number animation logic
function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // ~60 FPS

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <h3 className="text-4xl md:text-5xl font-bold text-[#D46A1F]">
      {count}+
    </h3>
  );
}
