import "./SinglePro.css";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/createSlice";
import { MdShoppingCart } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const SinglePro = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  let [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://json-server-iota-orpin.vercel.app/products/${id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading........</>;
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="singlePro-container">
          <i className="back-icon" onClick={() => {
            navigate("/home");
          }}><FaArrowLeft /></i>
          <div className="pro-details">
            <div className="img">
              <img
                src={product.imageUrl}
                alt={product.title}
                height="400px"
                width="400px"
              />
            </div>
            <div>
              <div className="pro-info">
                <i className="catrgory">{product.category}</i>
                <i className="pro-title">{product.name}</i>
                <i className="pro-price">${product.price}</i>
                <i className="pro-desc">{product.description}</i>
              </div>
            </div>
          </div>
          <div className="actions">
            <button
              className="btns"
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              Add
              <i>
                {" "}
                <MdShoppingCart />{" "}
              </i>
            </button>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="">
        <div className="">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </>
  );
};

export default SinglePro;
