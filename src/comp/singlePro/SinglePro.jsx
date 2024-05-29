import "./SinglePro.css";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/createSlice";
import { MdShoppingCart } from "react-icons/md";
const SinglePro = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const quantity = useSelector((state) => state.cart.totalAmount);

  let [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  //  const addProduct = (product) => {
  // console.log(product);
  //  dispatch(addToCart(product)  );
  //  const updatedQuantity = quantity + 1;
  //  dispatch(handleQuantity(updatedQuantity));
  //  };

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
            <NavLink to="/cart">Go to Cart</NavLink>
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
