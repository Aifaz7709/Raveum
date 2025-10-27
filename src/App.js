import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SwiperCarousel from "./components/SwiperCarousel";
import HeadingsSection from "./components/HeadingsSection ";
import TrendingProperties from "./components/TrendingProperties";
import InfoCard from "./components/InfoCard";
import InfoCard1 from "./components/InfoCard1";
import InfoCard2 from "./components/InfoCard2";
import NewPropertyCard from "./components/newFetchCarousel";
import PopularCourses from "./components/PopularCourses";

function App() {
  const [theme, setTheme] = useState("light"); // default

  useEffect(() => {
    // initialize AOS
    AOS.init({ duration: 800, once: true });

    // set theme on root element
    document.documentElement.setAttribute("data-theme", theme);

    const header = document.querySelector(".navbar");
    const headerHeight = header ? header.offsetHeight : 0;

    const handleScroll = () => {
      const scrollpos = window.scrollY;
      if (!header) return;
      if (scrollpos >= headerHeight) header.classList.add("scrolled", "shadow-sm");
      else header.classList.remove("scrolled", "shadow-sm");
    };

    window.addEventListener("scroll", handleScroll);
    // run once to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
            <HeadingsSection />
                  <SwiperCarousel />
                  <InfoCard />
                  <InfoCard1 />
                  <InfoCard2 />
    <NewPropertyCard/>
     <PopularCourses />
        <Hero />
        <ValueProps />
         <TrendingProperties  />
        <HowItWorks />
        <Stats />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
