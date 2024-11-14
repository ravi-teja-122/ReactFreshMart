import React from 'react';


function AboutUS() {
  return (
    <section className="about-us">
      <div className="about-us-container">
        <h1 className="about-us-title">About Us</h1>

        <p className="about-us-text">
          Welcome to <strong>YourCompany</strong>, your ultimate destination for premium <strong>footwear</strong> that combines comfort, style, and durability. We are committed to offering a curated selection of products that cater to all your footwear needs, from daily wear to special events.
        </p>

        <p className="about-us-text">
          Founded in <strong>[Year]</strong>, <strong>YourCompany</strong> has quickly established itself as a trusted name in the footwear industry. With an unwavering focus on quality and customer satisfaction, our team of passionate professionals works tirelessly to bring you the best in design and technology.
        </p>

        <p className="about-us-text">
          At <strong>YourCompany</strong>, we believe in providing a seamless shopping experience. From browsing our collection to receiving your order, we ensure your journey with us is convenient, secure, and enjoyable.
        </p>

        <div className="about-us-values">
          <h2 className="values-title">Our Core Values</h2>
          <div className="values-container">
            <div className="value-item">
              <i className="value-icon fas fa-users"></i>
              <h3>Customer Focus</h3>
              <p>We prioritize your satisfaction in every aspect of our business.</p>
            </div>
            <div className="value-item">
              <i className="value-icon fas fa-cogs"></i>
              <h3>Quality & Craftsmanship</h3>
              <p>Only the finest materials and designs make it to our collections.</p>
            </div>
            <div className="value-item">
              <i className="value-icon fas fa-lightbulb"></i>
              <h3>Innovation</h3>
              <p>We continuously evolve to meet your changing needs.</p>
            </div>
            <div className="value-item">
              <i className="value-icon fas fa-gavel"></i>
              <h3>Integrity</h3>
              <p>Transparency and trust are at the heart of everything we do.</p>
            </div>
          </div>
        </div>

        <div className="about-us-team">
          <h2 className="team-title">Meet Our Team</h2>
          <p className="about-us-text">
            Our team is composed of experts dedicated to providing exceptional service and enhancing your shopping experience. From product development to customer support, we are here to assist you in every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUS;
