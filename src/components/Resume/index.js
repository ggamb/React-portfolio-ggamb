import React from 'react';
import resumeGambardella from '../../assets/resume/resumeGambardella.docx'

function Resume() {
    return(
        <div>
            <h1>Resume</h1>

            <h2>Download my resume <a href={resumeGambardella} download='resumeGambardella.docx'>here!</a></h2>

            <h3>Proficient Technologies</h3>
            <ol>
                <li>React (this portfolio!)</li>
                <li>Javascript, jQuery, Node.js, Express.js</li>
                <li>HTML5, CSS3</li>
                <li>GraphQL</li>
                <li>Bootstrap</li>
                <li>Mongoose, MongoDB</li>
                <li>Jest testing framework</li>
                <li>Progressive Web Applications (PWAs), webpack, service workers</li>
                <li>...And always learning more!</li>
            </ol>
        </div>
        
    )
}


export default Resume;