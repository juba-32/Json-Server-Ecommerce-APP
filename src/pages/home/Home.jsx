import React from "react";
import Header from "../../comp/header/Header.jsx";
import Hero from "../../comp/hero/Hero.jsx";
import Footer from "../../comp/footer/Footer.jsx";
import HomePro from "../../comp/homePro/HomePro.jsx";
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>ALEXANDER</title>
      </Helmet>
      <Header />
      <Hero />
      <HomePro />
      <Footer />
    </div>
  );
}
