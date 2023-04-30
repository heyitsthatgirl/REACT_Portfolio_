import React from "react";
import weather from "../../assets/weather.png";
import team from "../../assets/team.png";
import jsQuiz from "../../assets/quiz.png";
import readme from "../../assets/readme.png";
import tracker from "../../assets/tracker.png";
import ecommerce from "../../assets/ecommerce.png";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <section id="projectSection">
        <div className="project">
          E-Commerce Back End
          <a
            className="project"
            href="https://github.com/heyitsthatgirl/E-Commerce-Back-End"
            rel="noreferrer"
            target="_blank"
          >
            <img src={ecommerce} alt="" id="weather"></img>
          </a>
        </div>
        <div className="project">
          Employee Tracker
          <a
            className="project"
            href="https://github.com/heyitsthatgirl/Employee-Tracker"
            rel="noreferrer"
            target="_blank"
          >
            <img src={tracker} alt="" id="weather"></img>
          </a>
        </div>
        <div className="project">
          Team Profile Generator
          <a
            className="project"
            href="https://github.com/heyitsthatgirl/Team-Profile-Generator"
            rel="noreferrer"
            target="_blank"
          >
            <img src={team} alt="" id="weather"></img>
          </a>
        </div>
        <div className="project">
          README Generator
          <a
            className="project"
            href="https://github.com/heyitsthatgirl/README-Generator"
            rel="noreferrer"
            target="_blank"
          >
            <img src={readme} alt="" id="weather"></img>
          </a>
        </div>
        <div className="project">
          Weather Dashboard
          <a
            className="project"
            href="https://heyitsthatgirl.github.io/Weather-Dashboard/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={weather} alt="" id="weather"></img>
          </a>
        </div>
        <div className="project">
          Coding Quiz
          <a
            className="project"
            href="https://heyitsthatgirl.github.io/Coding-Quiz/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={jsQuiz} alt="" id="weather"></img>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
