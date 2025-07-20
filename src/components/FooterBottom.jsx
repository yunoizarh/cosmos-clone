import { motion } from "framer-motion";
import { MessageCircle, Twitter, Github, Send, Youtube } from "lucide-react";
import { CosmosLogo } from "./CustomSvgs";

const FooterBottom = () => {
  const socialLinks = [
    { icon: <MessageCircle className="w-5 h-5" />, label: "Medium", url: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", url: "#" },
    {
      icon: (
        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">
          R
        </div>
      ),
      label: "Reddit",
      url: "#",
    },
    { icon: <Send className="w-5 h-5" />, label: "Telegram", url: "#" },
    { icon: <Github className="w-5 h-5" />, label: "Discord", url: "#" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube", url: "#" },
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

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
  };

  return (
    <div className="mx-[10%] mb-[5%]">
      {/* Top separator line */}
      <motion.div
        className="w-full h-px bg-gray-900"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Footer bottom content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-8 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top section with logo, links, and social icons */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0 mb-8">
          {/* Left side - Logo and links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <CosmosLogo />
            </motion.div>

            <div className="flex gap-6 lg:gap-8">
              <motion.a
                variants={itemVariants}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base"
              >
                Privacy
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base"
              >
                Trademark
              </motion.a>
            </div>
          </div>

          {/* Right side - Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                variants={socialVariants}
                href={social.url}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Trademark text */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-sm leading-relaxed mb-6"
        >
          Cosmos is a registered trademark of the{" "}
          <span className="text-white">Interchain Foundation</span>.
        </motion.p>

        {/* Disclaimer text */}
        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-xs leading-relaxed max-w-6xl"
        >
          This website is maintained by the Interchain Foundation (ICF) on
          behalf of the decentralized community. The contents and opinions of
          this website do not necessarily reflect those of the ICF. This website
          links to projects, dApps and cryptocurrency exchanges as a service to
          the public. The ICF does not warrant that the information provided by
          these websites is correct, complete, and up-to-date. The ICF is not
          responsible for the content of those websites and expressly rejects
          any liability for damages of any kind resulting from the use,
          reference to, or reliance on any information contained within these
          websites. If you spot an error or issue on this website, please email
          marketing [at] interchain.io
        </motion.p>
      </motion.div>
    </div>
  );
};

export default FooterBottom;
