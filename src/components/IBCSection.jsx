import { motion } from "framer-motion";
import ibcCoins from "../assets/logos/coinSvg.svg";

const IBCSection = () => {
  return (
    <section className="py-20 px-6 lg:px-20 mx-[2%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-20">
        {/* LEFT TEXT (span 2 columns) */}
        <div className="lg:col-span-2">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl lg:text-6xl font-bold leading-tight max-w-xl"
          >
            IBC: your protocol's connection to the global digital economy
          </motion.h2>

          {/* bottom grid */}
          <div className="flex justify-center items-center gap-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 text-gray-400 text-lg max-w-xl "
            >
              Exchange data, value and tokens with the world's most secure and
              widely-adopted cross-chain messaging protocol.
            </motion.p>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-7xl font-bold"
              >
                $120B
                <span className=" text-3xl align-bottom">+</span>
                <span className="text-gray-400 text-sm font-light ml-2">
                  USD
                </span>
              </motion.h3>

              <p className="text-gray-400 mt-5 text-sm lg:text-base">
                Total IBC-connected economy
              </p>

              <motion.a
                href="#"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-6 text-white font-semibold underline underline-offset-4 hover:text-blue-400"
              >
                Explore Tokens →
              </motion.a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES (1 column) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <img
            src={ibcCoins}
            alt="IBC Coins"
            className="animate-float absolute bottom-5 rotate-20 z-0"
          />
          <img
            src={ibcCoins}
            alt="IBC Coins"
            className="animate-float absolute -bottom-5 right-40 -rotate-15 z-20"
          />
          <img
            src={ibcCoins}
            alt="IBC Coins"
            className="animate-float absolute -top-7 rotate-40 z-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IBCSection;
