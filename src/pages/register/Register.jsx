import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Config";

const Register = () => {
  const [mode, setMode] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
    createpassword: "",
    repeatpassword: "",
  });

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    if (mode === "login") {
      console.log("Login");
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.error("Error during login:", error);
        });
    } else {
      console.log("Signup");
      createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.createpassword
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.error("Error during signup:", error);
        });
    }
  };

  return (
    <div className={`app app--is-${mode}`}>
      <div
        className={`form-block-wrapper form-block-wrapper--is-${mode}`}
      ></div>
      <section className={`form-block form-block--is-${mode}`}>
        <header className="form-block__header">
          <h1>{mode === "login" ? "Welcome back!" : "Sign up"}</h1>
          <div className="form-block__toggle-block">
            <span>
              {mode === "login" ? "Don't" : "Already"} have an account? Click
              here &#8594;
            </span>
            <input id="form-toggler" type="checkbox" onChange={toggleMode} />
            <label htmlFor="form-toggler"></label>
          </div>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="form-block__input-wrapper">
            {mode === "login" ? (
              <div className="form-group form-group--login">
                <Input
                  type="text"
                  id="username"
                  label="user name"
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  id="password"
                  label="password"
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div className="form-group form-group--signup">
                <Input
                  type="text"
                  id="fullname"
                  label="full name"
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  id="email"
                  label="email"
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  id="createpassword"
                  label="password"
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  id="repeatpassword"
                  label="repeat password"
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <button className="button button--primary full-width" type="submit">
            {mode === "login" ? "Log In" : "Sign Up"}
          </button>
          <p>
            back to
            <Link to="/home"> Home</Link>
          </p>
        </form>
      </section>
    </div>
  );
};

const Input = ({ id, type, label, onChange }) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    placeholder={label}
    onChange={onChange}
  />
);

export default Register;
