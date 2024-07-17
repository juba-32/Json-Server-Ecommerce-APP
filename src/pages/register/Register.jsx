import React, { useState } from "react";
import "./Register.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/Config";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState(false);
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
    if (
      mode === "signup" &&
      formData.createpassword !== formData.repeatpassword
    ) {
      return;
    }

    if (mode === "login") {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          setFormData({
            username: "",
            password: "",
            fullname: "",
            email: "",
            createpassword: "",
            repeatpassword: "",
          });
          navigate("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Login error message:", errorMessage);
          sethasError(true);
    
          switch (errorCode) {
            case "auth/invalid-credential":
              setfirebaseError("Invalid Email or Password");
              break;
    
            default:
              setfirebaseError("Login failed");
              break;
          }
        });
    } else {
      console.log("Creating user with email:", formData.email);  // Additional log for diagnosis
      createUserWithEmailAndPassword(auth, formData.email, formData.createpassword)
        .then((userCredential) => {
          setFormData({
            username: "",
            password: "",
            fullname: "",
            email: "",
            createpassword: "",
            repeatpassword: "",
          });
          setMode("login")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Signup error message:", errorMessage);  // Log error message
          sethasError(true);
    
          switch (errorCode) {
            case "auth/email-already-in-use":
              setfirebaseError("Email already in use");
              break;
            case "auth/invalid-email":
              setfirebaseError("Invalid email");
              break;
            case "auth/weak-password":
              setfirebaseError("Password is too weak");
              break;
            default:
              setfirebaseError("Signup failed");
              break;
          }
        });
    }
 }    

  return (
    <div className={`app app--is-${mode}`}>
      <Helmet>
        <title>Register</title>
      </Helmet>
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
                  required
                  type="email"
                  id="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  required
                  type="password"
                  id="password"
                  label="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div className="form-group form-group--signup">
                <Input
                  required
                  type="text"
                  id="fullname"
                  label="Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                />
                <Input
                  required
                  type="email"
                  id="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  required
                  type="password"
                  id="createpassword"
                  label="Password"
                  value={formData.createpassword}
                  onChange={handleChange}
                />
                <Input
                  required
                  type="password"
                  id="repeatpassword"
                  label="Repeat Password"
                  value={formData.repeatpassword}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <button className="button button--primary full-width" type="submit">
            {mode === "login" ? "Log In" : "Sign Up"}
          </button>
          <p>
            Back to
            <Link to="/home"> Home</Link>
          </p>
          {/* {hasError && <h5 className="error">erorrrrrrrrrrr</h5>} */}
          {hasError && <h3 className="error">{firebaseError}</h3>}
        </form>
      </section>
    </div>
  );
};

const Input = ({ id, type, label, value, onChange, required }) => (
  <div className="input-group">
    <label htmlFor={id}></label>
    <input
      className="form-group__input"
      type={type}
      id={id}
      placeholder={label}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default Register;
