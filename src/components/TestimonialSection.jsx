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
    logo: celestialLogo,
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
    <section className="relative px-4 py-16 mx-[8%] overflow-hidden mb-[5%] h-[850px]">
      {/* Background Image Positioned Absolutely */}
      <div className="absolute inset-0 object-cover mt-10 opacity-95 z-0">
        <img src={glowingOrbBg} alt="" className="w-full h-full" />
      </div>
      {/* Overlay Content */}
      <div className="relative max-w-6xl mx-auto z-40">
        <h2 className="text-5xl font-bold mb-8">
          The stack trusted by builders
        </h2>

        <div className="flex gap-4 mb-8">
          {companies.map((company) => (
            <button
              key={company.name}
              onClick={() => setSelected(company)}
              className={`px-8 py-4 rounded-xl transition font-bold text-xl ${
                selected.name === company.name
                  ? " text-gray-300 border-2 border-gray-200"
                  : "bg-[#1a1a1a] text-white"
              }`}
            >
              {company.name}
            </button>
          ))}
        </div>

        {/* Testimonial Card */}
        <AnimatePresence mode="wait">
          <div className="bg-[#171717] rounded-2xl h-[400px] flex justify-center items-center">
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9 }}
              className="flex flex-col md:flex-row items-start justify-between gap-10 px-28"
            >
              <div className="md:w-2/3 flex flex-col justify-between gap-20">
                <div className="">
                  <span className="text-3xl font-medium">
                    “{selected.quote}”
                  </span>{" "}
                  <span className="text-gray-400 text-xl font-light">
                    {selected.author}
                  </span>
                </div>
                <a
                  href="#"
                  className="text-xl font-light text-gray-500 hover:text-white transition"
                >
                  See the Case Study →
                </a>
              </div>
              <div className="md:w-1/3 self-center">
                <img
                  src={selected.logo}
                  alt={`${selected.name} logo`}
                  className="w-40 md:w-60 object-contain"
                />
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
