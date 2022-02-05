import React from 'react';
import myFace from '../../assets/images/my-face.jpg'

function About() {
  return (
    <>
      <h1 id="about">About me</h1>
      <section className="my-5">

        <img className="my-face" src={myFace}></img>
        <br />
        <p id='about-me-text'>
          Full stack web developer with a Master in Professional Accounting. Trained at the University of Texas at Austin Coding Bootcamp where I graduated in January 2022 with a certificate and developed skills in React, JavaScript, HTML, CSS, SQL and noSQL databases (MongoDB, MySQL2), and much more. A voracious learner with a love for new technologies and developing mobile-first applications. Team-oriented individual with strengths in attention to detail, problem solving, and process improvement.
        </p>


      </section>
    </>
  );
}

export default About;