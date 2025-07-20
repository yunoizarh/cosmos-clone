import React from "react";
import { motion } from "framer-motion";
import FirstSvg from "./FirstSvg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ScaleSection = () => {
  return (
    <section className="relative overflow-hidden">
      <FirstSvg />

      <motion.div
        className="w-full lg:w-1/2 text-white z-10 text-center lg:text-left absolute top-[25%] left-[15%]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight"
          variants={fadeInUp}
        >
          Blockchains that scale
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row justify-center lg:justify-start gap-20 mb-6"
          variants={containerVariants}
        >
          <motion.div variants={fadeInUp}>
            <p className="text-lg font-semibold text-gray-500 tracking-wide mb-1">
              NEAR-ZERO FEES
            </p>
            <p className="text-5xl font-bold">$0.01</p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="text-lg font-semibold text-gray-500 tracking-wide mb-1">
              TRANSACTION RATE AS LOW AS
            </p>
            <p className="text-5xl font-bold">500 ms</p>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-gray-300 mb-10 text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0"
          variants={fadeInUp}
        >
          Build an appchain that scales at a fraction of the cost of platform
          chains, while inheriting the built-in security of appchain
          architecture assured by the Cosmos Hub.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <button className="bg-white text-black px-16 py-5 rounded-xl font-semibold text-xl hover:bg-gray-200 transition">
            Learn more about appchains →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ScaleSection;
