import React, { useState } from 'react';
import './assets/style.css';
import StarSvg from './assets/icon-star.svg';

import RatingCard from './component/RatingComponent.js';
import ThankYouCard from './component/thank-you-component.js';

export default function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rating) => {
    console.log(`Selected rating: ${rating}`);
    setSelectedRating(rating);
  };

  const handleSubmit = () => setSubmitted(true);

  return (
    <div className="app-position">
      <RatingCard
        selectedRating={selectedRating}
        onRatingClick={handleRatingClick}
        onSubmit={handleSubmit}
      />
      <ThankYouCard selectedRating={selectedRating} submitted={submitted} />
    </div>
  );
}
