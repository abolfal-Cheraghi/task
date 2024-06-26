import React from "react";
import Hero from "../../components/templates/home/Hero";
import CryptoPanel from "../../components/templates/home/CryptoPanel";
import Tabs from "../../components/templates/home/Tabs";
import More from "../../components/templates/home/More";
import Joined from "../../components/templates/home/Joined";

function Home() {
  return (
    <>
      <Hero />
      <CryptoPanel />
      <Tabs />
      <More />
      <Joined />
    </>
  );
}

export default Home;
