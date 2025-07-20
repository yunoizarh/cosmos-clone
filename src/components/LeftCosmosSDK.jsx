import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  CosmosSdkIcon,
  IbcProtocolIcon,
  CometBftIcon,
  CosmosJsIcon,
  CosmosWasmIcon,
} from "./CustomSvgs";

const services = [
  {
    icon: <CosmosSdkIcon />,
    title: "Cosmos SDK",
    description: "Interchain standard for building appchains",
  },
  {
    icon: <IbcProtocolIcon />,
    title: "IBC Protocol",
    description: "Connect ecosystems",
  },
  {
    icon: <CometBftIcon />,
    title: "CometBFT",
    description: "Best-in-class POS consensus",
  },
  {
    icon: <CosmosJsIcon />,
    title: "CosmJS",
    description: "Modern client-side solutions for Cosmos SDK appchains",
  },
  {
    icon: <CosmosWasmIcon />,
    title: "CosmWasm",
    description: "Smart contracting for appchains",
  },
];

// Container: Controls stagger between children
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

// Item: Uses `custom` to stagger each item by index
const itemVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    y: 20,
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
};

const LeftCosmosSDK = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="space-y-6 lg:space-y-8"
    >
      {services.map((service, index) => (
        <div key={index} className="space-y-10 lg:space-y-2 max-w-[300px]">
          <motion.div
            variants={itemVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-start gap-4 lg:gap-6 group cursor-pointer"
            whileHover={{
              x: 10,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
          >
            <div className="text-white duration-300">
              {service.icon || (
                <span className="text-red-700 text-xl">Missing icon</span>
              )}
            </div>
            <div className="flex-1 min-w-auto">
              <div className="flex items-center gap-2">
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.div>
              </div>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>

          {/* Border below each item */}
          <div className="w-full h-px bg-gray-600 group-hover:bg-gray-600 transition-colors duration-300" />
        </div>
      ))}
    </motion.div>
  );
};

export default LeftCosmosSDK;
