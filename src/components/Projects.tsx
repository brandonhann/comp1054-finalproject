import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faReact, faJsSquare, faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faFire, faRobot, faRocket, faCubes, faDiamond, faArrowRight, faWind } from "@fortawesome/free-solid-svg-icons";
import '../css/Projects.css';

const languageIcons: { [key: string]: IconDefinition } = {
    'React': faReact,
    'Firebase': faFire,
    'JavaScript': faJsSquare,
    'TypeScript': faJsSquare,
    'OpenAI': faRobot,
    'Phaser': faRocket,
    'OpenGL': faCubes,
    'C++': faDiamond,
    'NextJS': faArrowRight,
    'Tailwind': faWind,
    'Solidity': faEthereum,
};

const ProjectItem = ({ title, desc, delay, repoLink, imageLink, websiteLink, languages = [] }: { title: string, desc: string, delay: number, repoLink: string, imageLink: string, websiteLink?: string, languages?: string[] }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`project-container ${isVisible ? 'project-visible' : 'project-hidden'}`}>
            <img src={imageLink} alt={title} className="project-image" />
            <h2 className="project-title">{title}</h2>
            <p className="project-description">{desc}</p>
            <div className="project-languages">
                {languages.map((language, index) => (
                    <span key={index} className="language-tag">
                        <FontAwesomeIcon icon={languageIcons[language]} className="language-icon" /> {language}
                    </span>
                ))}
            </div>
            <div className="project-links">
                <a id="repo-link" href={repoLink} target="_blank" rel="noreferrer">View Repository</a>
                {websiteLink && <a id="website-link" href={websiteLink} target="_blank" rel="noreferrer">Website</a>}
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        { title: 'MintyGen', delay: 200, repoLink: 'https://github.com/brandonhann/mintygen-engine', imageLink: '/images/mintygen.jpg', desc: "MintyGen is an innovative NFT generator app that allows you to easily create unique and stunning NFTs. With our user-friendly web compiler and powerful engine, you can customize various aspects of your NFTs with just a few clicks. We offer a purchasable license key on the Fantom network for a quick and secure experience.", websiteLink: 'https://mintygen.com', languages: ['React', 'TypeScript', 'Tailwind', 'Solidity'] },
        { title: 'My Portfolio', delay: 400, repoLink: 'https://github.com/brandonhann/portfolio', imageLink: '/images/portfolio.jpg', desc: "(Hint, it's this website!) My Portfolio is a showcase for myself! As you see I'm showing a bit about myself, displaying my projects and my very own blog section! The blog utilizes firebase to store post data. I can post to my post section and add base64 encoded images using an admin panel I made using firebase authentication.", websiteLink: 'https://brandonhann.dev', languages: ['React', 'TypeScript', 'Firebase', 'Tailwind'] },
        { title: 'Quick-GPT', delay: 600, repoLink: 'https://github.com/brandonhann/quick-gpt', imageLink: '/images/quickgpt.jpg', desc: "Quick-GPT is a browser extension which utilizes OpenAI's API key to search to quickly make a prompt. Highlight  any text and right click 'QuickGPT Search' to get results. You can preset a prefix option, suffix option and max tokens to customize your prompts better.", languages: ['JavaScript', 'OpenAI'] },
        { title: 'OpenGL 3D Render Engine', delay: 800, repoLink: 'https://github.com/brandonhann/tritale', imageLink: '/images/opengl.jpg', desc: "My very own OpenGL 3d Render Engine built from scratch with C++. This application includes a 1st & 3rd person camera, toggle views, camera movement, lighting and physics (gravity). I used perlin noise and random seed to randomize terrain generation.", languages: ['C++', 'OpenGL'] },
        { title: 'Phaser Grid World', delay: 1000, repoLink: 'https://github.com/brandonhann/phaser-grid-world', imageLink: '/images/gridworld.jpg', desc: "Built using Typescript and Phaser3 Framework I made a 2d infinite world generator. I used random seed and saves via localstorage. I also used simplex noise for the terrain randomization. Includes a custom minimap as well to view a larger perspective area.", languages: ['React', 'Phaser', 'TypeScript'] },
        { title: 'Phi Shape Generator', delay: 1200, repoLink: 'https://github.com/brandonhann/phi-geometry-generator', imageLink: '/images/phi.jpg', desc: "This app allows you to generate unique shapes using ϕ (phi) which output many different variations. Built using nextjs.", languages: ['React', 'NextJS', 'JavaScript'] },
    ];

    return (
        <div className="projects-grid">
            {projects.map(project => (
                <ProjectItem key={project.title} title={project.title} desc={project.desc} delay={project.delay} repoLink={project.repoLink} imageLink={project.imageLink} websiteLink={project.websiteLink} languages={project.languages} />
            ))}
        </div>
    );
};

export default Projects;