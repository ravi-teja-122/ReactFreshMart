import React, { useState } from 'react';

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="home-container"
      style={{
       //backgroundImage: `url('public/bg4.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Fresh Mart Heading and Main Description */}
      <h1 className="heading">Welcome to Fresh Mart</h1>
      <p className="subheading">
        Your one-stop destination for fresh, organic produce and premium meats. 
        We bring farm-to-table goodness straight to your doorstep. Explore our 
        range of high-quality vegetables and non-vegetarian meats for a healthy and 
        hearty meal experience.
      </p>

      {/* Content Section with Vegetable and Meat Cards */}
      <div className="content">
        {/* Vegetable Card */}
        <div
          className="card vegetable-card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src='public/vegetables.jpg' alt='Vegetables' className="card-image" />
          <h2 className={`card-title ${isHovered ? 'scale' : ''}`}>Fresh Vegetables</h2>
          <p className="card-description">
            Our vegetables are grown organically, ensuring that every bite is packed with nutrients. 
            Whether you’re making a fresh salad, smoothie, or a wholesome dinner, 
            our selection of leafy greens and vibrant produce will elevate your meals.
          </p>
          <ul className="benefits-list">
            <li>Rich in vitamins and minerals</li>
            <li>Locally sourced and organic</li>
            <li>Perfect for all meal types</li>
          </ul>
        </div>

        {/* Non-Veg Meat Card */}
        <div
          className="card meat-card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src='public/nonVeg.jpg' alt='Non-Veg Meat' className="card-image" />
          <h2 className={`card-title ${isHovered ? 'scale' : ''}`}>Premium Non-Veg Meat</h2>
          <p className="card-description">
            Our non-vegetarian meat selection is sourced from trusted farms, offering the highest quality cuts. 
            Rich in protein, these meats are perfect for your hearty meals—grilled, barbecued, or cooked to perfection.
          </p>
          <ul className="benefits-list">
            <li>High in protein for muscle building</li>
            <li>Ethically sourced from certified farms</li>
            <li>Ideal for grilling, roasting, or stir-frying</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
