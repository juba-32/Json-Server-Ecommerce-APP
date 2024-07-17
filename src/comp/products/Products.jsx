import "./Products.css";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaRegHeart } from "react-icons/fa";
import { addToCart , setSelectedCategory} from "../redux/createSlice";

const Products = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.cart.selectedCategory);

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
    if (selectedCategory === "") {
      return data; // Return all products if no category is specified
    } else {
      return data
        .filter((product) => {
          return product.name.toLowerCase().includes(searchQuery.toLowerCase());
        })
        .filter((product) => {
          return product.category === selectedCategory;
        });
    }
  };

  const handleChange = (event) => {
    dispatch(setSelectedCategory(event.target.value))
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
            checked={selectedCategory === "men"}
            onChange={handleChange}
            value="men"
            control={<Radio sx={{ color: "#fff" }} />}
            label="Men"
          />
          <FormControlLabel
            checked={selectedCategory === "women"}
            onChange={handleChange}
            value="women"
            control={<Radio sx={{ color: "#fff" }} />}
            label="women"
          />
          <FormControlLabel
            checked={selectedCategory === "kids"}
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
            <div className="product-card">
              <div className="product-image">
                <Link to={`/products/${product.id}`}>
                  <img src={product.imageUrl} alt={product.name} />
                </Link>
                <div className="icons">
                  <FaShoppingCart
                    onClick={() => {
                      dispatch(addToCart(product));
                      toggleFavorite()
                    }}
                    className="icon cart-icon"
                  />
                  {isFavorite ? (
                    <FaHeart
                      className="icon favorite-icon"
                      onClick={toggleFavorite}
                    />
                  ) : (
                    <FaRegHeart
                      className="icon favorite-icon"
                      onClick={toggleFavorite}
                    />
                  )}
                </div>
              </div>
              <div className="product-details">
                <h2>{product.name}</h2>
                <p className="price">${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
