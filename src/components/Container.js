import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./Header";
import Navigation from "./Navigation";
import Projects from "./pages/Projects";
// import Footer from "./Footer";

// state is initially set to 'Home'
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // returning a component based on what the current state is
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div id="container">
      <Header />
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      <div id="main">
        {/* calling the renderPage function and returning a component based on the state of the page */}
        {renderPage()}
      </div>
    </div>
  );
}
