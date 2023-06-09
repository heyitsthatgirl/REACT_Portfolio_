import React from "react";
import weather from "../../assets/weather.png";
import team from "../../assets/team.png";
import jsQuiz from "../../assets/quiz.png";
import readme from "../../assets/readme.png";
import tracker from "../../assets/tracker.png";
import ecommerce from "../../assets/ecommerce.png";
import ecommerceGIF from "../../assets/ecommerce.gif";
import trackerGIF from "../../assets/tracker.gif";
import coding_quizGIF from "../../assets/coding_quiz.gif";
import weatherGIF from "../../assets/weather.gif";
import readmeGIF from "../../assets/readme.gif";
import teamGIF from "../../assets/team.gif";

// styling for Project section
const styles = {
  section: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  project: {
    height: "200px",
    width: "300px",
    background: "transparent",
    margin: "25px",
    textAlign: "center",
    textDecoration: "none",
  },
  img: {
    maxHeight: "200px",
    maxWidth: "200px",
    textAlign: "center",
    borderRadius: "20px",
  },
  subheader: {
    textAlign: "center",
  },
};

// function that returns Project section
const Projects = () => {
  return (
    <div>
      <h2 style={styles.h2}>Projects</h2>
      <section style={styles.section}>
        <div style={styles.project}>
          Weather Dashboard
          <a
            style={styles.project}
            href="https://github.com/heyitsthatgirl/Weather-Dashboard"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={weather}
              onMouseOver={(e) => (e.currentTarget.src = weatherGIF)}
              onMouseOut={(e) => (e.currentTarget.src = weather)}
              alt="icon"
              style={styles.img}
            ></img>
          </a>
        </div>
        <div style={styles.project}>
          Coding Quiz
          <a
            style={styles.project}
            href="https://github.com/heyitsthatgirl/Coding-Quiz"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={jsQuiz}
              onMouseOver={(e) => (e.currentTarget.src = coding_quizGIF)}
              onMouseOut={(e) => (e.currentTarget.src = jsQuiz)}
              alt="icon"
              style={styles.img}
            ></img>
          </a>
        </div>
        <div style={styles.project}>
          E-Commerce Back End
          <a
            style={styles.project}
            href="https://github.com/heyitsthatgirl/E-Commerce-Back-End"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={ecommerce}
              onMouseOver={(e) => (e.currentTarget.src = ecommerceGIF)}
              onMouseOut={(e) => (e.currentTarget.src = ecommerce)}
              alt="icon"
              style={styles.img}
            ></img>
          </a>
        </div>
        <div style={styles.project}>
          Employee Tracker
          <a
            style={styles.project}
            href="https://github.com/heyitsthatgirl/Employee-Tracker"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={tracker}
              onMouseOver={(e) => (e.currentTarget.src = trackerGIF)}
              onMouseOut={(e) => (e.currentTarget.src = tracker)}
              alt="icon"
              style={styles.img}
            ></img>
          </a>
        </div>
        <div style={styles.project}>
          Team Profile Generator
          <a
            style={styles.project}
            href="https://github.com/heyitsthatgirl/Team-Profile-Generator"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={team}
              onMouseOver={(e) => (e.currentTarget.src = teamGIF)}
              onMouseOut={(e) => (e.currentTarget.src = team)}
              alt="icon"
              style={styles.img}
            ></img>
          </a>
        </div>
        <div style={styles.project}>
          README Generator
          <a
            style={styles.project}
            href="https://github.com/heyitsthatgirl/README-Generator"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={readme}
              onMouseOver={(e) => (e.currentTarget.src = readmeGIF)}
              onMouseOut={(e) => (e.currentTarget.src = readme)}
              alt="icon"
              style={styles.img}
            ></img>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
