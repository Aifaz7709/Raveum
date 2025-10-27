import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewPropertyCard.css";
//i have created a new css file for this component named NewPropertyCard.css//

const NewPropertyCard = () => {
  const [properties, setProperties] = useState([]);
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const BASE_URL = "https://cdn.raveum.com/";
  const placeholderImg = "https://via.placeholder.com/300x200?text=No+Image";

  function formatUSD(value) {
    if (!value) return "-";
    return Number(value).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  function formatArea(value) {
    if (!value) return "-";
    const num = Number(String(value).replace(/,/g, ""));
    return `${num.toLocaleString()} sq ft`;
  }

  async function fetchProperties() {
    try {
      const res = await axios.post("https://apis.raveum.com/v1/properties", {});
      setProperties(res.data.properties || []);
    } catch (err) {
      console.error("API Error:", err);
    }
  }

  function toggleFavorite(id) {
    const updated = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  useEffect(() => {
    fetchProperties(); // ✅ Correct function
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Properties</h4>
        <span className="text-muted small">❤️ Favorites: {favorites.length}</span>
      </div>

      <div className="row g-3">
        {properties.map((p) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p._id}>
            <div
              className="property-card shadow-sm position-relative"
              onClick={() => (window.location.href = `/property/${p.slug}`)}
            >
              {/* Favorite Button */}
              <div
                className="favorite-btn position-absolute top-0 end-0 p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(p._id);
                }}
              >
                {favorites.includes(p._id) ? "❤️" : "🤍"}
              </div>

              {/* Image */}
              <img
                src={`${BASE_URL}${p.thumbnail}`}
                onError={(e) => (e.target.src = placeholderImg)}
                className="property-img"
                alt={p.name}
              />

              {/* Body */}
              <div className="p-3">
                <h6 className="fw-semibold mb-1">{p.name}</h6>
                <p className="text-muted small mb-1">{p.address}</p>
                <p className="small text-primary fw-semibold mb-1">{p.propertyType}</p>

                <p className="fw-semibold mb-1">{formatUSD(p.propertyPrice)}</p>
                <p className="text-muted small mb-2">
                  Cap {p.capRatePercentage}% • Yield {p.rentalYeild}%
                </p>

                <div className="mb-2">
                  <span
                    className={`badge-chip ${
                      p.availabilityStatus === "Available" ? "bg-success" : "bg-danger"
                    } text-white me-1`}
                  >
                    {p.availabilityStatus}
                  </span>
                  {p.popular && <span className="badge-chip bg-warning text-dark me-1">Popular</span>}
                  {p.earlyAccess && <span className="badge-chip bg-info text-dark me-1">Early Access</span>}
                  {p.grade && <span className="badge-chip bg-dark text-white me-1">{p.grade}</span>}
                </div>

                <p className="text-muted small">
                  {formatArea(p.builtUpArea)} • Built {p.builtYear}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPropertyCard;
