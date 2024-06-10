// src/pages/LandingPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const LandingPage: React.FC = () => {
    return (
        <Link to="/home" className={styles['landing-link']}>
            <div className={styles['landing-page']}>
                <header className={styles.header}>
                    <h1>Welcome to My Portfolio</h1>
                    <p>A showcase of my projects and skills</p>
                </header>

                {/* Contenido principal */}

                <footer className={styles.footer}>
                    <p>&copy; 2024 Juan Gallego</p>
                </footer>
            </div>
        </Link>
    );
};

export default LandingPage;
