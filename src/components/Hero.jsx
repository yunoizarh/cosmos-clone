const Hero = () => {
  return (
    <section className="pt-20 px-6 text-center text-[#f6f4f5]">
      {/* Tag */}
      <button
        type="button"
        className="relative px-[18px] py-[6px] rounded-full text-xl font-medium tracking-wide mb-3 bg-transparent"
      >
        {/* Gradient Border */}
        <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#fb893d] via-[#ffcf6f] to-[#b377fd]">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-[#050519]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffcf6f] to-[#b377fd]">
              NEW
            </span>
          </span>
        </span>
        {/* Required for correct stacking */}
        <span className="invisible">NEW</span>
      </button>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-[119px] font-black tracking-tight mb-0">
        IBC Eureka is Live
      </h1>

      {/* Subheading */}
      <h2 className="text-2xl md:text-5xl font-bold tracking-tighter  mb-6">
        Cosmos to Ethereum
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-sm md:text-xl md:max-w-xl font-light leading-relaxed text-[#ccc] mb-6">
        Fast, affordable, and seamless. Eureka brings fast bridging between
        Cosmos, Ethereum, and beyond in one connection, and one click. Powered
        by IBC v2 and the Cosmos Hub.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-gradient-to-r from-[#ff9800] to-[#ff402e] px-8 py-3 rounded-lg text-lg font-semibold">
          Make a Transfer
        </button>
        <button className="bg-[#111] px-6 py-3 rounded-lg text-lg font-semibold border border-[#464646] hover:border-[#555]">
          Speak to an Expert
        </button>
      </div>
    </section>
  );
};

export default Hero;
