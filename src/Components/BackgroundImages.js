import React, { useEffect, useState } from 'react';
import '../App.css';

const BackgroundImages = () => {
  const imageUrls = [
    'https://www.tightpoker.com/app/uploads/2023/01/Ultimate-Texas-Holdem-2-scaled-1.jpg',
    'https://media.licdn.com/dms/image/D5612AQEp3aburuCu9Q/article-cover_image-shrink_720_1280/0/1690525160689?e=2147483647&v=beta&t=P5RlDtXT2y69TmZdCFbYXHiClHF5AVfyWCZffI2oV_I',
    'https://specials-images.forbesimg.com/imageserve/5fd2859936891275777bd882/Catan-board-game/960x0.jpg?cropX1=0&cropX2=1500&cropY1=70&cropY2=1433',
  ];

  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setRandomImage(imageUrls[randomIndex]);
  }, [imageUrls]);

  return (
    <div
      className="background-image-container"
      style={{ backgroundImage: `url(${randomImage})` }}
    ></div>
  );
};

export default BackgroundImages;