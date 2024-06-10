import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1>Juan Esteban Gallego</h1>
                <h2>Fullstack Developer</h2>
                <p>Cali, Colombia | +57 3245520395 | <a href="mailto:Gallegoj135@gmail.com">Gallegoj135@gmail.com</a></p>
                <p>
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
            </div>
        </header>
    );
};

export default Header;
