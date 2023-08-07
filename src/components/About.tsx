import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

import '../css/About.css';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`main-container ${isVisible ? 'fade-in' : 'fade-out'}`}>
            {/* Details Section */}
            <section className="details-container">
                <div className="image-section">
                    <img
                        className="personal-photo"
                        src="/me.jpg"
                        alt="Me!"
                    />
                </div>
                <div className='name-container'>
                    <h1 className="namefont">Brandon Hann</h1>
                </div>
            </section>

            {/* About Me Section */}
            <section className="about-section">
                <h2 className="section-title">About Me</h2>
                <p className="description">
                    23 y/o Computer Science student residing in Toronto, Canada. I am passionate about blockchain, software,  AI and full stack. I'm always exploring new spaces and learning new and interesting things.
                </p>
            </section>

            <section className="skills-section">
                <h2 className="section-title">My Skills</h2>
                <p className="description">
                    Typescript, JavaScript, Tailwind, Python, Solidity, Java, C++, Lua, PHP, SQL, Git
                </p>
            </section>

            {/* Download CV Section */}
            <section className="cv-download-section">
                <h2 className="section-title">Download CV</h2>
                <a
                    className="download-button"
                    href="/BrandonHann_Resume.pdf"
                    download
                >
                    <FontAwesomeIcon icon={faPaperclip} />
                    Download my CV
                </a>
            </section>

            {/* Contact Section */}
            <section className="contact-form-section">
                <h2 className="section-title">Contact Me</h2>
                <form>
                    <div className="input-container">
                        <input type="text" id="name" name="name" placeholder="Your name" />
                        <input type="email" id="email" name="email" placeholder="Your email" />
                    </div>
                    <textarea id="message" name="message" placeholder="Your message"></textarea>
                    <div className="button-container">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </section>

            {/* Portfolio Link Section */}
            <section className="portfolio-section">
                <p className="description">
                    I've made my portfolio's code public on GitHub. Feel free to check it out <a className='portfolio-link' href='https://github.com/brandonhann/portfolio' target='_blank' rel='noreferrer'>here</a>!
                </p>
            </section>

            {/* Social Links Section */}
            <section className="social-links">
                <a
                    href="https://www.youtube.com/brandon_hann"
                    className="social-icon youtube"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                    href="https://github.com/brandonhann"
                    className="social-icon github"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://linkedin.com/in/brandonhann"
                    className="social-icon linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://twitter.com/brandnhann"
                    className="social-icon twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </section>
        </div>
    );
};

export default About;
