import React from 'react';
import myFace from '../../assets/images/my-face.jpg'

function About() {
  return (
    <>
    <h1 id="about">About me</h1>
    <section className="my-5">
      
      <img className = "my-face" src={myFace}></img>
      <br/>
      <p id='about-me-text'>
        Financial auditor-turned-web developer interested in pursuing a career in software development.
        I am currently enrolled in The University of Texas at Austin's Coding Bootcamp and will graduate in January 2022 with an understanding of HTML, CSS, JavaScript, Web APIs, Node.js, React, State, and much more.
        I have a passion for learning and I am excited for the opportunity to work as a junior software developer in the near future!
      </p>

      
    </section>
    </>
  );
}

export default About;