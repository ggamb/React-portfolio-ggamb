import React from 'react';
import myFace from '../../assets/images/my-face.jpg'
import { Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import Typed from 'react-typed';

function About() {

  const useStyles = makeStyles(theme => ({
    title: {
      color: '#2a628f',

    },
    subtitle: {
      color: '#3e92cc',
      marginBottom: '3rem',
    },
    typedContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100vw',
      textAlign: 'center',
      zIndex: 1
    },
  }))

  const classes = useStyles();
  

  return (
    <>
      <h1 id="about">About me</h1>
      <section>
        <div className={classes.typedContainer}>
          <img className="my-face" src={myFace}></img>
          <h2 className={classes.title}>Glenn Gambardella</h2>

          <Typography className={classes.subtitle} variant='h4'>
            <Typed
              strings={['Full Stack Web Development', 'MERN Stack', 'JavaScript', 'HTML5', 'CSS3', 'GraphQL', 'MongoDB', 'MySQL2']}
              typeSpeed={40}
              backSpeed={60}
              loop />
          </Typography>
          <br/>
          <p id='about-me-text'>
            Full stack web developer with a Master in Professional Accounting. Trained at the University of Texas at Austin Coding Bootcamp where I graduated in January 2022 with a certificate and developed skills in React, JavaScript, HTML, CSS, SQL and noSQL databases (MongoDB, MySQL2), and much more. A voracious learner with a love for new technologies and developing mobile-first applications. Team-oriented individual with strengths in attention to detail, problem solving, and process improvement.
          </p>
        </div>


      </section>
    </>
  );
}

export default About;