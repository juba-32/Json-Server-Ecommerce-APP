import "./About.css";
import Features from "./features/Features.jsx";
import AboutImage from "../../assets/about.jpeg";
const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Our Store</h1>
        <p>Bringing you the best quality products with passion and dedication.</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2026, our store started with a simple idea: to make 
            high-quality products accessible to everyone. We believe that 
            shopping should be an experience, not just a transaction.
          </p>
          <p>
            Our team works tirelessly to source the best items, ensuring 
            that every product you receive meets our high standards of quality.
          </p>
        </div>
        <div className="about-image">
          <img src={AboutImage} alt="About Us" />
        </div>
      </section>

      <Features />
    </div>
  );
};

export default About;