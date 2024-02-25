import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <h2 id="h2-mySkills">About me.</h2>
      <div className="cdiv">
        <img src="assets/images/ProgramingPic-modified.png" alt="prg-pic" />
        <h3>Design and Development</h3>
        <p>
          I started learning to code when I was 15 years old because I loved
          learning how computers work and I wanted to create my own video games.
          Over time, I have gained a wealth of experience designing and
          developing web and mobile applications.
        </p>
      </div>
      <div className="cdiv">
        <img src="assets/images/ProgramingLanguages.png" alt="prg-pic" />
        <h3>Programing Languages</h3>

        <p>
          4+ years of experience in Front-End languages such as HTML5, CSS,
          JavaScript, Bootstrap, ReactJs, Angular, NextJs, Back-End languages
          such as NodeJs, MSSQL Server, MongoDB
        </p>
      </div>

      <hr />
    </>
  );
}

export default About;
