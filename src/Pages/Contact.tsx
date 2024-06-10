import React from 'react';
import styles from './Contact.module.css'; // Importa los estilos CSS para este componente

const Contact: React.FC = () => {
    return (
        <div className={styles['contact-section']}> {/* Aplica el estilo de la sección Contact */}
            <div className={styles['contact-content']}> {/* Aplica el estilo del contenido dentro de la sección Contact */}
                <h2>Contact Me</h2>
                <p>Feel free to reach out to me via the following methods:</p>
                <ul>
                    <li>Email: gallegoj135@gmail.com</li>
                    <li>Phone: +57 3245520395</li>
                    <li>LinkedIn: [Inserta tu perfil de LinkedIn aquí]</li>
                    <li>GitHub: [Inserta tu perfil de GitHub aquí]</li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
