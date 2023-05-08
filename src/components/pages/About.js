import React from "react";
import selfie from "../../assets/IMG_7028.jpeg";

const styles = {
  div: {
    textAlign: "center",
  },
  img: {
    maxHeight: "400px",
    borderRadius: "20px",
    opacity: "85%",
    marginTop: "25px",
  },
};

export default function About() {
  return (
    <div style={styles.div}>
      <h2>About Me</h2>
      <p>
        I am a part-time student currently enrolled in the fullstack coding
        bootcamp at UNC Chapel Hill. My motivation for learning how to code
        stems from my love for the creative arts, and my penchant for
        computational thinking. My personal goal is to cultivate a lifestyle
        that allows me to utilize both of these skills on a daily basis. I
        believe coding is a valuable tool I can use to accomplish this.
        <br />
        <br />I currently live in Charlotte, NC with my husband, our son, and
        our two dogs.
      </p>
      <img style={styles.img} src={selfie} alt=""></img>
    </div>
  );
}
