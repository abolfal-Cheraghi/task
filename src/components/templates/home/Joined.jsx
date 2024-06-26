import React from "react";
import FormJoin from "../../modules/Form";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Joined() {
  return (
    <section className=" w-full  min-h-[800px] md:min-h-fit relative">
      <div className="flex flex-col relative pt-8 pb-64">
        {/* gradient top */}
        <div className="inset-0 absolute top-0 left-0 w-full h-[250px] md:h-[600px] gradient-to-bottom" />
        {/* background */}
        <div className="inset-0 h-full w-full absolute -z-20 before:content-[''] before:inset-8 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#00000050]">
          <img
            src="/images/Ai-Deep-Learning-City-Big.png"
            alt="Ai Deep Learning City Big"
            className="hidden 3xl:block h-full w-full object-cover object-center"
          />
          <img
            src="/images/Ai-Deep-Learning-City.png"
            alt="Ai Deep Learning City "
            className="hidden sm:block 3xl:hidden h-full w-full object-cover object-center"
          />
          <img
            src="/images/Ai-Deep-Learning-City-mobile.png"
            alt="Ai Deep Learning City mobile"
            className="sm:hidden 3xl:hidden h-full w-full object-cover object-center"
          />
        </div>
        {/* main */}
        <div className="mx-auto z-10 flex ">
          <div className="flex flex-col items-center gap-20 md:gap-40">
            <h1 className="text-center text-xl sm:text-[28px] md:text-[38px] lg:text-[48px] leading-[22px] sm:leading-[50px] lg:leading-[60px] flex flex-col">
              <span>Developed by world leading experts in</span>
              <span className="text-gradient-sky">
                Artificial Intelligence, Deep Learning
              </span>
              <span className="text-gradient-sky">
                Natural Language Processing
              </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <img
                src="/images/brand-1.png"
                alt="Brand 1"
                className="w-52 md:w-fit"
              />
              <img
                src="/images/brand-2.png"
                alt="Brand 2"
                className="w-52 md:w-fit"
              />
            </div>
          </div>
        </div>

        {/* form be joined */}
        <div className="container mt-28 md:mt-36">
          <div className="flex items-start justify-center lg:justify-between z-10">
            <img
              src="/svg/line-left.svg"
              alt="Line left"
              className="hidden lg:block flex-1"
            />
            <div className="flex flex-col items-center justify-center gap-4">
              <h3 className="text-md md:text-xl text-center font-semibold">
                Make your crypto decisions smarter -join
                <span className="text-sky-blue"> Hero.io</span> today.
              </h3>
              <FormJoin pInput="py-4" />
            </div>
            <img
              src="/svg/line-right.svg"
              alt="Line Right"
              className="hidden lg:block flex-1"
            />
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="container h-fit absolute bottom-0 px-10 py-4">
        <div className="flex flex-col gap-5 md:gap-8">
          {/* sub footer */}
          <div className="sub-footer grid grid-cols-2">
            {/*left */}
            <div className="9bb6c2 flex flex-col md:flex-row justify-center items-center gap-5 md:gap-60 md:justify-start ">
              <a href="#" className="text-[#9bb6c2]">
                What is Hero?
              </a>
              <a href="#">
                <FaXTwitter size="20px" className=" fill-[#9bb6c2]" />
              </a>
            </div>
            {/* right */}
            <div className="9bb6c2 flex flex-col md:flex-row-reverse justify-center items-center gap-5 md:gap-60 md:justify-start  ">
              <a href="#" className="text-[#9bb6c2]">
                Join the private group
              </a>
              <a href="#">
                <FaTelegramPlane size="20px " className="fill-[#9bb6c2]" />
              </a>
            </div>
          </div>
          {/* dividing line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-white/0 via-white/40 to-white/0"></div>
          {/* copy righting */}
          <p className="text-[#9bb6c2] text-sm text-center">
            Copyright © 2024 Hero.io - All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Joined;
