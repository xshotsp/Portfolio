import React from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import styles from './Home.module.css'; // Importa los estilos CSS para esta página

const Home = () => {
    return (
        <div className={styles.home}>
            <Header />
            <NavBar />
            <main>
                <section id="about" className={styles.section}>
                    <h2 className={`${styles.componentTitle} ${styles.aboutTitle}`}>About Me</h2>
                    <About />
                </section>

                <section id="projects" className={styles.section}>
                    <h2 className={`${styles.componentTitle} ${styles.projectsTitle}`}>Projects</h2>
                    <Projects />
                </section>

                <section id="contact" className={styles.section}>
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
