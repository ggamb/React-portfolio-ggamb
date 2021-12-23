import React from 'react';
import githubImg from '../../assets/images/github.png';
import linkedinImg from '../../assets/images/linkedin.png';
import twitterImg from '../../assets/images/twitter.png';



function Footer() {
    return (
        <footer>
            <nav>
                <a href="https://github.com/ggamb" target="_blank">
                    <img className="social" src={githubImg} alt="github image"></img>
                </a>
                <a href="https://www.linkedin.com/in/ggambardella/" target="_blank">
                    <img className="social" src={linkedinImg} alt="linkedin image"></img>
                </a>
                <a href="https://twitter.com/ggambgg" target="_blank">
                    <img className="social" src={twitterImg} alt="twitter image"></img>
                </a>
            </nav>
        </footer>
    )
}

export default Footer;