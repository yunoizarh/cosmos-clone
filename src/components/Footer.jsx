import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CosmosFooter = () => {
  const footerData = {
    "Products & Solutions": [
      { name: "Cosmos SDK", hasArrow: false },
      { name: "Cosmos EVM", hasArrow: false },
      { name: "IBC Protocol", hasArrow: false },
      { name: "CometBFT", hasArrow: false },
      { name: "CosmWasm", hasArrow: false },
      { name: "IBC Eureka", hasArrow: false },
      { name: "Institutional Solutions", hasArrow: false },
      { name: "Hydro", hasArrow: true },
    ],
    Developers: [
      { name: "Tools&Resources", hasArrow: false },
      { name: "Tutorials", hasArrow: true },
      { name: "Developer Academy", hasArrow: true },
      { name: "Builders Program", hasArrow: false },
      { name: "FAQ", hasArrow: false },
      { name: "IBC Protocol Docs", hasArrow: true },
      { name: "Cosmos SDK Docs", hasArrow: true },
      { name: "Cosmos EVM Docs", hasArrow: true },
      { name: "CometBFT Docs", hasArrow: true },
      { name: "CosmWasm Docs", hasArrow: true },
      { name: "IBC Eureka Docs", hasArrow: true },
    ],
    Explore: [
      { name: "Cosmos Ecosystem", hasArrow: false },
      { name: "Tokens", hasArrow: false },
      { name: "Wallets", hasArrow: false },
      { name: "Block Explorers", hasArrow: false },
    ],
    "Get in Touch": [
      { name: "About", hasArrow: false },
      { name: "Contact", hasArrow: false },
      { name: "Press Kit", hasArrow: false },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const columnVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
  };

  return (
    <div className="mx-[10%]">
      {/* Top separator line */}
      <motion.div
        className="w-full h-px bg-gray-900"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Footer content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {Object.entries(footerData).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                variants={columnVariants}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold">{category}</h3>

                <div className="space-y-4">
                  {links.map((link, linkIndex) => (
                    <motion.div
                      key={linkIndex}
                      variants={linkVariants}
                      className="group cursor-pointer"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      <div className=" font-extralight flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200">
                        <span className="text-base">{link.name}</span>
                        {link.hasArrow && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay:
                                0.5 + categoryIndex * 0.1 + linkIndex * 0.05,
                            }}
                            className="group-hover:translate-x-1 transition-transform duration-200"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>

      {/* Bottom separator line */}
      <motion.div
        className="w-full h-px bg-gray-800"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      />
    </div>
  );
};

export default CosmosFooter;
