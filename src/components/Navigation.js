import React from "react";
import Header from "./Header";

// styling for nav bar
const styles = {
  nav: {
    display: "inline-flex",
    justifyContent: "space-evenly",
    background: "linear-gradient(to bottom, #FAF3DD 0%, #b8f2e6a8 100%)",
    padding: "20px",
    height: "100px",
    // position: "fixed",
    // top: "155px",
    width: "100vw",
    textAlign: "center",
  },
  navItem: {
    display: "inline",
    textAlign: "center",
    marginRight: "30px",
    background: "transparent",
  },
  navAnchor: {
    textDecoration: "none",
    background: "transparent",
    textAlign: "center",
  },
  navAnchorActive: {
    textDecoration: "none",
    background: "transparent",
    textAlign: "center",
    textShadow: "2px 2px #C8BCDA",
  },
};

// function to return nav bar
const Navigation = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <Header />
      <nav id="nav" style={styles.nav}>
        <ul>
          <li style={styles.navItem}>
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              // ternary operator to change the styling based on which anchor is in use
              style={
                currentPage === "About"
                  ? styles.navAnchorActive
                  : styles.navAnchor
              }
            >
              About
            </a>
          </li>
          <li style={styles.navItem}>
            <a
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              style={
                currentPage === "Projects"
                  ? styles.navAnchorActive
                  : styles.navAnchor
              }
            >
              Projects
            </a>
          </li>
          <li style={styles.navItem}>
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              style={
                currentPage === "Resume"
                  ? styles.navAnchorActive
                  : styles.navAnchor
              }
            >
              Resume
            </a>
          </li>
          <li style={styles.navItem}>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              style={
                currentPage === "Contact"
                  ? styles.navAnchorActive
                  : styles.navAnchor
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
