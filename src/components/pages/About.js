import React from "react";
import selfie from "../../assets/selfie.jpeg";

// styling for About section
const styles = {
  div: {
    textAlign: "center",
    // width: "600px",
  },
  p: {
    // width: "300px",
    // height: "600px",
    textAlign: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  img: {
    maxHeight: "400px",
    borderRadius: "20px",
    opacity: "85%",
    marginTop: "25px",
    border: "solid #ffa69ea9 1vw",
  },
};

// function that returns the About section
export default function About() {
  return (
    <div style={styles.div}>
      <h2>About Me</h2>
      <p style={styles.p}>
        I am a budding web developer and recent graduate of the Full-Stack
        Coding Bootcamp at UNC Chapel Hill. My motivation for learning how to
        code stems from my love for the creative arts, and my penchant for
        computational thinking. My personal goal is to cultivate a lifestyle
        that allows me to utilize both of these skills on a daily basis.
        <br />
        <br />I currently live in Charlotte, NC with my husband, our son, and
        our two dogs.
      </p>
      <img style={styles.img} src={selfie} alt=""></img>
    </div>
  );
}
