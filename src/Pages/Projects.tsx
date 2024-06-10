// src/components/Projects/Projects.tsx

import React from 'react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
    return (
        <div className={styles['project-container']}>
            <div className={styles.project}>
                <h3>QUIRKZ Marketplace</h3>
                <p>Academic Experience - Henry Bootcamp (Oct 2022 - Dec 2022)</p>
                <p>
                    Developed a marketplace for users to find sneakers from various brands at competitive prices.
                </p>
                <ul>
                    <li>Integrated secure payment gateways and robust authentication systems.</li>
                    <li>Designed a user-friendly interface with React, CSS, and Vite.</li>
                    <li>Implemented backend logic with Node.js, Express, and PostgreSQL.</li>
                </ul>
                <p>Technologies: React, CSS, Vite, Node.js, Express, PostgreSQL, SCRUM, Axios, Redux, Font Awesome</p>
                <p>
                    <a href="https://deploy-link.com" target="_blank" rel="noopener noreferrer">Live Demo</a> | 
                    <a href="https://github.com/repository-link" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </p>
            </div>

            <div className={styles.project}>
                <h3>SPA Video Games</h3>
                <p>Academic Experience - Henry Bootcamp (Jun 2022 - Jul 2022)</p>
                <p>
                    Developed a Single Page Application using React, PostgreSQL, JavaScript, and CSS.
                </p>
                <ul>
                    <li>Integrated an external API for detailed video game information.</li>
                    <li>Displayed information using cards on the main page.</li>
                </ul>
                <p>Technologies: React, PostgreSQL, JavaScript, CSS</p>
                <p>
                    <a href="https://github.com/repository-link" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </p>
            </div>
        </div>
    );
};

export default Projects;
