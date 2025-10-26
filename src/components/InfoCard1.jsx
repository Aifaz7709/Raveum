import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InfoCard1 = () => {
  const headingColor = "rgb(72, 64, 187)";
  const cardStyle = {
    borderRadius: "15px", // slightly rounded corners
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // subtle 3D shadow
  };

  return (
    <div className="container my-4">
      <div className="card" style={cardStyle}>
        <div className="row g-0 align-items-center">
          {/* Left Side: Text */}
          <div className="col-md-6 p-4">
            <p style={{ color: headingColor, fontSize: "2rem", fontWeight: "600" }}>
              Wealthfront S&P 500 Direct
            </p>
            <p style={{ color: "black" }}>
             Upgrade your S&P 500® investing and access tax savings
            </p>
            <ul style={{ color: headingColor }}>
              <li>Globally diversified portfolios</li>
              <li>Personalized to your risk level and optimized to your tax situation</li>
              <li>Unlock tax savings with Tax-Loss Harvesting</li>
            </ul>

            {/* Buttons */}
            <div className="mt-4">
              <button className="btn btn-primary me-3">Get Started</button>
              <button className="btn btn-outline-primary">Learn More</button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-6">
            <img
              src="/stock1.jpg"
              className="img-fluid rounded-end"
              alt="Card illustration"
              style={{ borderTopRightRadius: "15px", borderBottomRightRadius: "15px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard1;
