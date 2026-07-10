import React from 'react';
import { FaShippingFast, FaUndo, FaLock, FaHeadset } from 'react-icons/fa';
import "./Features.css";

const Features = () => {
  const features = [
    { icon: <FaShippingFast />, title: "Free Shipping", desc: "On orders over $100" },
    { icon: <FaUndo />, title: "Easy Returns", desc: "30-day money-back guarantee" },
    { icon: <FaLock />, title: "Secure Payment", desc: "100% secure checkout" },
    { icon: <FaHeadset />, title: "24/7 Support", desc: "Always here to help" }
  ];

  return (
    <section className="features-container">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <div className="icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;