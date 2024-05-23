
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import Cart from "./comp/cart/Cart";
function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    
    </>
  )
}

export default App;
