import "./Cart.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { decrement, increment, removeFromCart } from "../redux/createSlice";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cart() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.cart);

  const Data = (state) => state.cart;
  const items = useSelector(Data);

  let total = 0;
  items.cart.forEach((pro) => {
    total += pro.totalPrice;
  });

  return (
    <div>
      <Helmet>
        <title>CART</title>
      </Helmet>
      <h3>Shopping cart ({totalAmount}) Product</h3>

      <div>
        <div className="main-cart">
          {cartProducts.map((pro) => {
            return (
              <div className="cart-container">
                <div className="cart-product">
                  <div className="cart-image">
                    <img src={pro.imageUrl} alt="ssssssss" />
                  </div>
                  <div className="product-info">
                    <p>{pro.name}</p>
                    <p>${pro.price}</p>
                    <p className="quantity">
                      <button className="decrement-btn"
                        onClick={() => {
                          if (pro.quantity > 1) {
                            dispatch(decrement(pro.id));
                          } else {
                            dispatch(removeFromCart(pro.id));
                          }
                        }}
                      >
                        -
                      </button>
                      <span> Quantity ( {pro.quantity} )</span>
                      <button className="increment-btn"
                        onClick={() => {
                          dispatch(increment(pro.id));
                        }}
                      >
                        +
                      </button>
                    </p>

                    <Button
                      className="btn1"
                      onClick={() => {
                        dispatch(removeFromCart(pro.id));
                      }}
                      variant="contained"
                      endIcon={<DeleteIcon />}
                    >
                      Delete Item
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="checkout">
          <div className="total">
            <div className="total-price">
              <span>total price</span>
              <span>${total}</span>
            </div>
          </div>
          {
            cartProducts?.length ? (
              <div className="discount">
                <span>use discount code</span>
                <div className="discount-code">
                  <input type="text" placeholder="your discount code" />
                  <button>apply</button>
                </div>
              </div>
            ) : ''
          }
        </div>
        <button className="btn">complete order</button>
      </div>
    </div>
  );
}
