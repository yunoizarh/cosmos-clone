import { motion } from "framer-motion";
import {
  Send,
  Twitter,
  MessageCircleMore,
  CircleSlash,
  ArrowUpLeft,
  ArrowUpRight,
} from "lucide-react";

export default function CommunitySection() {
  const cards = [
    {
      icon: <Send size={32} />,
      title: "Community Chat",
      description:
        "Ask general questions and chat with the worldwide community on Telegram.",
    },
    {
      icon: <Twitter size={32} />,
      title: "Twitter",
      description:
        "Follow @cosmos to get the latest news and updates from across the ecosystem.",
    },
    {
      icon: <MessageCircleMore size={32} />,
      title: "Developer Chat",
      description:
        "Have technical questions about Cosmos tools? Ask a developer on the Community Discord.",
    },
    {
      icon: <CircleSlash size={32} />,
      title: "Cosmos Forum",
      description:
        "Thinking about becoming a validator or interested in network matters? Join the discussion.",
    },
  ];

  return (
    <div className="px-6 md:px-20 py-20 mx-[10%] -mt-[10%]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl text-left"
      >
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
          A fast-growing,
          <br /> global community
        </h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
          Join a fast-growing community of developers and innovators connected
          all over the world, building the new era of the internet.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 mt-16 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <motion.a
            href="#"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex items-start space-x-8"
          >
            <div className="">{card.icon}</div>
            <div>
              <h3 className="font-bold text-xl flex items-center">
                {card.title}
                <span className="ml-1">
                  <ArrowUpRight />
                </span>
              </h3>
              <p className="text-gray-400 text-lg font-extralight leading-relaxed mt-1">
                {card.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
