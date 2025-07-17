import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Interchain\nsecurity",
    description:
      "Leverage IBC connections for enterprise-grade security from Cosmos Hub's hundreds of validators.",
  },
  {
    title: "Interchain\naccounts",
    description:
      "Interchain accounts open up new frontiers for cross-chain applications. Manage cross-chain accounts and send messages to be executed on remote chains.",
  },
  {
    title: "IBC\nProtocol",
    description:
      "TCP/IP-inspired design makes for the most secure and proven cross-chain mechanism, unlike multisig and validator-secured bridges.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeatureSection() {
  return (
    <motion.section
      className="max-w-7xl mx-[6%] py-20 px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-[#111111] text-white p-8 rounded-2xl shadow-md h-[350px] flex flex-col justify-between "
          >
            <h3 className="text-3xl font-bold whitespace-pre-line">
              {feature.title}
            </h3>
            <p className="text-gray-300 font-light">{feature.description}</p>
            <div className="">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition flex items-center gap-1"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
