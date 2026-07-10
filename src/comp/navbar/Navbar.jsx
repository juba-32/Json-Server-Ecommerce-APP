import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import Logo from "../../assets/logo.webp";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import "./Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const menuItems = ["Products", "About", "Contact"];

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>

        <nav className="nav-menu">
          {menuItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase() === "/" ? "" : item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/register" className="btn-register">
            Sign Up
          </Link>
          <Link to="/cart" className="cart-icon">
            <MdShoppingCart size={24} />
            <span className="cart-badge">{totalAmount}</span>
          </Link>
        </div>

        <div className="sm-device">
        <Link to="/cart" className="cart-icon">
            <MdShoppingCart size={20} />
            <span className="cart-badge">{totalAmount}</span>
          </Link>
          <Button
            icon="pi pi-bars"
            onClick={() => setVisible(true)}
            className="p-button-text"
            aria-label="Menu"
          />
        </div>
      </div>

      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
        className="Sidebar"
      >
        <div className="mobile-menu">
          <img src={Logo} alt="Logo" className="mobile-logo" />
          <nav className="mobile-nav">
            {menuItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase() === "/" ? "" : item.toLowerCase()}`}
                onClick={() => setVisible(false)}
              >
                {item}
              </NavLink>
            ))}
            <NavLink to="/register" onClick={() => setVisible(false)}>
              Sign Up
            </NavLink>
          </nav>
        </div>
      </Sidebar>
    </header>
  );
};

export default Navbar;
