import React from 'react';
import beerBelly from '../../assets/images/beer-belly.png';
import TBD from '../../assets/images/TBD.png';
import photoPort from '../../assets/images/photoPort.png';
import weather from '../../assets/images/weather.png';
import github from '../../assets/images/Octocat.png';
import getFed from '../../assets/images/getFed.jpg';

function Project() {
    const projects = [
        {
            link: 'https://github.com/ggamb/team-cuisine-project-3',
            image: getFed,
            deployed: "https://get-fed-project.herokuapp.com/",
            name: 'Get Fed',
            description: 'An Uber Eats clone to find restaurants and menus near you!',
            stack: 'Tech Stack: MERN Stack',
            alt: 'image of Get Fed'
        },
        {
            link: 'https://github.com/ggamb/Beer-belly-developers-project-2',
            image: beerBelly,
            deployed: "https://beer-belly.herokuapp.com/",
            name: 'Beer-Belly Developers',
            description: 'Come find your favorite breweries and bars!',
            stack: 'Tech Stack: Handlebars.js, Express.js, MySQL',
            alt: "image of Beer Belly Developer"
        },
        {
            link: 'https://github.com/ggamb/T-B-D',
            image: TBD,
            deployed: "https://evalecillos.github.io/T-B-D/",
            name: 'TunesBeDope (TBD)',
            description: 'Find your favorite videos and lyrics!',
            stack: 'Tech Stack: JavaScript, HTML, CSS',
            alt: 'image of TBD'
        },
        {
            link: 'https://github.com/ggamb/photo-port',
            image: photoPort,
            deployed: "ggamb.github.io/photo-port/",
            name: 'React Photo Port',
            description: 'An example React photo portfolio that showcases my work in React',
            stack: 'Tech Stack: Entirely in React',
            alt: 'image of Photo Port'
        },
        {
            link: 'https://github.com/ggamb/weather-dashboard-challenge-6',
            image: weather,
            deployed: "https://ggamb.github.io/weather-dashboard-challenge-6/",
            name: 'Weather Dashboard',
            description: 'Search for weather by city',
            stack: 'Tech Stack: Entirely in JavaScript, HTML, CSS',
            alt: 'image of the Weather Dashboard'
        },
    ]

    return (
        <>
            <h2 className="my-work tab-text">My Portfolio</h2>
            <section id="my-work" className="portfolio-holder">
                <div className="portfolio-module-holder">
                    {
                        projects.map(project => {
                            return (
                                <>
                                    <div className='portfolio-container' key={project.name}>
                                        <img src={project.image} alt={project.alt} className='portfolio-image' />
                                        <div className='middle'>
                                            <div className='portfolio-text'>
                                                <a href={project.link} target="_blank"><img src={github} className='small-Github' /></a>
                                                <a href={project.deployed} target="_blank" className='project-link-text'><h3>{project.name}</h3></a>
                                                <h4>{project.description}</h4>
                                                <h5>{project.stack}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        )}
                </div>
            </section>
        </>
    );
}

export default Project;