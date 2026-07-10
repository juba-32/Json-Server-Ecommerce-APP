import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./CustomerReviews.css";

const reviews = [
  { id: 1, name: "Ahmed Ali", comment: "Amazing product and fast delivery! Highly recommended.", rating: 5 },
  { id: 2, name: "Sarah Mohamed", comment: "Excellent quality and very reasonable prices compared to other stores.", rating: 4 },
  { id: 3, name: "Khaled Omar", comment: "Great shopping experience. I will definitely order again.", rating: 5 },
];

const StarRating = ({ rating }) => {
  return (
    <div className="stars">
      {[...Array(5)].map((_, index) => (
        index < rating ? <FaStar key={index} className="star-filled" /> : <FaRegStar key={index} />
      ))}
    </div>
  );
};

const CustomerReviews = () => {
  return (
    <section className="reviews-section">
      <h2> Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="reviewer-info">
              <div className="avatar">{review.name.charAt(0)}</div>
              <h4>{review.name}</h4>
            </div>
            <StarRating rating={review.rating} />
            <p className="comment">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;