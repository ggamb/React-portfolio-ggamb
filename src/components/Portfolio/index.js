import React from 'react';
import beerBelly from '../../assets/images/beer-belly.png';
import TBD from '../../assets/images/TBD.png';
import photoPort from '../../assets/images/photoPort.png';
import weather from '../../assets/images/weather.png';
import github from '../../assets/images/Octocat.png';
import getFed from '../../assets/images/getFed.jpg'

function Project() {
    return (
        <>
            <h2 className="my-work tab-text">My Portfolio</h2>
            <section id="my-work" className="portfolio-holder">
                <div className="portfolio-module-holder">
                    <div className='portfolio-container'>
                        <img src={getFed} className='portfolio-image' />
                        <div className='middle'>
                            <div className='portfolio-text'>
                                <a href='https://github.com/ggamb/team-cuisine-project-3' target="_blank"><img src={github} className='small-Github' /></a>
                                <a href="https://get-fed-project.herokuapp.com/" target="_blank" className='project-link-text'><h3>Get Fed</h3></a>
                                <h4>An Uber Eats clone to find restaurants and menus near you!</h4>
                                <h5>Tech Stack: MERN Stack</h5>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-container'>
                        <img src={beerBelly} className='portfolio-image' />
                        <div className='middle'>
                            <div className='portfolio-text'>
                                <a href='https://github.com/ggamb/Beer-belly-developers-project-2' target="_blank"><img src={github} className='small-Github' /></a>
                                <a href="https://beer-belly.herokuapp.com/" target="_blank" className='project-link-text'><h3>Beer-Belly Developers</h3></a>
                                <h4>Come find your favorite breweries and bars!</h4>
                                <h5>Tech Stack: Handlebars.js, Express.js, MySQL</h5>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-container'>
                        <img src={TBD} className='portfolio-image' />
                        <div className='middle'>
                            <div className='portfolio-text'>
                                <a href='https://github.com/ggamb/T-B-D' target="_blank"><img src={github} className='small-Github' /></a>
                                <a href="https://evalecillos.github.io/T-B-D/" target="_blank" className='project-link-text'><h3>TunesBeDope (TBD)</h3></a>
                                <h4>Find your favorite videos and lyrics!</h4>
                                <h5>Tech Stack: JavaScript, HTML, CSS</h5>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-container'>
                        <img src={photoPort} className='portfolio-image' />
                        <div className='middle'>
                            <div className='portfolio-text'>
                                <a href='https://github.com/ggamb/photo-port' target="_blank"><img src={github} className='small-Github' /></a>
                                <a href="https://ggamb.github.io/photo-port/" target="_blank" className='project-link-text'><h3>React Photo Port</h3></a>
                                <h4>An example React photo portfolio that showcases my work in React</h4>
                                <h5>Tech Stack: Entirely in React</h5>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-container'>
                        <img src={weather} className='portfolio-image' />
                        <div className='middle'>
                            <div className='portfolio-text'>
                                <a href='https://github.com/ggamb/weather-dashboard-challenge-6' target="_blank"><img src={github} className='small-Github' /></a>
                                <a href="https://ggamb.github.io/weather-dashboard-challenge-6/" target="_blank" className='project-link-text'><h3>Weather Dashboard</h3></a>
                                <h4>Search for weather by city</h4>
                                <h5>Tech Stack: Entirely in JavaScript, HTML, CSS</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Project;