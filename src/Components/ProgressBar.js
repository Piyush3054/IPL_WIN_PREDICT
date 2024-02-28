import React, { useState, useEffect } from 'react';

function ProgressBar({ completed }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(completed);
  }, [completed]);

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#050124",
    borderRadius: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: "#6a1b9a",
    borderRadius: 'inherit',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span></span>
      </div>
    </div>
  );
}

export default ProgressBar;
