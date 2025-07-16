import React from "react";
import FirstSvg from "./FirstSvg";

const ScaleSection = () => {
  return (
    <section className="relative">
      <FirstSvg />
      <div className="w-full lg:w-1/2 text-white z-10 text-center lg:text-left absolute top-[25%] left-[15%]">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
          Blockchains that scale
        </h2>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-20 mb-6">
          <div>
            <p className="text-lg font-semibold text-gray-500 tracking-wide mb-1">
              NEAR-ZERO FEES
            </p>
            <p className="text-5xl font-bold">$0.01</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500 tracking-wide mb-1">
              TRANSACTION RATE AS LOW AS
            </p>
            <p className="text-5xl font-bold">500 ms</p>
          </div>
        </div>
        <p className="text-gray-300 mb-10 text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
          Build an appchain that scales at a fraction of the cost of platform
          chains, while inheriting the built-in security of appchain
          architecture assured by the Cosmos Hub.
        </p>
        <div>
          <button className="bg-white text-black px-16 py-5 rounded-xl font-semibold text-xl hover:bg-gray-200 transition">
            Learn more about appchains →
          </button>
        </div>
      </div>

      {/* <div className="bg-scaleBg bg-no-repeat bg-cover"></div> */}
    </section>
  );
};

export default ScaleSection;
