import React from "react";
import "./BrandLogos.css";
import adidasLogo from "../../../assets/adidas.svg";
import nikeLogo from "../../../assets/nike.svg";
import pumaLogo from "../../../assets/puma.svg";
import diorLogo from "../../../assets/dior.svg";
import zaraLogo from "../../../assets/zara.svg";

const brands = [
  { id: 1, name: "Nike", logo: nikeLogo },
  { id: 2, name: "Adidas", logo: adidasLogo },
  { id: 3, name: "Puma", logo: pumaLogo },
  { id: 4, name: "Zara", logo: zaraLogo },
  { id: 5, name: "H&M", logo: diorLogo },
];

const BrandLogos = () => {
  return (
    <section className="brands-section">
      <h3>Trusted By Global Brands</h3>
      <div className="brands-container">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-item">
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandLogos;