import React from "react";
// import lightning from "../assets/lightning.jpg";

// styling for Header
// there was an image component I couldnt get quite right
// something is affecting mobile view but I haven't mastered it yet
const styles = {
  header: {
    // display: "block",
    textAlign: "center",
    background: "linear-gradient(to bottom, #FFA69E 0%, #FAF3DD 100%)",
    padding: "20px",
    // position: "fixed",
    // top: "0",
    width: "inherit",
    // height: "155px",
    height: "fit-content",
  },
  // lightning: {
  //   position: "absolute",
  //   top: "0",
  //   // marginLeft: "-125px",
  //   // margin: "0px",
  //   opacity: "70%",
  //   maxHeight: "75px",
  // },
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

// function to return header
const Header = () => {
  return (
    <header id="header" style={styles.header}>
      {/* <img src={lightning} alt="" style={styles.lightning}></img> */}
      <h1 style={styles.name}>Hope Mansfield</h1>
      <p style={styles.p}>Web Developer</p>
    </header>
  );
};

export default Header;

// {/* <img src={lightning} alt="" style={styles.lightning}></img> */}
