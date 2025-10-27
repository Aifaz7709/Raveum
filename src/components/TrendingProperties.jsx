import React, { useRef, useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './TrendingProperties.css';

const TrendingProperties = () => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">
            <span class="bullet-progress"></span>
          </span>`;
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1.3,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 1.8,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 2.2,
          spaceBetween: 35,
        },
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 80,
        modifier: 2,
        slideShadows: true,
      },
      on: {
        slideChange: function () {
          setActiveSlide(this.realIndex);
        },
      },
    });

    return () => {
      if (swiper) {
        swiper.destroy(true, true);
      }
    };
  }, []);

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Skyline Penthouse",
      price: "$4,250,000",
      location: "Beverly Hills, Los Angeles",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      type: "Luxury",
      roi: "12.5%",
      investors: 47,
      progress: 85,
      featured: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Oceanfront Villa",
      price: "$3,800,000",
      location: "Malibu, California",
      beds: 6,
      baths: 5,
      sqft: "5,500",
      type: "Premium",
      roi: "15.2%",
      investors: 32,
      progress: 92,
      featured: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Modern Art Loft",
      price: "$2,950,000",
      location: "Downtown Los Angeles",
      beds: 3,
      baths: 3,
      sqft: "2,800",
      type: "Contemporary",
      roi: "11.8%",
      investors: 28,
      progress: 78,
      featured: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Hillside Retreat",
      price: "$3,450,000",
      location: "Hollywood Hills, LA",
      beds: 4,
      baths: 4,
      sqft: "3,600",
      type: "Luxury",
      roi: "13.7%",
      investors: 41,
      progress: 65,
      featured: true
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Beach Club Residence",
      price: "$2,750,000",
      location: "Santa Monica, California",
      beds: 3,
      baths: 2,
      sqft: "2,200",
      type: "Premium",
      roi: "14.3%",
      investors: 35,
      progress: 88,
      featured: false
    }
  ];

  return (
    <section className="trending-properties">
      <div className="container">
        <div className="section-header">
          <div className="header-content">
            <h2 className="section-title">
              <span className="title-accent">Premium</span> Investment Properties
            </h2>
            <p className="section-subtitle">
              Curated selection of high-yield real estate opportunities with proven ROI
            </p>
          </div>
          <div className="header-stats">
            <div className="stat">
              <div className="stat-number">$156M+</div>
              <div className="stat-label">Total Value</div>
            </div>
            <div className="stat">
              <div className="stat-number">2,450+</div>
              <div className="stat-label">Investors</div>
            </div>
            <div className="stat">
              <div className="stat-number">14.2%</div>
              <div className="stat-label">Avg. ROI</div>
            </div>
          </div>
        </div>

        <div className="swiper-container" ref={swiperRef}>
          <div className="swiper-wrapper">
            {properties.map((property, index) => (
              <div className="swiper-slide" key={property.id}>
                <div className={`property-card2 ${index === activeSlide ? 'active' : ''} ${property.featured ? 'featured' : ''}`}>
                  {property.featured && (
                    <div className="featured-badge">
                      <i className="fas fa-star"></i>
                      Featured
                    </div>
                  )}
                  
                  <div className="property-image">
                    <img src={property.image} alt={property.title} />
                    <div className="property-overlay">
                      <div className="overlay-content">
                        <button className="quick-view-btn">
                          <i className="fas fa-expand"></i>
                          Quick View
                        </button>
                        <button className="virtual-tour-btn">
                          <i className="fas fa-vr-cardboard"></i>
                          3D Tour
                        </button>
                      </div>
                    </div>
                    <div className="investment-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${property.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{property.progress}% Funded</span>
                    </div>
                  </div>

                  <div className="property-content">
                    <div className="property-header">
                      <h3 className="property-title">{property.title}</h3>
                      <div className="property-type-tag">{property.type}</div>
                    </div>
                    
                    <p className="property-location">
                      <i className="fas fa-map-marker-alt"></i>
                      {property.location}
                    </p>
                    
                    <div className="property-price-section">
                      <div className="property-price">{property.price}</div>
                      <div className="roi-badge">
                        <i className="fas fa-chart-line"></i>
                        {property.roi} ROI
                      </div>
                    </div>

                    <div className="property-stats">
                      <div className="stat-item">
                        <div className="stat-icon">🛏</div>
                        <div className="stat-info">
                          <div className="stat-value">{property.beds}</div>
                          <div className="stat-label">Beds</div>
                        </div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-icon">🚿</div>
                        <div className="stat-info">
                          <div className="stat-value">{property.baths}</div>
                          <div className="stat-label">Baths</div>
                        </div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-icon">📏</div>
                        <div className="stat-info">
                          <div className="stat-value">{property.sqft}</div>
                          <div className="stat-label">Sq Ft</div>
                        </div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-icon">👥</div>
                        <div className="stat-info">
                          <div className="stat-value">{property.investors}</div>
                          <div className="stat-label">Investors</div>
                        </div>
                      </div>
                    </div>

                    <div className="property-actions">
                      <button className="invest-btn primary">
                        <i className="fas fa-chart-line"></i>
                        Invest Now
                      </button>
                      <button className="invest-btn secondary">
                        <i className="fas fa-file-alt"></i>
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Navigation */}
          <div className="swiper-navigation">
            <div className="swiper-button-prev">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="swiper-button-next">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>

          {/* Enhanced Pagination */}
          <div className="swiper-pagination"></div>
        </div>

        <div className="view-all-section">
          <button className="view-all-btn">
            Explore All Properties
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProperties;