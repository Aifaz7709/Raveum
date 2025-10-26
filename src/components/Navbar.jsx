import React, { useState, useRef, useEffect } from "react";

const Navbar = ({ theme, toggleTheme }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showBondsDropdown, setShowBondsDropdown] = useState(false);
  const [showInvestingDropdown, setShowInvestingDropdown] = useState(false);
  const [showBorrowDropdown, setShowBorrowDropdown] = useState(false);
  
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);
  const bondsRef = useRef(null);
  const investingRef = useRef(null);
  const borrowRef = useRef(null);

  // Sample major US cities
  const usCities = [
    "New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", 
    "Phoenix, AZ", "Philadelphia, PA", "San Antonio, TX", "San Diego, CA",
    "Dallas, TX", "San Jose, CA", "Austin, TX", "Jacksonville, FL",
    "Fort Worth, TX", "Columbus, OH", "Charlotte, NC", "San Francisco, CA",
    "Indianapolis, IN", "Seattle, WA", "Denver, CO", "Washington, DC",
    "Boston, MA", "El Paso, TX", "Nashville, TN", "Detroit, MI",
    "Oklahoma City, OK", "Portland, OR", "Las Vegas, NV", "Memphis, TN",
    "Louisville, KY", "Baltimore, MD", "Milwaukee, WI", "Albuquerque, NM",
    "Tucson, AZ", "Fresno, CA", "Sacramento, CA", "Kansas City, MO",
    "Atlanta, GA", "Miami, FL", "Raleigh, NC", "Omaha, NE",
    "Mesa, AZ", "Tulsa, OK", "Minneapolis, MN", "Cleveland, OH",
    "Wichita, KS", "Arlington, TX", "New Orleans, LA", "Bakersfield, CA"
  ];

  // Filter cities based on search query
  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = usCities.filter(city =>
        city.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 8));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
      if (bondsRef.current && !bondsRef.current.contains(event.target)) {
        setShowBondsDropdown(false);
      }
      if (investingRef.current && !investingRef.current.contains(event.target)) {
        setShowInvestingDropdown(false);
      }
      if (borrowRef.current && !borrowRef.current.contains(event.target)) {
        setShowBorrowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus search input when it becomes visible
  useEffect(() => {
    if (showSearchInput && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchInput]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      setShowSuggestions(false);
      // Add your search logic here
    }
  };

  const handleSuggestionClick = (city) => {
    setSearchQuery(city);
    setShowSuggestions(false);
    console.log("Selected city:", city);
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
    if (!showSearchInput) {
      setSearchQuery("");
    }
  };

  const handleSearchIconClick = () => {
    if (!showSearchInput) {
      setShowSearchInput(true);
    } else if (searchQuery.trim()) {
      handleSearch(new Event('submit'));
    }
  };

  // Dropdown content
  const bondsDropdown = [
    { name: "Government Bonds", description: "Secure government-backed investments" },
    { name: "Corporate Bonds", description: "High-yield corporate debt securities" },
    { name: "Municipal Bonds", description: "Tax-advantaged local government bonds" },
    { name: "Treasury Bonds", description: "US Treasury securities" }
  ];

  const investingDropdown = [
    { name: "Robo Advisor", description: "Automated portfolio management" },
    { name: "IRA Accounts", description: "Tax-advantaged retirement investing" },
    { name: "529 Plans", description: "Education savings plans" },
    { name: "Portfolio Analysis", description: "Advanced investment analytics" }
  ];

  const borrowDropdown = [
    { name: "Personal Loans", description: "Flexible personal financing" },
    { name: "Home Equity", description: "Leverage your home equity" },
    { name: "Margin Trading", description: "Trade with borrowed funds" },
    { name: "Credit Lines", description: "Revolving credit options" }
  ];

  return (
    <nav 
      id="navScroll" 
      className="navbar navbar-expand-lg navbar-light fixed-top" 
      tabIndex={0}
      style={{
        backgroundColor: 'rgba(2, 40, 124, 1)',
        zIndex: 1030,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <div className="container">
        {/* Brand on the left */}
        <a className="navbar-brand d-flex align-items-center pe-4 fs-4" href="/" style={{ color: 'white' }}>
          <img src="/favicon.ico" alt="wealthfront Icon" width="32" height="32" className="d-inline-block align-text-top" />
          <span className="ms-2 fw-bolder brand">wealthfront</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navigation options in the center */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#cash" style={{ color: 'white', marginRight: '1rem' }}>Cash</a>
            </li>
            
            {/* Bonds Dropdown */}
            <li className="nav-item dropdown" ref={bondsRef}>
              <a 
                className="nav-link dropdown-toggle" 
                href="#bonds"
                onClick={() => setShowBondsDropdown(!showBondsDropdown)}
                style={{ 
                  cursor: 'pointer',
                  color: 'white',
                  marginRight: '1rem'
                }}
              >
                Bonds
              </a>
              {showBondsDropdown && (
                <div 
                  className="dropdown-menu show"
                  style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    minWidth: '280px',
                    padding: '1rem 0'
                  }}
                >
                  {bondsDropdown.map((item, index) => (
                    <div key={index} className="dropdown-item-container">
                      <a 
                        className="dropdown-item" 
                        href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                        style={{ 
                          padding: '0.75rem 1.5rem',
                          display: 'block',
                          textDecoration: 'none',
                          color: '#333',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{item.name}</div>
                        <div style={{ fontSize: '0.875rem', color: '#6c757d' }}>{item.description}</div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Automated Investing Dropdown */}
            <li className="nav-item dropdown" ref={investingRef}>
              <a 
                className="nav-link dropdown-toggle" 
                href="#investing"
                onClick={() => setShowInvestingDropdown(!showInvestingDropdown)}
                style={{ 
                  cursor: 'pointer',
                  color: 'white',
                  marginRight: '1rem'
                }}
              >
                Automated Investing
              </a>
              {showInvestingDropdown && (
                <div 
                  className="dropdown-menu show"
                  style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    minWidth: '300px',
                    padding: '1rem 0'
                  }}
                >
                  {investingDropdown.map((item, index) => (
                    <div key={index} className="dropdown-item-container">
                      <a 
                        className="dropdown-item" 
                        href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                        style={{ 
                          padding: '0.75rem 1.5rem',
                          display: 'block',
                          textDecoration: 'none',
                          color: '#333',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{item.name}</div>
                        <div style={{ fontSize: '0.875rem', color: '#6c757d' }}>{item.description}</div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#stocks" style={{ color: 'white', marginRight: '1rem' }}>Stocks</a>
            </li>

            {/* Borrow Dropdown */}
            <li className="nav-item dropdown" ref={borrowRef}>
              <a 
                className="nav-link dropdown-toggle" 
                href="#borrow"
                onClick={() => setShowBorrowDropdown(!showBorrowDropdown)}
                style={{ 
                  cursor: 'pointer',
                  color: 'white',
                  marginRight: '1rem'
                }}
              >
                Borrow
              </a>
              {showBorrowDropdown && (
                <div 
                  className="dropdown-menu show"
                  style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    minWidth: '280px',
                    padding: '1rem 0'
                  }}
                >
                  {borrowDropdown.map((item, index) => (
                    <div key={index} className="dropdown-item-container">
                      <a 
                        className="dropdown-item" 
                        href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                        style={{ 
                          padding: '0.75rem 1.5rem',
                          display: 'block',
                          textDecoration: 'none',
                          color: '#333',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{item.name}</div>
                        <div style={{ fontSize: '0.875rem', color: '#6c757d' }}>{item.description}</div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#learn" style={{ color: 'white', marginRight: '1rem' }}>Learn</a>
            </li>
          </ul>

          {/* Buttons on the right */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <button 
                className="btn login-btn"
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '25px',
                  padding: '0.5rem 1.5rem',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  marginRight: '0.75rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                Login
              </button>
            </li>
            
            <li className="nav-item">
              <button 
                className="btn get-started-btn"
                style={{
                  background: 'white',
                  color: 'rgb(2, 58, 175)',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '0.5rem 1.5rem',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.3)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'white';
                }}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;