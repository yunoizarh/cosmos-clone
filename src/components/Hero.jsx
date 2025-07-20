import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="pt-20 px-6 text-center text-[#f6f4f5]"
    >
      {/* Tag */}
      <motion.button
        custom={0}
        variants={textVariant}
        type="button"
        className="relative px-[18px] py-[6px] rounded-full text-xl font-medium tracking-wide mb-3 bg-transparent"
      >
        <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#fb893d] via-[#ffcf6f] to-[#b377fd]">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-[#050519]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffcf6f] to-[#b377fd]">
              NEW
            </span>
          </span>
        </span>
        <span className="invisible">NEW</span>
      </motion.button>

      {/* Main Heading */}
      <motion.h1
        custom={1}
        variants={textVariant}
        className="text-5xl md:text-[119px] font-black tracking-tight mb-0"
      >
        IBC Eureka is Live
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        custom={2}
        variants={textVariant}
        className="text-2xl md:text-5xl font-bold tracking-tighter mb-6"
      >
        Cosmos to Ethereum
      </motion.h2>

      {/* Description */}
      <motion.p
        custom={3}
        variants={textVariant}
        className="max-w-2xl mx-auto text-sm md:text-xl md:max-w-xl font-light leading-relaxed text-[#ccc] mb-6"
      >
        Fast, affordable, and seamless. Eureka brings fast bridging between
        Cosmos, Ethereum, and beyond in one connection, and one click. Powered
        by IBC v2 and the Cosmos Hub.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        custom={4}
        variants={textVariant}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button className="bg-gradient-to-r from-[#ff9800] to-[#ff402e] px-8 py-3 rounded-lg text-lg font-semibold">
          Make a Transfer
        </button>
        <button className="bg-[#111] px-6 py-3 rounded-lg text-lg font-semibold border border-[#464646] hover:border-[#555]">
          Speak to an Expert
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
