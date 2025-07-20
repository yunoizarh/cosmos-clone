import LittleShadowThingy from "../assets/images/little-shadow-thingy.png";
import {
  ConnectViaIbcIcon,
  BecomeAValidatorIcon,
  BuildAnAppchainIcon,
  ShinyOrbForCard,
} from "./CustomSvgs";
import glowingOrb from "../assets/images/glowing-orb-complete.svg";
import { ArrowRight } from "lucide-react";
export default function BuildingInterchainSection() {
  const cards = [
    {
      id: 1,
      label: "CONNECT",
      title: "Connect via IBC",
      description:
        "Grow the economy and interoperability of your chain with the IBC protocol.",
      image: <ConnectViaIbcIcon />, // Replace with correct path
    },
    {
      id: 2,
      label: "VALIDATE",
      title: "Become a validator",
      description:
        "Join a group of trusted decentralized validators to help secure the interchain.",
      image: <BecomeAValidatorIcon />,
    },
    {
      id: 3,
      label: "APPCHAINS",
      title: "Build an appchain",
      description:
        "Bring services to the interchain with out of the box appchain technology, and best in class security.",
      image: <BuildAnAppchainIcon />,
    },
  ];

  return (
    <>
      <main className="relative">
        <div className="z-0 -mt-[5%]">
          <img
            src={LittleShadowThingy}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <section className="px-4 md:px-10 mx-[6%] -mt-[50%] z-20">
          <h3 className="text-center text-6xl my-16 font-extrabold">
            Start building on the interchain
          </h3>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative bg-[#111111] rounded-2xl flex flex-col justify-between min-h-[500px] transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="relative size-52  mx-auto mb-6 ">
                    <div className="">
                      <img
                        src={glowingOrb}
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain z-0"
                      />
                    </div>

                    <div className="absolute inset-0 z-10 h-[500px] w-[650px] ">
                      {card.image}
                    </div>
                  </div>

                  <div className="mx-6 my-20">
                    <p className="text-sm text-gray-400 font-bold tracking-wide mb-1">
                      {card.label}
                    </p>
                    <h3 className="text-3xl font-bold mb-3">
                      <span className="flex items-center gap-2">
                        {card.title}
                        <ArrowRight />
                      </span>
                    </h3>

                    <p className="text-gray-400 text-sm">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
