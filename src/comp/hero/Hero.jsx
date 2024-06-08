import  './Hero.css';
import Img from '../../assets/hero-img.png';
import { NavLink } from 'react-router-dom';
const Hero = () => {
  
  return (
    <div>
      <div className="hero-container">
        <div className="hero-title">
          <h1>alexander</h1>
          <h2>Online Clothing Store</h2>
          <button className='hero-btn'> <NavLink to="/about"> more about us</NavLink></button>
        </div>
        <div className="hero-img">
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
