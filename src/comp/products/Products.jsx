import "./Products.css";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/createSlice";
import { Button } from "@mui/material";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://json-server-iota-orpin.vercel.app/products"
      );
      const products = await response.json();
      setData(products);
    })();
  }, []);

  const filteredProducts = () => {
    if (category === "") {
      return data; // Return all products if no category is specified
    } else {
      return data
        .filter((product) => {
          return product.name.toLowerCase().includes(searchQuery.toLowerCase());
        })
        .filter((product) => {
          return product.category === category;
        });
    }
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>PRODUCTS</title>
      </Helmet>
      <h1 className="title">ALL PRODUCTS</h1>
      <input
        className="search"
        type="text"
        placeholder="Search Products"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />

      <FormControl sx={{ ml: "50px", color: "#fff" }}>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            checked={category === "men"}
            onChange={handleChange}
            value="men"
            control={<Radio sx={{ color: "#fff" }} />}
            label="Men"
          />
          <FormControlLabel
            checked={category === "women"}
            onChange={handleChange}
            value="women"
            control={<Radio sx={{ color: "#fff" }} />}
            label="women"
          />
          <FormControlLabel
            checked={category === "kids"}
            onChange={handleChange}
            value="kids"
            control={<Radio sx={{ color: "#fff" }} />}
            label="kids"
          />
        </RadioGroup>
      </FormControl>

      <div className="product-container">
        {filteredProducts().map((product) => {
          return (
            <div key={product.id} className="card">
              <img src={product.imageUrl} alt={product.name} />
              <div className="card-content">
                <div className="card-info">
                  <h2>{product.name}</h2>
                  <span className="price">${product.price}</span>
                </div>

                <Link to={`/products/${product.id}`}>Buy Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
