import React from 'react';
import resumeGambardella from '../../assets/resume/resumeGambardella.docx'

function Resume() {
    return(
        <>
        <h1>Resume</h1>
        <section className='center-info'>
            <h2>Download my resume <a href={resumeGambardella} download='resumeGambardella.docx'>here!</a></h2>
        <br></br>
            <h3>Proficient Technologies:</h3>
            <ol>
                <li>React (this portfolio!)</li>
                <li>Javascript, jQuery, Node.js, Express.js</li>
                <li>State</li>
                <li>HTML5, CSS3</li>
                <li>GraphQL</li>
                <li>Bootstrap API</li>
                <li>Mongoose, MongoDB</li>
                <li>Jest testing framework</li>
                <li>Progressive Web Applications (PWAs), webpack, service workers</li>
                <li>...And always learning more!</li>
            </ol>
        </section>
        </>
        
    )
}


export default Resume;