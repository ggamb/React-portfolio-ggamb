import React from 'react';
import beerBelly from '../../assets/images/beer-belly.png'
import TBD from '../../assets/images/TBD.png'

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
                                <a href="https://github.com/Xandromus/wander-must" target="_blank">
                                    <span className="fa fa-github"></span>
                                </a>
                                <a href="https://beer-belly.herokuapp.com/" target="_blank">Beer-Belly Developers</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-module two">
                    <div className="portfolio-title">
                        <img src={TBD} alt="Tune in and find out!"></img>
                        <a href="https://evalecillos.github.io/T-B-D/" target="_blank"></a>
                    </div>
                </div>
                <div className="portfolio-module three">
                    <div className="portfolio-title">
                        <img src={TBD} alt="Tune in and find out!"></img>
                        <a href="https://evalecillos.github.io/T-B-D/" target="_blank"></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;