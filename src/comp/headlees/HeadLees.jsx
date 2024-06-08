import "./HeadLees.css";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import Logo from "../../assets/logo.png";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

export default function HeadlessDemo() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [visible, setVisible] = useState(false);
  console.log(totalAmount);

  return (
    <div className="cards flex justify-content-center">
      <Button
        icon="pi pi-bars"
        onClick={(e) => setVisible(true)}
        aria-controls={visible ? "sbar" : null}
        aria-expanded={visible ? true : false}
      />

      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        content={({ closeIconRef, hide }) => (
          <div className="color min-h-screen flex relative lg:static surface-ground">
            <div
              id="app-sidebar-2"
              className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
              style={{ width: "100%" }}
            >
              <div className="flex flex-column ">
                <div className="flexs align-items-center justify-content-between ">
                  <span className="inline-flex align-items-center gap-2">
                    <img className="logo-img" src={Logo} alt="" />
                  </span>
                  <span>
                    <Button
                      type="button"
                      ref={closeIconRef}
                      onClick={(e) => hide(e)}
                      icon="pi pi-times"
                      // rounded
                      outlined
                      className="h-2rem w-2rem"
                    ></Button>
                  </span>
                </div>

                <div className="overflow-y-auto">
                  <ul className="hiddin-list">
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/products">Products</Link>
                    </li>
                    <li>
                      <Link className="register-btn" to="/register">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" className="cart">
                        <MdShoppingCart /> <span>{totalAmount}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
    </div>
  );
}
