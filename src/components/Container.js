import React, { useState } from "react";
import Home from "./Home";
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Projects from "./Projects";
import Footer from "./Footer";

// state is initially set to 'Home'
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // TODO: Add a comment describing the functionality of this method
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
    <div>
      <Header />
      {/*the currentPage variable and the handlePageChange function*/}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* calling the renderPage function and returning a component based on the state of the page */}
      {renderPage()}
      <Footer />
    </div>
  );
}
