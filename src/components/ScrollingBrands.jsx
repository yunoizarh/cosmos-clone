import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Import all your logos
import BabylonLabs from "../assets/logos/BabyLon-Labs.svg";
import DyDx from "../assets/logos/dydx2.svg";
import elysNetwork from "../assets/logos/elys-network.svg";
import injective from "../assets/logos/injective.svg";
import kinzaFinance from "../assets/logos/kinza-finance.svg";
import LOMBARD from "../assets/logos/LOMBARD.svg";
import LorenzoProtocol from "../assets/logos/LorenzoProtocol.svg";
import Mantra from "../assets/logos/Mantra.svg";
import pumpBTC from "../assets/logos/pumpBTC.svg";
import satLayer from "../assets/logos/satLayer.svg";
import solvProtocol from "../assets/logos/solv-protocol.svg";
import towerLabs from "../assets/logos/towerLabs.svg";
import Zkcloud from "../assets/logos/Zkcloud.svg";
import { MoveUpRight } from "lucide-react";

// Logos data (name + link + image src)
const logosData = [
  { name: "Babylon Labs", link: "https://babylonlabs.io", href: BabylonLabs },
  { name: "DyDx", link: "https://dydx.exchange", href: DyDx },
  { name: "Elys Network", link: "https://elys.network", href: elysNetwork },
  { name: "Injective", link: "https://injective.com", href: injective },
  { name: "Kinza Finance", link: "https://kinza.finance", href: kinzaFinance },
  { name: "Lombard", link: "https://lombard.finance", href: LOMBARD },
  {
    name: "Lorenzo Protocol",
    link: "https://lorenzo-protocol.xyz",
    href: LorenzoProtocol,
  },
  { name: "Mantra", link: "https://mantra.om", href: Mantra },
  { name: "PumpBTC", link: "https://pumpbtc.xyz", href: pumpBTC },
  { name: "SatLayer", link: "https://satlayer.xyz", href: satLayer },
  { name: "Solv Protocol", link: "https://solv.finance", href: solvProtocol },
  { name: "Tower Labs", link: "https://towerlabs.xyz", href: towerLabs },
  { name: "ZkCloud", link: "https://zkcloud.xyz", href: Zkcloud },
];

const ScrollingBrands = () => {
  const controls = useAnimation();
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Start animation on mount
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      },
    });
  }, [controls]);

  const handleMouseEnter = (logo, event) => {
    controls.stop();
    setHoveredLogo(logo);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (hoveredLogo) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setHoveredLogo(null);
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 50,
        ease: "linear",
      },
    });
  };

  const handleLogoClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative z-10">
      <div className="overflow-hidden py-8" onMouseMove={handleMouseMove}>
        <motion.div
          className="flex gap-10 w-max items-center"
          animate={controls}
        >
          {[...logosData, ...logosData].map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.href}
              alt={logo.name}
              title={logo.name}
              className="w-auto h-10 cursor-pointer opacity-55 hover:opacity-100 transition-transform duration-300 hover:scale-105"
              onMouseEnter={(e) => handleMouseEnter(logo, e)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleLogoClick(logo.link)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleLogoClick(logo.link)}
            />
          ))}
        </motion.div>
      </div>

      {/* Tooltip */}
      {hoveredLogo && (
        <div
          className="fixed z-50 bg-gray-100 text-gray-900 px-3 py-2 rounded-lg shadow-lg text-sm font-medium pointer-events-none"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 50,
            transform: "translateY(-100%)",
            whiteSpace: "nowrap",
          }}
        >
          <div className="flex flex-col items-start">
            <p className="font-semibold flex items-center gap-1">
              {hoveredLogo.name}
              <span className="w-3 h-3">
                <MoveUpRight className="w-full h-full" />
              </span>
            </p>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
};

export default ScrollingBrands;
