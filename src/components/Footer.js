import React from "react";
import coffeecup from "../assets/coffeecup.png";
import kermit from "../assets/kermit.gif";
import githubLogo from "../assets/github-mark.svg";
import linkedInLogo from "../assets/LI-In-Bug.png";

// styling for Footer
const styles = {
  footer: {
    // background: "linear-gradient(to bottom, #c8bcda43 0%, #ffa69ef1 100%)",
    background: "transparent",
    textAlign: "center",
    // height: "60px",
    // position: "fixed",
    // bottom: "0",
    width: "100%",
    marginTop: "auto",
  },
  h6: {
    fontSize: "14px",
    background: "transparent",
  },
  img: {
    height: "50px",
    marginBottom: "-30px",
    padding: "5px",
    opacity: "75%",
  },
};

// function to return Footer
const Footer = () => {
  return (
    <div>
      <footer style={styles.footer}>
        {/* link to github */}
        <a
          href="https://github.com/heyitsthatgirl"
          rel="noreferrer"
          target="_blank"
        >
          <img style={styles.img} src={githubLogo} alt="github icon"></img>
        </a>
        {/* just for fun */}
        <img
          style={styles.img}
          src={coffeecup}
          onMouseOver={(e) => (e.currentTarget.src = kermit)}
          onMouseOut={(e) => (e.currentTarget.src = coffeecup)}
          alt="coffe cup"
        ></img>
        {/* link to linkedin */}
        <a
          href="https://www.linkedin.com/in/hope-mansfield-32729b276/"
          rel="noreferrer"
          target="_blank"
        >
          <img style={styles.img} src={linkedInLogo} alt="linked in icon"></img>
        </a>
        <h6 style={styles.h6}>Made with coffee and React</h6>
      </footer>
    </div>
  );
};

export default Footer;
