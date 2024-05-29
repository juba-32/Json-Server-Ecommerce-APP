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
          <Link to="/cart" className="cart">
            <MdShoppingCart />({totalAmount})
          </Link>

          {/* <div className="menu-toggle">
            



            
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              menu
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link className="url" to="/home">Home</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className="url" to="/about">About</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className="url" to="/contact">Contact</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className="url" to="/products">Products</Link>
              </MenuItem>
            </Menu>
          </div> */}
          <div className="sm-device">
          <HeadLees />
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Header;
