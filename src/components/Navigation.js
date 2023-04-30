import React from "react";

// const styles = {
//   nav: {
//     background: "#FAF3DD",
//     marginTop: 0,
//   },
//   ul: {
//     textAlign: "center",
//     listStyle: "none",
//   },
//   li: {
//     display: "inline-block",
//     textAlign: "center",
//     fontFamily: "Trebuchet MS",
//     marginRight: "30px",
//   },
//   a: {
//     textDecoration: "none",
//   },
// };

const Navigation = ({ currentPage, handlePageChange }) => {
  return (
    <nav>
      <ul id="navBar">
        <li id="navItem">
          <a
            id="navAnchor"
            href="#home"
            onClick={() => handlePageChange("Home")}
            // ternary operator that checks to see if the current page is "home"
            // if it is, we set the current page to 'lav-link-active, otherwise set it to 'nav-link'
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li id="navItem">
          <a
            id="navAnchor"
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li id="navItem">
          <a
            id="navAnchor"
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </a>
        </li>
        <li id="navItem">
          <a
            id="navAnchor"
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
  );
};

export default Navigation;
