import React from 'react';
import styles from './NavBar.module.css'; // Importa los estilos CSS para este componente

const NavBar: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#" onClick={scrollToTop} className={styles.scrollToTop}>
                &#8679; {/* Flecha hacia arriba usando un carácter Unicode */}
            </a>
        </nav>
    );
};

export default NavBar;
