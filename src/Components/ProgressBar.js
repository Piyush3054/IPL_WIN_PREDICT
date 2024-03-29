import React, { useState, useEffect } from 'react';
import './mystyles.css'; // Import CSS file for additional styling

function ProgressBar({ completed }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Update the percentage with a delay to showcase transitions
    setTimeout(() => {
      setPercentage(completed);
    }, 100);
  }, [completed]);

  return (
    <div className="progress-container">
      <div className="filler" style={{ width: `${percentage}%` }}>
      </div>
    </div>
  );
}

export default ProgressBar;
