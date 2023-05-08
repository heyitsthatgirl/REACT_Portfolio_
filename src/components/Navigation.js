import React from "react";
import Header from "./Header";
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
};

const Navigation = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <Header />
      <nav id="nav" style={styles.nav}>
        <ul>
          <li style={styles.navItem}>
            <a
              style={styles.navAnchor}
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li style={styles.navItem}>
            <a
              style={styles.navAnchor}
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </a>
          </li>
          <li style={styles.navItem}>
            <a
              style={styles.navAnchor}
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              // ternary operator that checks to see if the current page is "resume"
              // if it is, we set the current page to 'lav-link-active, otherwise set it to 'nav-link'
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li style={styles.navItem}>
            <a
              style={styles.navAnchor}
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
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
