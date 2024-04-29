import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden glass bg-gradient-to-b from-blue-600  to-blue-900 h-full min-h-screen p-4 md:p-[100px] flex flex-col justify-center ">
      <div className="md:grid md:grid-cols-12 gap-x-12 text-white ">
        <div className="md:col-span-9 space-y-9">
          <div className="py-3 flex items-center  text-white after:flex-1 after:border-t after:border-gray-200 after:ms-6 after:max-w-2xl after:opacity-25 dark:text-white dark:after:border-white text-xl font-bold uppercase">
            Odadee99ai.net
          </div>
          <div className="max-w-3xl">
            Through practical experiences, collaborative efforts across
            disciplines, and a strong foundation in ethics, we are laying the
            groundwork for a future where students can harness AI to create
            positive change in their own lives and communities.
          </div>
          <div className="inline-flex items-center text-sm text-white">
            <div>&copy; {currentYear} Odadee99AI</div>{" "}
            <div className="border-s border-white ps-5 ms-5">
              <div>All Rights Reserved.</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-2 gap-x-4">
          <div>
            <h1 className="text-xl font-semibold text-white uppercase dark:text-neutral-100">
              About
            </h1>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-white hover:text-gray-800  dark:hover:text-neutral-200"
                  href="#"
                >
                  Pricing
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-white hover:text-gray-800  dark:hover:text-neutral-200"
                  href="#"
                >
                  Changelog
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-white hover:text-gray-800  dark:hover:text-neutral-200"
                  href="#"
                >
                  Docs
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-white hover:text-gray-800  dark:hover:text-neutral-200"
                  href="#"
                >
                  Download
                </a>
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white uppercase dark:text-neutral-100">
              Product
            </h1>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-white hover:text-gray-800  dark:hover:text-neutral-200"
                  href="#"
                >
                  Pricing
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-white hover:text-gray-800  dark:hover:text-neutral-200"
                  href="#"
                >
                  Changelog
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-white hover:text-gray-800  dark:hover:text-neutral-200"
                  href="#"
                >
                  Docs
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-white hover:text-gray-800  dark:hover:text-neutral-200"
                  href="#"
                >
                  Download
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fastenBottom w-full font-extrabold text-[12.5rem] text-blue-100 opacity-15 ">
        <span className="text-[15.5rem] uppercase">O</span>dadee
        <span className="text-[15.5rem]">99</span>AI
      </div>
    </footer>
  );
};

export default Footer;
