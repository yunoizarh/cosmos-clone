import { ArrowRight, Plus } from "lucide-react";
import GlowingOrbFull from "../assets/images/glowing-orb-full.png";
import { NeutronsSvg } from "./CustomSvgs";

const NeutronsSection = () => {
  const datas = [
    {
      span: "Build trustless automation,",
      text: "verification, and more into your smart contract runtime",
    },
    {
      span: "Speed up development ",
      text: "with trusted Rust libraries, compile to WASM and deploy",
    },
    {
      span: "Aggregate liquidity ",
      text: "and onboard users from across different ecosystems",
    },
  ];
  return (
    <>
      <main className="grid grid-cols-2 gap-32 my-[5%]">
        <div className="left -ml-[15%]">
          <div className="-ml-[2%]">
            <img src={GlowingOrbFull} alt="bg glowing orb" />
          </div>
          <div className="-mt-[95%]">
            <NeutronsSvg />
          </div>
        </div>
        <div className="space-y-8 lg:space-y-12 mt-20 mr-[20%]">
          <div className="space-y-8 lg:space-y-10">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-relaxed ">
              Smart contracts done smarter
            </h1>

            <p className="text-gray-300 text-lg lg:text-xl font-light leading-loose tracking-wide max-w-2xl">
              The simplicity of smart contracts meets the power of the
              interchain stack. Create powerful economic primitives that
              aggregate functionality across multiple ecosystems. Neutron is the
              secure, simple, and cross-chain integrated smart contract platform
              you need to bring your interchain application to market.
            </p>
          </div>

          <div className="flex  items-center gap-10">
            <button className="group bg-white text-black px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold text-lg lg:text-xl flex items-center gap-3 hover:bg-gray-100 transition-colors duration-300">
              Neutron
              <ArrowRight className="w-6 h-6" />
            </button>
            <a
              href="#"
              className="flex justify-center items-center gap-2 text-2xl font-bold"
            >
              CosmWasm{" "}
              <span>
                <ArrowRight className="w-6 h-6" />
              </span>
            </a>
          </div>

          <section className="space-y-12 mt-20">
            {datas.map((data, i) => {
              return (
                <div key={i}>
                  <Plus />
                  <div className="text-xl font-light text-gray-300 leading-relaxed max-w-sm">
                    <span className="font-bold">{data.span}</span>
                    <span>{data.text}</span>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
};

export default NeutronsSection;
