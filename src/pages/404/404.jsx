import React from "react";
import BtnPink from "../../components/modules/BtnPink";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <section className="not-found h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <img
            src="/public/images/hero_new_bot.png"
            alt="hero bot"
            className="w-[300px] animate-bounce-slow"
          />

          <div className="flex flex-col items-center gap-5">
            <h1 className="title lg:text-[60px] text-sky-blue">
              Page Not Found
            </h1>
            <p className="text-sm md:text-lg lg:text-[20px] max-w-[250px] text-center md:max-w-full">
              Sorry, the page you are looking for does not exist.
            </p>
            <BtnPink className="py-[10px]" onCLick={() => navigate("/")}>
              go to Home
            </BtnPink>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
