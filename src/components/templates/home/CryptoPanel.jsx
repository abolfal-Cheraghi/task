import React from "react";

function CryptoPanel() {
  return (
    <section className="crypto-panel bg-accent">
      <div className="container py-2 ">
        <div className="flex flex-col items-center gap-6">
          <div className="">
            <img src="/svg/Lines.svg" alt="Crypto lines" />
          </div>
          <h2 className="title leading-[40px] max-w-[700px]">
            Entire <span className="text-sky-blue">crypto knowledge</span> at
            your fingertips
          </h2>
          <p className="text-center max-w-[300px] md:max-w-[600px] text-sm md:text-lg">
            Hero.io is an AI-driven platform that simplifies your crypto
            adventure. It provides accurate info, uncovers blockchain truths,
            assists you in managing digital assets, and keeps you updated on
            market trends.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CryptoPanel;
