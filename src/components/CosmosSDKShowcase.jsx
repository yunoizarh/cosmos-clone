import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import GlowingOrbHalf from "../assets/images/glowing-orb-half.png";
import LeftCosmosSDK from "./LeftCosmosSDK";
import { GlobeThingySvg } from "./CustomSvgs";
const CosmosSDKShowcase = () => {
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

  return (
    <section className="px-4 lg:px-8">
      <div>
        <div className="-mt-[38%]">
          <img src={GlowingOrbHalf} alt="second section" />
        </div>
        <div className="-mt-[47%] flex justify-center items-center">
          <GlobeThingySvg />
        </div>
      </div>

      <div className="max-w-7xl mx-[15%]  z-30">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-16 items-center">
          {/* Left Section - Services */}
          <LeftCosmosSDK />

          {/* Right Section - Main Content */}
          <div className="space-y-8 lg:space-y-12 mt-20">
            <div className="space-y-8 lg:space-y-10">
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Design to spec, at internet scale
              </h1>

              <p className="text-gray-300 text-lg lg:text-xl font-light leading-loose max-w-2xl">
                Customize your appchain from business logic to block production.
                Sovereignty means you control every aspect of consensus,
                governance, permissions, and smart contracts.
              </p>
            </div>

            <button className="group bg-white text-black px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold text-lg lg:text-xl flex items-center gap-3 hover:bg-gray-100 transition-colors duration-300">
              Get started with Cosmos SDK
              <div>
                <ArrowRight className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-2 gap-14 mt-28 mx-[13%]">
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
