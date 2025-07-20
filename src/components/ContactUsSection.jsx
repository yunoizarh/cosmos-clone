import React from "react";

const ContactUsSection = () => {
  return (
    <section className="mx-[6%] px-6 py-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-2">
            Receive transmissions
          </h2>
          <p className="text-gray-400 text-sm font-light">
            Unsubscribe at any time.{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-white transition-colors text-white"
            >
              Privacy policy ↗
            </a>
          </p>
        </div>

        {/* Email Input Section */}
        <form className="w-full md:max-w-md">
          <div className="flex items-center bg-[#1a1a1a] rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-5 text-xl bg-transparent text-white placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 text-gray-400 hover:text-white transition-colors"
            >
              {/* Arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
