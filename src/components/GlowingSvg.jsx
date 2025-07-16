import React from "react";

const GlowingSvg = () => {
  return (
    <div className="z-0">
      <svg
        width="2333"
        height="1145"
        viewBox="0 0 2333 1145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg max-h-[700px]"
        data-v-4948961e=""
      >
        <path
          d="M2178 846.515C1861.16 672.967 1518.12 581 1167 581C816.14 581 472.649 672.831 156 846.13L156 1145L2178 1145V846.515Z"
          fill="url(#paint0_radial_16919_5464)"
          class="glare"
          data-v-4948961e=""
        ></path>{" "}
        <g filter="url(#filter0_i_16919_5464)" data-v-4948961e="">
          <path
            d="M1513.9 564.977C1481.74 562.4 1453.58 586.38 1451.01 618.537C1448.43 650.695 1472.41 678.853 1504.57 681.43C1536.72 684.007 1564.88 660.027 1567.46 627.87C1570.04 595.713 1546.06 567.555 1513.9 564.977Z"
            fill="url(#paint1_radial_16919_5464)"
            data-v-4948961e=""
          ></path>
        </g>{" "}
        <defs data-v-4948961e="">
          <filter
            id="filter0_i_16919_5464"
            x="1450.82"
            y="564.787"
            width="116.832"
            height="116.832"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
            data-v-4948961e=""
          >
            <feFlood
              flood-opacity="0"
              result="BackgroundImageFix"
              data-v-4948961e=""
            ></feFlood>{" "}
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
              data-v-4948961e=""
            ></feBlend>{" "}
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
              data-v-4948961e=""
            ></feColorMatrix>{" "}
            <feOffset data-v-4948961e=""></feOffset>{" "}
            <feGaussianBlur
              stdDeviation="12.2928"
              data-v-4948961e=""
            ></feGaussianBlur>{" "}
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              data-v-4948961e=""
            ></feComposite>{" "}
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.844 0 0 0 0 0.5125 0 0 0 0 1 0 0 0 0.56 0"
              data-v-4948961e=""
            ></feColorMatrix>{" "}
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_16919_5464"
              data-v-4948961e=""
            ></feBlend>
          </filter>{" "}
          <radialGradient
            id="paint0_radial_16919_5464"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1197.89 1557.4) rotate(-90) scale(976.401 2536.3)"
            data-v-4948961e=""
          >
            <stop offset="0.777954" data-v-4948961e=""></stop>{" "}
            <stop
              offset="0.991435"
              stop-color="#1E2732"
              data-v-4948961e=""
            ></stop>
          </radialGradient>{" "}
          <radialGradient
            id="paint1_radial_16919_5464"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1504.82 672.805) rotate(-83.5602) scale(125.368 111.655)"
            data-v-4948961e=""
          >
            <stop stop-color="#182069" data-v-4948961e=""></stop>{" "}
            <stop
              offset="0.723958"
              stop-color="#202DA2"
              data-v-4948961e=""
            ></stop>{" "}
            <stop
              offset="0.880208"
              stop-color="#FFE7D1"
              data-v-4948961e=""
            ></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GlowingSvg;
