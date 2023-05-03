import React from "react";
import lightning from "../assets/lightning.jpg";

const styles = {
  header: {
    display: "block",
    textAlign: "center",
    background: "linear-gradient(to bottom, #FFA69E 0%, #FAF3DD 100%)",
    padding: "20px",
    position: "fixed",
    top: "0",
    width: "100%",
    height: "155px",
  },
  lightning: {
    position: "fixed",
    top: "0",
    marginLeft: "-125px",
    opacity: "70%",
    maxHeight: "125px",
  },
  name: {
    fontSize: "50px",
    background: "transparent",
    textAlign: "center",
    marginBottom: "0",
  },
  p: {
    alignItems: "center",
    margin: "auto",
    fontSize: "30px",
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.name}>Hope Mansfield</h1>
      <p style={styles.p}>Web Developer</p>
      <img src={lightning} alt="" style={styles.lightning}></img>
    </header>
  );
};

export default Header;
