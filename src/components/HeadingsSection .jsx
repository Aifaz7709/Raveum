import React, { useState, useEffect } from 'react';
import './HeadingsSection.css';

const HeadingsSection = () => {
  const [currentCity, setCurrentCity] = useState('Los Angeles');
  const [animationClass, setAnimationClass] = useState('');

  const usCities = [
    'Los Angeles', 'New York', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
    'Austin', 'Miami', 'Seattle', 'Denver', 'Boston', 'Atlanta'
  ];

  useEffect(() => {
    let cityIndex = 0;

    const rotateCities = () => {
      setAnimationClass('fade-out');
      
      setTimeout(() => {
        cityIndex = (cityIndex + 1) % usCities.length;
        setCurrentCity(usCities[cityIndex]);
        setAnimationClass('fade-in');
      }, 500);

      setTimeout(() => {
        setAnimationClass('');
      }, 1000);
    };

    const interval = setInterval(rotateCities, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="headings-container">
      
      <header className="main-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "50px", flexWrap: "wrap" }}>

  {/* LEFT SIDE TEXT */}
  <div style={{ flex: "1" }}>
    <h1 className="title">How does it work?</h1>

    <h2 className="main-headline" style={{ color: "#fff" }}>
      New clients earn
    </h2>

    <p style={{ color: "#fff", fontSize: "116px", fontFamily: "fantasy", margin: "10px 0" }}>
      4.40% APY
    </p>

    <p style={{ color: "#fff", fontSize: "22px", lineHeight: "1.6" }}>
      Boost your APY from 3.75% to 4.40% APY for 3 months when <br />
      you open and fund a Cash Account. No fees, no strings, <br />
      and surprisingly few asterisks.
    </p>

    <button
      style={{
        backgroundColor: "#1949b1ff",
        color: "#ffffffff",
        border: "1px solid #023AAF",
        padding: "14px 32px",
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: "18px",
        cursor: "pointer",
        transition: "0.3s",
        marginTop: "20px",
        display: "inline-block"
      }}
      onMouseOver={(e) => (e.target.style.boxShadow = "0 4px 12px rgba(255,255,255,0.4)")}
      onMouseOut={(e) => (e.target.style.boxShadow = "none")}
    >
      Get Started with $1
    </button>

    <div style={{ marginTop: "10px", color: "#fff" }}>
      <p style={{ fontSize: "12px", margin: 0 }}>
        Base Annual Percentage Yield (APY) provided by program banks.
      </p>
      <p style={{ fontSize: "12px", marginTop: "2px" }}>
        Base APY as of 10/17/25 and subject to change.
      </p>
    </div>
  </div>


  {/* RIGHT SIDE IMAGE */}
  <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
    <img
      src="/bull.png"
      alt="Stock Visual"
      style={{
        width: "60%",
        borderRadius: "14px",
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.35)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.target.style.transform = "translateY(-8px)";
        e.target.style.boxShadow = "0 18px 36px rgba(0, 0, 0, 0.5)";
      }}
      onMouseOut={(e) => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.35)";
      }}
    />
  </div>

</header>


      {/* Stats Section */}
      {/* Add this to your component */}
<div className="stats-section">
  <div className="stat-card">
    <h3 className="stat-category">Nerdwallet logo</h3>
    <h4 className="stat-value">#1 Platform</h4>
    <p className="stat-description">Best Robo-advisor, Portfolio Options, 2022-25¹</p>
  </div>

  <div className="stat-card">
    <h3 className="stat-category">Bankrate</h3>
    <h4 className="stat-value">Best Cash Management Account, 2023-25¹ <br/> Best Investing App, 2023-24¹</h4>
  </div>

  <div className="stat-card">
    <h3 className="stat-category">1.3M+</h3>
    <h4 className="stat-value">Funded Clients</h4>
  </div>

  <div className="stat-card">
    <h3 className="stat-category">$90B+</h3>
    <h4 className="stat-value">In total assets²</h4>
  </div>

  <div className="stat-card">
    <h3 className="stat-category">4.8</h3>
    <h4 className="stat-value">Apple App Store³</h4>
  </div>

  <div className="stat-card">
    <h3 className="stat-category">4.9</h3>
    <h4 className="stat-value">Google Play Store³</h4>
  </div>
</div>


      {/* Action Buttons */}
    </section>
  );
};

export default HeadingsSection;