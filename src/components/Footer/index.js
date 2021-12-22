import React from 'react';
import githubImg from './assets/images/github.png'


function Footer() {
    return (
        <footer>
            <nav>
                <a href="https://github.com/ggamb" target="_blank">
                    <img className="social" src=`${githubImg}` alt="github image"></img>
                </a>
                <a href="https://www.linkedin.com/in/ggambardella/" target="_blank">
                    <img className="social" src="assets/images/linkedin.png" alt="linkedin image"></img>
                </a>
                <a href="https://twitter.com/ggambgg" target="_blank">
                    <img className="social" src="assets/images/twitter.png" alt="twitter image"></img>
                </a>
            </nav>
        </footer>
    )
}

export default Footer;