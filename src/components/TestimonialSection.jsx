import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import celestialLogo from "../assets/logos/celestia_colored.svg";
import dYdXLogo from "../assets/logos/dydx_colored.svg";
import osmosisLogo from "../assets/logos/osmosis_colored.svg";
import glowingOrbBg from "../assets/images/glowing-orb-complete.svg";
const companies = [
  {
    name: "Celestia",
    quote: "Celestia is revolutionizing modular blockchain architecture.",
    author: "Alice Kim, Celestia",
    logo: celestialLogo, // placeholder paths
  },
  {
    name: "dYdX",
    quote:
      "The interchain stack unlocked unprecedented control and customizability, allowing dYdX to scale with full sovereignty, without gas fees and congestion.",
    author: "Nathan Cha, dYdX",
    logo: dYdXLogo,
  },
  {
    name: "Osmosis",
    quote:
      "Osmosis uses the interchain stack to create a seamless DeFi experience across chains.",
    author: "Jane Park, Osmosis",
    logo: osmosisLogo,
  },
];

export default function TestimonialSection() {
  const [selected, setSelected] = useState(companies[1]); // Default to dYdX

  return (
    <section className="relative px-4 py-16 mx-[8%]">
      {/* Background Image Positioned Absolutely */}
      <img
        src={glowingOrbBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />

      {/* Overlay Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        <h2 className="text-5xl font-bold mb-8">
          The stack trusted by builders
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {companies.map((company) => (
            <button
              key={company.name}
              onClick={() => setSelected(company)}
              className={`px-6 py-2 rounded-xl transition font-semibold ${
                selected.name === company.name
                  ? "bg-white text-black"
                  : "bg-[#1a1a1a] text-white hover:bg-[#333]"
              }`}
            >
              {company.name}
            </button>
          ))}
        </div>

        {/* Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-[#111111] rounded-2xl p-10 flex flex-col md:flex-row items-start justify-between gap-10"
          >
            <div className="md:w-2/3 space-y-4">
              <p className="text-2xl font-medium leading-relaxed">
                “{selected.quote}”
              </p>
              <p className="text-gray-400">{selected.author}</p>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-white transition"
              >
                See the Case Study →
              </a>
            </div>

            <div className="md:w-1/3 self-center">
              <img
                src={selected.logo}
                alt={`${selected.name} logo`}
                className="w-32 md:w-40 object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
