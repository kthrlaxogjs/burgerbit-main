// TrainSlider.js
import React, { useState, useEffect } from 'react';
import './TrainSlider.css';

function TrainSlider({ images }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => prevPosition - 1); // 이미지를 왼쪽으로 이동합니다.
    }, 30); // 30밀리초마다 이미지를 이동시킵니다.

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="train-slider">
      <div className="train-images" style={{ left: `${position}px` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default TrainSlider;
