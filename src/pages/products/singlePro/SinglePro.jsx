import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/createSlice";
import { MdShoppingCart } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import "./SinglePro.css";

const SinglePro = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://json-server-iota-orpin.vercel.app/products/${id}`);
        if (!response.ok) throw new Error("فشل في جلب البيانات");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  if (loading) return <div className="loader">loading  ...</div>;
  if (error) return <div className="error">Error {error}</div>;

  return (
    <div className="singlePro-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft /> 
      </button>

      <div className="pro-details">
        <div className="img-wrapper">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        
        <div className="pro-info">
          <span className="category">{product.category}</span>
          <h1 className="title">{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="desc">{product.description}</p>
          
          <button className="add-to-cart-btn" onClick={() => dispatch(addToCart(product))}>
            <MdShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePro;