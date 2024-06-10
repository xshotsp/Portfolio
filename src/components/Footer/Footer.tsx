import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Juan Gallego</p>
      <p>Contact: gallegoj135@gmail.com</p>
    </footer>
  );
};

export default Footer;
