import { motion } from 'framer-motion';
import "./SeasonalOffer.css";
import { useNavigate } from 'react-router-dom';

const SeasonalOffer = () => {
    const navigate = useNavigate();

  return (
    <section className="seasonal-offer">
      <div className="offer-content">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="badge"
        >
          Limited Time Offer
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Summer Collection Sale
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get up to 50% off on all new arrivals. Refresh your wardrobe today!
        </motion.p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="offer-btn"
           onClick={() => navigate("/products?maxPrice=50")}
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  );
};

export default SeasonalOffer;