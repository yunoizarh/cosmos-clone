import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Network,
  Shield,
  Zap,
  Code,
  Globe,
  Plus,
} from "lucide-react";
import secondBg from "../assets/images/second-bg.png";
import GlowingSvg from "./GlowingSvg";
const CosmosSDKShowcase = () => {
  const services = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Cosmos SDK",
      description: "Interchain standard for building appchains",
      delay: 0.1,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "IBC Protocol",
      description: "Connect ecosystems",
      delay: 0.2,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "CometBFT",
      description: "Best-in-class POS consensus",
      delay: 0.3,
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "CosmJS",
      description: "Modern client-side solutions for Cosmos SDK appchains",
      delay: 0.4,
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "CosmWasm",
      description: "Smart contracting for appchains",
      delay: 0.5,
    },
  ];

  const datas = [
    {
      span: "Build with full sovereignty, ",
      text: "from choice of validators to customizing your runtime.",
    },
    {
      span: "Maximize flexibility ",
      text: "to define the state of your application. Customize runtime, transaction types, and state transition functions.",
    },
    {
      span: "Build in your language of choice.  ",
      text: "ABCI can be wrapped in any programming language including Go and Rust.",
    },
    {
      span: "Scale without bottlenecks ",
      text: "and throughput limitations using CometBFT consensus engine.",
    },
  ];

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

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const rightSectionVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.6,
      },
    },
  };

  return (
    <section className="px-4 lg:px-8">
      <div>
        <div className="-mt-[38%]">
          <img src={secondBg} alt="second section" />
        </div>
        <div className="-mt-[47%] flex justify-center items-center">
          <GlowingSvg />
        </div>
      </div>

      <div className="max-w-7xl mx-[12%]  z-30">
        <div className="grid lg:grid-cols-2 gap-36 lg:gap-16 items-center">
          {/* Left Section - Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 lg:space-y-8"
          >
            {services.map((service, index) => (
              <div key={index} className="space-y-1 lg:space-y-2">
                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4 lg:gap-6 group cursor-pointer"
                  whileHover={{
                    x: 10,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                >
                  <div className="flex-shrink-0 lg:p-4 bg-gray-900 rounded-lg transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-auto">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: service.delay + 0.3 }}
                      >
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                      </motion.div>
                    </div>
                    <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>

                {/* Border BELOW each item */}
                <div className="w-full h-px bg-gray-800 group-hover:bg-gray-600 transition-colors duration-300" />
              </div>
            ))}
          </motion.div>

          {/* Right Section - Main Content */}
          <div className="space-y-8 lg:space-y-12 mt-24">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Design to spec, at internet scale
              </h1>

              <p className="text-gray-300 text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                Customize your appchain from business logic to block production.
                Sovereignty means you control every aspect of consensus,
                governance, permissions, and smart contracts.
              </p>
            </div>

            <button className="group bg-white text-black px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold text-lg lg:text-xl flex items-center gap-3 hover:bg-gray-100 transition-colors duration-300">
              Get started with Cosmos SDK
              <div>
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-2 gap-14 mt-28 mx-[12%]">
        {datas.map((data, i) => {
          return (
            <div key={i}>
              <Plus />
              <div className="text-xl font-light text-gray-200 leading-relaxed">
                <span className="font-bold">{data.span}</span>
                <span>{data.text}</span>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default CosmosSDKShowcase;
