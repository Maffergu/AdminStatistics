import React from 'react';
import './Loading.css'; // Import the CSS file for the spinner

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
