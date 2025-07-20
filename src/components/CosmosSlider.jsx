"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import InvestingBuildingImg from "../assets/images/investing-building.webp";
import XrpImg from "../assets/images/XRP-image.png";
import cosmosX from "../assets/images/cosmos-x-tac.webp";

const slides = [
  {
    title:
      "ICYMI: COSMOS and SunDAO X Space on Investing, Building, and Winning Together",
    description:
      "The interchain is an ecosystem designed to address various challenges in the context of blockchain and offer specific benefits that make it...",
    image: InvestingBuildingImg,
    link: "https://cosmos.network/interoperable-customizable-and-scalable-get-to-know-the-cosmos-network",
  },
  {
    title: "XRP is Unleashing DeFI with its Cosmos EVM Sidechain",
    description:
      "While the Cosmos SDK has been the foundation of hundreds of blockchains since its inception in 2018, it’s now starting to draw significant attention from other ecosystems in&nbsp;web3.",
    image: XrpImg,
    link: "https://blog.cosmos.network/xrp-is-unleashing-defi-with-its-cosmos-evm-sidechain-6b528d3ec375?source=rss----6c5d35b77e13---4",
  },
  {
    title: "Cosmos x TAC: Onboarding 1 billion Telegram users to crypto",
    description:
      "The next wave of web3 won’t be about niche tools or even the tech itself. It’ll be about distribution.",
    image: cosmosX,
    link: "https://blog.cosmos.network/cosmos-x-tac-onboarding-1-billion-telegram-users-to-crypto-cfdecd7cd493?source=rss----6c5d35b77e13---4",
  },
];

export default function CosmosSlider() {
  const swiperRef = useRef(null);

  return (
    <section className=" py-6 mx-[5%] md:px-10 relative">
      <h3 className="text-center text-4xl font-bold my-10">New & Updates</h3>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#181818] rounded-2xl p-6  md:p-32 max-h-screen flex flex-col lg:flex-row items-center gap-8">
              {/* Text */}
              <div className="flex-1 space-y-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-500 mb-6 text-xl">
                  {slide.description}
                </p>
                <a
                  href={slide.link}
                  className="flex items-center gap-1 max-w-min bg-white text-black px-6 py-3 rounded-xl font-medium transition hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read{" "}
                  <span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
              {/* Image */}
              <div className="flex-[1.2]">
                <img
                  src={slide.image}
                  alt="Cosmos slide"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 text-white bg-[#181818] rounded-full hover:scale-110 transition"
        >
          <ArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 text-white bg-[#181818] rounded-full hover:scale-110 transition"
        >
          <ArrowRight />
        </button>
      </div>
      <a href="#" className="flex items-center gap-1 my-20 text-xl font-bold">
        Read more interchain news{" "}
        <span>
          <ArrowRight />
        </span>
      </a>
    </section>
  );
}
