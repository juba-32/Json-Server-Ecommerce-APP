import { NavLink, useNavigate } from "react-router-dom";
import "./HomePro.css";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../redux/createSlice";

export default function HomePro() {



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const array = [
    {
      id: "2",
      imageUrl: "https://dfcdn.defacto.com.tr/6/W7832AZ_24SP_BN312_01_01.jpg",
      category: "men",
    },
    {
      id: "6",
      imageUrl: "https://dfcdn.defacto.com.tr/6/B6873AX_24SP_GR454_01_01.jpg",
      category: "women",
    },
    {
      id: "12",
      imageUrl: "https://img-lcwaikiki.mncdn.com/mnresize/1020/1360/pim/productimages/20231/6275549/v1/l_20231-s39335z1-g53-100-16_5.jpg",
      category: "kids",
    },
  ];

  const handleCategorySelection = (category) => {
    dispatch(setSelectedCategory(category));
    navigate("/products");
  };

  return (
    <div>
      <div  className="pro-container">
        {array.map((product) => (
          <div
            key={product.id}
            className="card"
            onClick={() => handleCategorySelection(product.category)}
          >
            <img src={product.imageUrl} alt={product.category} />
            <h1>{product.category}</h1>
          </div>
        ))}
      </div>
      <button className="hero-btn">
        <NavLink to="/products">explore more</NavLink>
      </button>
    </div>
  );
}
