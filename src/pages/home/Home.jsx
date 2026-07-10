import Hero from "./hero/Hero.jsx";
import HomePro from "./homePro/HomePro.jsx";
import { Helmet } from "react-helmet-async";
import SeasonalOffer from "./seasonalOffer/SeasonalOffer.jsx";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts.jsx";
import CustomerReviews from "./CustomerReviews/CustomerReviews.jsx";
import BrandLogos from "./BrandLogos/BrandLogos.jsx";
import Newsletter from "./Newsletter/Newsletter.jsx";

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
      <BrandLogos />
      <CustomerReviews />
      <Newsletter />
    </div>
  );
}
