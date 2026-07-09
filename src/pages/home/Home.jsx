import Hero from "./hero/Hero.jsx";
import HomePro from "./homePro/HomePro.jsx";
import { Helmet } from "react-helmet-async";
import Features from "./features/Features.jsx";
import SeasonalOffer from "./seasonalOffer/SeasonalOffer.jsx";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts.jsx";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>ALEXANDER</title>
      </Helmet>
      <Hero />
      <HomePro />
      <SeasonalOffer />
      <FeaturedProducts />
      <Features />
    </div>
  );
}
