import React, { useState } from "react";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Header from "./Header";
import Navigation from "./Navigation";
import Projects from "./pages/Projects";
import Footer from "./Footer";

const styles = {
  main: {
    width: "100vw",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingBottom: "75px",
    minHeight: "50vh",
  },
};

// state is initially set to 'Home'
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // returning a component based on what the current state is
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div style={styles.main}>{renderPage()}</div>
      <Footer />
    </div>
  );
}
