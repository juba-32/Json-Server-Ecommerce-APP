import React from "react";
import Hero from "../../comp/hero/Hero.jsx";
import HomePro from "../../comp/homePro/HomePro.jsx";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>ALEXANDER</title>
      </Helmet>
      <Hero />
      <HomePro />
    </div>
  );
}
