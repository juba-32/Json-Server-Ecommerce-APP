import "./Header.css";
import { MdShoppingCart } from "react-icons/md";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HeadLees from "../headlees/HeadLees";

const Header = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <>
      <div>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <Link className="nav-links" to="/home">Home</Link>
              </li>
              <li>
                <Link className="nav-links" to="/about">About</Link>
              </li>
              <li>
                <Link className="nav-links" to="/contact">Contact</Link>
              </li>
              <li>
                <Link className="nav-links" to="/products">Products</Link>
              </li>
            </ul>
          </nav>
          <div className="right-div">
          <button> <Link className="register-btn" to="/register">Register</Link> </button>
            <Link to="/cart" className="cart">
              <MdShoppingCart /> <span>{totalAmount}</span> 
            </Link>
          </div>

      
          <div className="sm-device">
          <HeadLees />
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Header;
