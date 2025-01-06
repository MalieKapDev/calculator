import React from "react";
import "./project.css";
import Calculator from "./calculator";

function Project() {
  return (
    <div className="project-container">
      <div className="card">
        <h5 className="card-header" style={{ backgroundColor: "#e9ecef" }}>
          🧮 Calculator
        </h5>
        <div className="card-body">
          <h5 className="card-title">A little about this project:</h5>
          <p className="card-text">
            This JavaScript Calculator, built with React, provides a sleek and
            efficient solution for everyday calculations. Users benefit from an
            intuitive interface, responsive design, and real-time results,
            ensuring a smooth and seamless experience. Its modern aesthetics,
            mobile-friendly layout, and precise functionality make it an
            essential tool for students, professionals, and anyone in need of
            quick math solutions.
          </p>
          <p className="card-text">
            Looking for a behind-the-scenes look at how I rebuilt my Calculator?
            Discover the design decisions, challenges, and features that make it
            a standout project. Read my blog post{" "}
            <a
              href="https://codewithmalie.com/calculator-project-case-study/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{" "}
            and see how I turned this idea into a portfolio-worthy application.
          </p>
          <p className="card-text">
            Check out the code for building this Calculator on{" "}
            <a
              href="https://github.com/MalieKapDev/calculator"
              target="_blank"
              rel="noreferrer"
            >
              GitHub!
            </a>{" "}
            Don’t forget to give it a ⭐ if you find it helpful, and follow me
            for more projects like this!
          </p>
        </div>
      </div>
      <Calculator />
    </div>
  );
}

export default Project;
