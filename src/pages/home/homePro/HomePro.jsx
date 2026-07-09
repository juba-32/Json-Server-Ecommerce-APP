import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../../redux/createSlice";
import "./HomePro.css";

export default function HomePro() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://json-server-iota-orpin.vercel.app/products")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCategorySelection = (category) => {
    dispatch(setSelectedCategory(category));
    navigate("/products");
  };

  const categories = ["men", "women", "kids"];
  
  if (loading) return <div className="loading">Loading...</div>;

  return (
    <section className="banner-section">
      <h2 className="section-title">Shop by Category</h2>
      <div className="pro-container">
        {categories.map((cat, index) => {
          const product = data.find(p => p.category === cat);
          return (
            <div
              key={index}
              className="category-card"
              onClick={() => handleCategorySelection(cat)}
            >
              <img src={product?.imageUrl} alt={cat} />
              <div className="over">
                <h3>{cat.toUpperCase()}</h3>
                <button>Shop Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}