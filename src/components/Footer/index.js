import React from 'react';


function Footer() {
    return (
        <footer>
            <nav class="social-nav">
                <a href="https://github.com/ggamb" target="_blank">
                    <img className="social" src="assets/images/github.png" alt="github image"></img>
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