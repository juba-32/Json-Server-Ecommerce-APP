import { NavLink } from "react-router-dom";
import "./HomePro.css";
import { useState, useEffect } from "react";
import { addToCart } from "../redux/createSlice";
import { useDispatch } from "react-redux";
import { MdShoppingCart } from "react-icons/md";
import { Button } from "@mui/material";

export default function HomePro() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://json-server-iota-orpin.vercel.app/products");
      const products = await response.json();
      console.log(products);
      setData(products);
    })();
  }, []);

  return (
    <div>
      <div className="product-container">
        {data?.slice(6).map((product) => (
          <div key={product.id} className="card">
            <img src={product.imageUrl} alt={product.name} />
            <div className="card-content">
              <div className="card-info">
                <h2>{product.name}</h2>
                <span className="price">${product.price}</span>
              </div>
              <p>{product.description}</p>
              <Button
                  className="btn"
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                  variant="contained"
                  endIcon={<MdShoppingCart />}
                >
                  Add 
                </Button>
            </div>
          </div>
        ))}
      </div>
      <button className="hero-btn">
        {" "}
        <NavLink to="/products">explore more</NavLink>
      </button>
    </div>
  );
}
