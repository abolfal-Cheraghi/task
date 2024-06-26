import React from "react";
import FormJoin from "../../modules/Form";

function Hero() {
  return (
    <section className="hero">
      <div className="h-screen relative flex items-center justify-center">
        <div
          className="absolute   inset-0 top-0 right-0 left-0 h-full before:content-[''] before:w-full before:h-[250px] md:before:h-[550px] before:absolute before:bottom-0 before:left-0  before:bg-gradient-to-t before:from-[#000000] before:to-transparent  "
          style={{ width: "100% !important" }}
        >
          <img
            src="/images/wallet-top-section.png"
            alt="background Hero"
            className="h-full 3xl:hidden w-full object-cover object-center"
          />
          <img
            src="/images/wallet-top-section-big.webp"
            alt="background Hero"
            className="h-full hidden 3xl:block w-full object-cover object-center"
          />
        </div>
        {/* shadow bg */}
        {/* <div className="w-full h-[300px] absolute top-0 lg:bg-gradient-to-b lg:from-accent lg:to-bg-transparent " /> */}
        <div className="w-full h-[400px] absolute bottom-0 h-[270px] md:h-[550px] bg-gradient-to-t from-accent bg-[rgb('7 11 19 / 0.9')] to-[rgb('7 11 19 / 0')]" />
        {/* conver bg */}
        <div className="absolute  left-0 w-full h-full inset-0">
          <img
            src="/svg/back-shadow-2.svg"
            alt="cover bg"
            className="absolute bottom-10 md:bottom-0 -translate-x-1/2 left-[50%]  "
          />
        </div>
        {/* content */}
        <div className="container flex flex-col items-center justify-center gap-20 z-20 ">
          <div>
            <img src="/svg/logo.svg" alt="Logo " />
          </div>

          <div className="flex flex-col gap-7 md:gap-10 max-w-[600px] inset-0">
            <h1 className="title  mx-auto">
              Your <span className="text-sky-blue">AI-Powered</span> Hero in the
              Web3 Universe
            </h1>
            <p className="text-center text-white text-lg md:text-3xl">
              Coming Soon..
            </p>
            <FormJoin />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
