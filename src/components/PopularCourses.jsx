import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './PopularCourses.css';

const PropertyCarousel = () => {
  const [properties, setProperties] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);

  // Validate and normalize property data
  const normalizeProperty = (property, index) => {
    return {
      id: property?.id || index + 1,
      title: property?.title || `Property ${index + 1}`,
      price: property?.price || `$${(Math.random() * 1000000 + 500000).toLocaleString()}`,
      address: property?.address || `${index + 100} Main St, City ${index + 1}`,
      bedrooms: property?.bedrooms || Math.floor(Math.random() * 5) + 1,
      bathrooms: property?.bathrooms || Math.floor(Math.random() * 3) + 1,
      sqft: property?.sqft || Math.floor(Math.random() * 3000) + 1000,
      image: property?.image || `https://picsum.photos/300/200?property=${index + 1}`,
      description: property?.description || `Beautiful property with amazing features and modern amenities.`
    };
  };

  // Generate mock properties for demonstration
  const generateMockProperties = () => {
    return Array.from({ length: 9 }, (_, index) => 
      normalizeProperty({}, index)
    );
  };

  // Fetch properties
  const createProperty = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await axios.post("https://apis.raveum.com/v1/properties", {}, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log("Response:", response.data);

      let propertiesData = [];
      
      if (response?.data?.properties && Array.isArray(response.data.properties)) {
        propertiesData = response.data.properties.map((property, index) => 
          normalizeProperty(property, index)
        );
      } else if (Array.isArray(response?.data)) {
        propertiesData = response.data.map((property, index) => 
          normalizeProperty(property, index)
        );
      } else {
        console.warn('Unexpected API response structure, using mock data');
        propertiesData = generateMockProperties();
      }

      if (propertiesData.length === 0) {
        propertiesData = generateMockProperties();
      }

      setProperties(propertiesData);
      
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to load properties. Showing demo properties instead.");
      setProperties(generateMockProperties());
    } finally {
      setIsLoading(false);
    }
  };

  const formatNumber = (value) => {
    if (value === undefined || value === null) return 'N/A';
    return value.toLocaleString();
  };


  const scrollToIndex = (index) => {
    if (!carouselRef.current || properties.length === 0) return;
    const newIndex = Math.max(0, Math.min(index, properties.length - 1));
    setCurrentIndex(newIndex);
    const card = cardRefs.current[newIndex];
    if (card) {
      card.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  const nextSlide = () => {
    scrollToIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    scrollToIndex(currentIndex - 1);
  };

  const handleKeyDown = (e) => {
    if (!carouselRef.current) return;

    switch(e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevSlide();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextSlide();
        break;
      case 'Home':
        e.preventDefault();
        scrollToIndex(0);
        break;
      case 'End':
        e.preventDefault();
        scrollToIndex(properties.length - 1);
        break;
      default:
        break;
    }
  };

  const handleScroll = () => {
    if (!carouselRef.current || properties.length === 0) return;

    const container = carouselRef.current;
    const cardWidth = cardRefs.current[0]?.offsetWidth || 0;
    const scrollLeft = container.scrollLeft;
    const newIndex = Math.round(scrollLeft / (cardWidth + 16)); // 16px gap

    if (newIndex >= 0 && newIndex < properties.length && newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };


  const handleWheel = (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      carouselRef.current.scrollLeft += e.deltaY;
    }
  };


  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, properties.length);
  }, [properties]);

  useEffect(() => {
    createProperty();
  }, []);


  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      carousel.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll);
        carousel.removeEventListener('wheel', handleWheel);
      }
    };
  }, [properties]);

  if (isLoading) {
    return (
      <div className="property-carousel loading" aria-live="polite">
        <div className="container">
          <h2 className="carousel-title">Featured Properties</h2>
          <div className="loading-message">Loading properties...</div>
        </div>
      </div>
    );
  }

  if (error && properties.length === 0) {
    return (
      <div className="property-carousel error" aria-live="polite">
        <div className="container">
          <h2 className="carousel-title">Featured Properties</h2>
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <section 
      className="property-carousel"
      aria-label="Featured properties carousel"
    >
      <div className="container">
        <div className="carousel-header">
          <h2 className="carousel-title">Featured Properties</h2>
          
          {error && (
            <div className="warning-message" role="alert">
              ⚠️ {error}
            </div>
          )}
          
          <div className="carousel-controls">
            <button
              className="carousel-button prev"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous properties"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <span 
              className="carousel-counter"
              aria-live="polite"
              aria-atomic="true"
            >
              Property {currentIndex + 1} of {properties.length}
            </span>
            
            <button
              className="carousel-button next"
              onClick={nextSlide}
              disabled={currentIndex === properties.length - 1}
              aria-label="Next properties"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={carouselRef}
          className="carousel-container"
          tabIndex="0"
          role="region"
          aria-label="Properties carousel"
          onKeyDown={handleKeyDown}
        >
          <div className="carousel-track">
            {properties.map((property, index) => (
              <div
                key={property.id}
                ref={el => cardRefs.current[index] = el}
                className={`property-card1 ${index === currentIndex ? 'active' : ''}`}
                tabIndex="0"
                role="article"
                aria-label={`Property ${index + 1} of ${properties.length}: ${property.title}, ${property.price}`}
                aria-describedby={`property-desc-${property.id}`}
              >
                <div className="card-image">
                  <img 
                    src={property.image} 
                    alt={`${property.title} exterior`}
                    loading="lazy"
                    onError={(e) => {
                      // Fallback image if original fails to load
                      e.target.src = `https://picsum.photos/300/200?property=${property.id}`;
                    }}
                  />
                </div>
                
                <div className="card-content">
                  <div className="card-price">{property.price}</div>
                  <h3 className="card-title">{property.title}</h3>
                  <p className="card-address">{property.address}</p>
                  
                  <div className="card-details">
                    <span className="detail">
                      <span className="detail-icon">🛏️</span>
                      {property.bedrooms} bed
                    </span>
                    <span className="detail">
                      <span className="detail-icon">🚿</span>
                      {property.bathrooms} bath
                    </span>
                    <span className="detail">
                      <span className="detail-icon">📏</span>
                      {formatNumber(property.sqft)} sqft
                    </span>
                  </div>
                  
                  <p 
                    id={`property-desc-${property.id}`}
                    className="card-description"
                  >
                    {property.description}
                  </p>
                  
                  <button 
                    className="card-button"
                    onClick={() => console.log('View property:', property.id)}
                  >
                    Property Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile indicator dots */}
        <div className="carousel-indicators">
          {properties.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to property ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCarousel;