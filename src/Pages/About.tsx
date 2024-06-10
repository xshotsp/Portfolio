import React from 'react';
import TechnologiesCarousel from '../components/carousel/Carousel';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet eget dui nec pretium.</p>
      <TechnologiesCarousel />
    </div>
  );
};

export default About;
