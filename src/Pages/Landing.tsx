// src/pages/LandingPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <header>
                <h1>Welcome to My Portfolio</h1>
                <p>A showcase of my projects and skills</p>
            </header>
            <nav>
                <ul>
                    <li><Link to="/projects">View Projects</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </nav>
            <footer>
                <p>&copy; 2024 Your Name</p>
            </footer>
        </div>
    );
};

export default LandingPage;
