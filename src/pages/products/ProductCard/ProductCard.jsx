import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaEye,
  FaStar,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/createSlice";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const isSale = product.price <= 50;

  const oldPrice = (product.price * 1.35).toFixed(2);

  return (
    <motion.div
      className="product-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <span className={`product-badge ${isSale ? "sale" : "new"}`}>
        {isSale ? "SALE" : "NEW"}
      </span>

      <div className="product-image">
        <Link to={`/products/${product.id}`}>
          <img
            loading="lazy"
            src={product.imageUrl}
            alt={product.name}
          />
        </Link>

        <div className="overlay">
          <Link
            className="quick-view"
            to={`/products/${product.id}`}
          >
            <FaEye />
            <span>Quick View</span>
          </Link>
        </div>
      </div>

      <div className="product-info">
        <span className="category">
          {product.category.toUpperCase()}
        </span>

        <h3>{product.name}</h3>

        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}

          <span>(124)</span>
        </div>

        <div className="price-box">
          <span className="price">
            ${product.price}
          </span>

          <span className="old-price">
            ${oldPrice}
          </span>
        </div>

        <button
          className="cart-btn"
          onClick={() => dispatch(addToCart(product))}
        >
          <FaShoppingCart />
          Add To Cart
        </button>
      </div>
    </motion.div>
  );
}