import React from 'react';
import beerBelly from '../../assets/images/beer-belly.png'
import TBD from '../../assets/images/TBD.png'
import photoPort from '../../assets/images/photoPort.png'
import weather from '../../assets/images/weather.png'

function Project() {
    return (
        <section id="my-work" className="portfolio-holder">
            <h2 className="my-work">My Porfolio</h2>
            <div className="portfolio-module-holder">
                <div className="portfolio-module one">
                    <div className="portfolio-title">
                        <img src={beerBelly} className='left' alt="Find your favorite bars and breweries!"></img>
                        <div className='portfolio-text'>
                            <h3>Beer Belly Developers</h3>
                            <p>Find your favorite bars and breweries!</p>
                            <p>
                                <a href="https://github.com/ggamb/Beer-belly-developers-project-2" target="_blank">
                                    <span className="fa fa-github"></span>
                                </a>
                                <a href="https://beer-belly.herokuapp.com/" target="_blank">Beer-Belly Developers</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-module two">
                    <div className="portfolio-title">
                        <img src={TBD} className='left' alt="Find your favorite music videos and lyrics!"></img>
                        <div className='portfolio-text'>
                            <h3>TunesBeDope</h3>
                            <p>Find your favorite music videos and lyrics!</p>
                            <p>
                                <a href="https://github.com/Xandromus/wander-must" target="_blank">
                                    <span className="fa fa-github"></span>
                                </a>
                                <a href="https://evalecillos.github.io/T-B-D/" target="_blank">TunesBeDope (TBD)</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-module three">
                    <div className="portfolio-title">
                        <img src={photoPort} className='left' alt="An example React portfolio"></img>
                        <div className='portfolio-text'>
                            <h3>React Photo Port</h3>
                            <p>An example portfolio built in React</p>
                            <p>
                                <a href="https://github.com/ggamb/photo-port" target="_blank">
                                    <span className="fa fa-github"></span>
                                </a>
                                <a href="https://ggamb.github.io/photo-port/" target="_blank">React Photo Port</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-module four">
                    <div className="portfolio-title">
                        <img src={weather} className='left' alt="A weather dashboard"></img>
                        <div className='portfolio-text'>
                            <h3>Weather Dashboard</h3>
                            <p>
                                <a href="https://github.com/ggamb/weather-dashboard-challenge-6" target="_blank">
                                    <span className="fa fa-github"></span>
                                </a>
                                <a href="https://ggamb.github.io/weather-dashboard-challenge-6/" target="_blank">Weather Dashboard</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;