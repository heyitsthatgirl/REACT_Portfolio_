import React from "react";

const styles = {
  p: {
    textAlign: "center",
  },
};

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p style={styles.p}>
        <a
          href="https://docs.google.com/document/d/1wyYNpiCdYzQSeXANp-hqYGYV0h5GeGNd/edit?usp=sharing&ouid=106744623781344894069&rtpof=true&sd=true"
          target="_blank"
          rel="noreferrer"
        >
          Click here to view my resume!
        </a>
      </p>
    </div>
  );
}
