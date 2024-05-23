import  "./About.css";
import Header from "../../comp/header/Header";
import Footer from "../../comp/footer/Footer";
import { Helmet } from "react-helmet-async";
import img from '../../assets/about.jpeg';



export default function About() {
  return (
    <div>
      <Helmet>
        <title>ABOUT</title>
      </Helmet>
      <Header />
      <h1>wellcome to <span>alexander</span> </h1>
      <div className="about-container">
        <div className="about-inf">
          <h2>about us</h2>
          <p>
            At alexander
            , we believe that shopping should be an enjoyable and
            effortless experience. Founded in 1995, our mission is to bring
            you the best products from around the world, right to your doorstep.
            We pride ourselves on offering a diverse range of high-quality items
            at unbeatable prices. alexander started
            as a small idea with a big dream: to create an online marketplace
            where customers can find everything they need in one place. Over the
            years, we’ve grown from a humble startup into a leading e-commerce
            platform, serving thousands of happy customers worldwide.
          </p>
        </div>
        <div className="about-img">
          <img src={img} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
